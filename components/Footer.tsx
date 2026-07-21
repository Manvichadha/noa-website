'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Copy } from 'lucide-react';

function RevealLine({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-4 px-6 md:px-12 lg:px-24 rounded-t-[3rem]">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="mb-16">
          <RevealLine>
            <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1] font-bold tracking-[-0.02em]">
              Want to start a project together?
            </h2>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1] font-bold tracking-[-0.02em] text-[#A3A3A3]">
              Get in touch
            </h2>
          </RevealLine>
        </div>

        <div className="border-t border-white/10 pt-8 pb-2">
          {/* Top Half: Columns */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
            
            {/* Col 1: Logo */}
            <div className="md:w-1/3">
              <div className="relative h-8 w-28">
                <Image src="/images/bleukei-logo-dark.png" alt="BLEUKEI" fill className="object-contain object-left" />
              </div>
            </div>

            {/* Cols 2-4: Links */}
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="flex flex-col gap-4">
                <Link 
                  href="/#services" 
                  onClick={(e) => {
                    if (window.location.pathname !== '/') {
                      setTimeout(() => {
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 600);
                    }
                  }}
                  className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold"
                >
                  Services
                </Link>
                <Link href="/work" className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">Work</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/about" className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">About</Link>
                <Link href="/faq" className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">FAQ</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">Contact</Link>
                <Link href="/privacy-policy" className="text-[#A3A3A3] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">Privacy</Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-6"></div>

          {/* Bottom Half: Social & Copyright */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/noableu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-3 text-sm text-[#A3A3A3]">
                <span>{['nb', '@', 'noaberger.com'].join('')}</span>
                <button onClick={(e) => {
                  navigator.clipboard.writeText(['nb', '@', 'noaberger.com'].join(''));
                  const icon = e.currentTarget.querySelector('svg');
                  if (icon) {
                    icon.style.color = '#4ade80';
                    setTimeout(() => icon.style.color = '', 2000);
                  }
                }} className="hover:text-white transition-colors" aria-label="Copy email">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-center text-[#A3A3A3] text-sm">
              © {new Date().getFullYear()} BLEUKEI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
