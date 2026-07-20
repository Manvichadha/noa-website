'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  const handleCopy = () => {
    navigator.clipboard.writeText('nb@noaberger.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Founder', href: '/#founder' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-sm border-b border-white/10' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <Link href="/" className="relative z-[60] cursor-hover">
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 text-white`}>
              BLEUKEI
            </span>
          </Link>

          <div className="flex items-center gap-8 relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`group flex items-center gap-4 cursor-hover transition-colors duration-300 text-white`}
            >
              <span className="font-medium text-sm tracking-wider">Menu</span>
              <div className="flex flex-col gap-1.5 w-8">
                <motion.div
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0
                  }}
                  className={`h-0.5 w-full transition-colors duration-300 bg-white`}
                />
                <motion.div
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0
                  }}
                  className={`h-0.5 w-full transition-colors duration-300 bg-white`}
                />
              </div>
            </button>

            <Link
              href="/#contact"
              className={`hidden md:block cursor-hover font-medium transition-colors duration-300 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black text-sm`}
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
                        onClick={() => setIsOpen(false)}
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
                    <span className="text-white/50">Get in touch</span>
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white/50 text-sm mb-4">Email</h4>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">nb@noaberger.com</span>
                        <button
                          onClick={handleCopy}
                          className="cursor-hover flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white/50 text-sm mb-4">Social</h4>
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