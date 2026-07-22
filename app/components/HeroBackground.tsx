'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      flickerSpeed: number;
      flickerOffset: number;
    }> = [];

    let shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.1,
          speed: Math.random() * 0.3 + 0.1,
          flickerSpeed: Math.random() * 0.02 + 0.005,
          flickerOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnShootingStar = () => {
      if (Math.random() > 0.02) return; // 2% chance per frame
      shootingStars.push({
        x: Math.random() * (canvas.width / 2), // Start from left half
        y: Math.random() * (canvas.height / 2), // Start from top half
        length: Math.random() * 80 + 20,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // roughly 45 degrees down-right
      });
    };

    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles (stars)
      for (const p of particles) {
        const flicker = Math.sin(time * p.flickerSpeed + p.flickerOffset) * 0.3 + 0.7;
        const alpha = p.opacity * flicker;

        // Some particles are bright light-blue, most are pure white
        if (p.size > 1.2) {
          ctx.fillStyle = `rgba(190, 210, 255, ${Math.min(1, alpha * 1.5)})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw and update shooting stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        const endX = star.x - Math.cos(star.angle) * star.length;
        const endY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Move
        star.x += Math.cos(star.angle) * star.speed * 4;
        star.y += Math.sin(star.angle) * star.speed * 4;
        star.opacity -= 0.008;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cosmic Nebula Clouds */}
      <div 
        className="absolute top-[10%] right-[20%] w-[60%] h-[60%] rounded-full opacity-30 pointer-events-none mix-blend-screen animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(140, 80, 180, 0.05) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute top-[30%] right-[40%] w-[50%] h-[50%] rounded-full opacity-20 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(44, 82, 245, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[10%] w-[70%] h-[70%] rounded-full opacity-30 pointer-events-none mix-blend-screen animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(153, 169, 255, 0.04) 0%, rgba(44, 82, 245, 0.03) 40%, transparent 60%)',
          filter: 'blur(90px)',
          animationDuration: '12s'
        }}
      />

      {/* Sun/Curve Light Cast (stretching across the page) */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: 'linear-gradient(135deg, rgba(153, 169, 255, 0.08) 0%, rgba(44, 82, 245, 0.03) 30%, transparent 70%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top Left golden arc (sun curve) */}
      <div 
        className="absolute top-0 left-0 w-[150%] md:w-[120%] lg:w-[100%] pointer-events-none"
        style={{
          aspectRatio: '1/1',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at top left, #050505 0%, #000 100%)',
          boxShadow: '10px 10px 40px rgba(44, 82, 245, 0.2), 2px 2px 10px rgba(153, 169, 255, 0.5), inset -20px -20px 40px rgba(44, 82, 245, 0.1)',
          borderBottom: '1px solid rgba(153, 169, 255, 0.9)',
          borderRight: '1px solid rgba(153, 169, 255, 0.9)'
        }}
      />

      {/* Intense solar flare glow exactly at the center of the curve (top left corner) */}
      <div 
        className="absolute top-0 left-0 w-[40%] h-[40%] pointer-events-none mix-blend-screen"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(153, 169, 255, 0.15) 0%, rgba(44, 82, 245, 0.05) 40%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />



      {/* Animated star/particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}
