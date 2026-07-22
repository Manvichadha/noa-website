'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Linkedin, Instagram, Mail, Copy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

// --- Utility Components ---
function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeInUp({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
// -------------------------

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xqedgjon', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start flex-wrap">
            <RevealLine>
              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white">
                Get in touch
              </h1>
            </RevealLine>
          </div>
          <FadeInUp delay={0.2} className="mt-6 max-w-2xl">
            <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light">
              Book a free consultation, or tell us about your project and we will respond within one business day.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content (Forms & Cards) */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Booking Card */}
            <FadeInUp delay={0.4} className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <Calendar className="w-6 h-6 text-white mb-5" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Book a free consultation</h3>
                  <p className="text-[#A3A3A3] leading-relaxed mb-8">
                    Thirty minutes, no pitch, no pressure. We talk about your business and whether we are a fit.
                  </p>
                </div>
                <a
                  href="https://calendar.app.google/9HkGH8jzjx82fwfk8"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 inline-flex justify-center items-center gap-2 bg-white text-black font-semibold px-6 py-4 rounded-xl transition-colors w-full hover:bg-white/90"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </a>
              </div>
            </FadeInUp>

            {/* Form Card */}
            <FadeInUp delay={0.5} className="lg:col-span-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-[#A3A3A3] mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#A3A3A3] focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-[#A3A3A3] mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#A3A3A3] focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-[#A3A3A3] mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#A3A3A3] focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your business"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#A3A3A3] mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#A3A3A3] focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder="What are you trying to grow, fix, or build?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-xl transition-all hover:bg-white/90 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : status === 'success' ? (
                      '✓ Message Sent'
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  {status === 'success' && (
                    <div className="mt-4 rounded-xl border border-teal-500/30 bg-teal-500/10 px-5 py-4">
                      <p className="text-sm text-teal-300 font-medium">Thanks for reaching out. We read every message and respond within one business day.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <p className="mt-4 text-sm text-red-400">
                      Something went wrong. Please try again or email us at {['nb', '@', 'noaberger.com'].join('')}
                    </p>
                  )}
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
