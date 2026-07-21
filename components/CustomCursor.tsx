'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<'none' | 'link' | 'project'>('none');
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // Use Motion values instead of React state to prevent re-renders on every mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Very stiff spring = snappy, near-instant following
  const springConfig = { damping: 40, stiffness: 1200, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on non-touch desktop screens (pointer: fine = mouse)
    const checkDesktop = () => {
      const isPointerFine = window.matchMedia('(pointer: fine)').matches;
      const isWide = window.innerWidth >= 1024;
      setIsDesktop(isPointerFine && isWide);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

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

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch/tablet/mobile
  if (!isDesktop) return null;

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
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      >
        <motion.span
          className="text-black text-xs font-bold uppercase tracking-wider text-center leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoverType === 'project' && pathname === '/' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {pathname === '/' ? 'View' : ''}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
