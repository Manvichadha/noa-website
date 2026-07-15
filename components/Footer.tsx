'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('nb@noaberger.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <div className="overflow-hidden mb-4">
            <motion.h2 
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,6vw,8rem)] font-bold tracking-tighter leading-[0.9]"
            >
              Want to start a
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(3rem,6vw,8rem)] font-bold tracking-tighter leading-[0.9] text-white/50"
            >
              project together?
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-b border-white/10 pb-24">
          
          <div className="lg:col-span-2">
            <p className="text-sm font-mono text-white/30 uppercase tracking-widest mb-6">Email</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <span className="text-2xl md:text-3xl font-light">nb@noaberger.com</span>
              <button 
                onClick={handleCopy}
                className="cursor-hover inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors w-fit"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-mono text-white/30 uppercase tracking-widest mb-6">Pages</p>
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Still Curious?', 'Contact'].map((label) => (
                <Link key={label} href={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '-')}`} className="cursor-hover text-lg text-white/60 hover:text-teal-400 transition-colors w-fit">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-mono text-white/30 uppercase tracking-widest mb-6">Social</p>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="cursor-hover text-lg text-white/60 hover:text-teal-400 transition-colors w-fit">LinkedIn</a>
              <a href="https://www.instagram.com/noableu/" target="_blank" rel="noopener noreferrer" className="cursor-hover text-lg text-white/60 hover:text-teal-400 transition-colors w-fit">Instagram</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/30 font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BLEUKEI</p>
          <p>Built with AI-powered operations</p>
        </div>
      </div>
    </footer>
  );
}
