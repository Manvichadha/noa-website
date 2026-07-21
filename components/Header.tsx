'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText('nb@noaberger.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/#services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Founder', href: '/about#founder' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-sm border-b border-white/10' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-[60] cursor-hover" aria-label="BLEUKEI Home">
            <div className="relative h-14 w-44">
              <Image
                src="/images/bleukei-logo-dark.png"
                alt="BLEUKEI"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-8 relative z-[60]">
            {/* Hamburger / Close toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="group flex items-center gap-4 cursor-hover transition-colors duration-300 text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-sm tracking-wider">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              {/* Two-bar icon that pivots into an X */}
              <div className="flex flex-col justify-center w-6 h-5 gap-0">
                <motion.span
                  className="block h-0.5 w-full bg-white origin-center rounded-full"
                  animate={
                    isOpen
                      ? { rotate: 45, y: 5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white origin-center rounded-full mt-2"
                  animate={
                    isOpen
                      ? { rotate: -45, y: -5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </button>

            <Link
              href="/contact"
              className="hidden md:block cursor-hover font-medium transition-colors duration-300 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black text-white overflow-y-auto flex flex-col pt-32 pb-12 px-6 md:px-12 lg:px-24"
          >
            <div className="max-w-[1400px] mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

              {/* Left Side - Links */}
              <div className="flex flex-col justify-center">
                <nav className="flex flex-col space-y-4 md:space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '100%', opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.05) }}
                      className="overflow-hidden"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          setIsOpen(false);
                          if (link.href.includes('#')) {
                            const [targetPath, targetId] = link.href.split('#');
                            const currentPath = window.location.pathname;
                            
                            // If navigating to a hash on the current page, manually scroll after unlock
                            if (currentPath === targetPath || (currentPath === '/' && targetPath === '/')) {
                              e.preventDefault();
                              setTimeout(() => {
                                const el = document.getElementById(targetId);
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                  window.history.pushState({}, '', link.href);
                                }
                              }, 100); // Wait for overflow:hidden to be removed
                            } else {
                              // If navigating to a DIFFERENT page with a hash, Next.js often drops the scroll.
                              // We let Next.js change the route, and manually trigger the scroll after it mounts.
                              setTimeout(() => {
                                const el = document.getElementById(targetId);
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, 600); // Wait 600ms for the new page to paint
                            }
                          }
                        }}
                        className="group inline-flex items-center cursor-hover text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight"
                      >
                        {link.name}
                        <span className="block h-[2px] bg-white absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Side - CTA */}
              <div className="flex flex-col justify-center md:justify-end pb-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                    Want to start a project together?<br />
                    <span className="text-[#A3A3A3]">Get in touch</span>
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#A3A3A3] text-sm mb-4">Email</h4>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">{['nb', '@', 'noaberger.com'].join('')}</span>
                        <button
                          onClick={handleCopy}
                          className="cursor-hover flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#A3A3A3] text-sm mb-4">Social</h4>
                      <div className="flex flex-col gap-2">
                        <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="cursor-hover font-medium hover:text-white/70 transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/noableu/" target="_blank" rel="noopener noreferrer" className="cursor-hover font-medium hover:text-white/70 transition-colors">Instagram</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}