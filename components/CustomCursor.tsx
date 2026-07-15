'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<'none' | 'link' | 'project'>('none');
  const [isMobile, setIsMobile] = useState(true);

  // Use Motion values instead of React state to prevent re-renders on every mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animation directly on the motion values for 60fps buttery smooth tracking
  const springConfig = { damping: 25, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isProject = target.closest('.cursor-project');
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.tagName.toLowerCase() === 'button' || 
                     target.closest('a') || 
                     target.closest('button') || 
                     target.closest('.cursor-hover');

      if (isProject) {
        setHoverType('project');
      } else if (isLink) {
        setHoverType('link');
      } else {
        setHoverType('none');
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition, { passive: true });
      window.addEventListener('mouseover', handleMouseOver, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  // Determine size based on hover state
  let size = 16;
  if (hoverType === 'link') size = 64;
  if (hoverType === 'project') size = 120;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] will-change-transform mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div 
        className="bg-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.span
          className="text-black text-xs font-bold uppercase tracking-wider text-center leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoverType === 'project' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
