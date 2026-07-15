'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-40 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm font-mono uppercase tracking-widest mb-16">Effective: June 2026</p>

          <div className="space-y-12 text-white/80 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What we collect</h2>
              <p>When you submit our contact form, we collect the information you provide: your name, email address, company name, and message. If you book a call through our scheduling link, scheduling is handled by Google Calendar under Google's own privacy policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How we use it</h2>
              <p>We use your contact information solely to respond to your inquiry and, where relevant, to discuss working together. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service providers</h2>
              <p>Contact form submissions are processed by Formspree (formspree.io), which transmits them to our email. Our site is hosted on Cloudflare Pages. These providers process data under their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data retention and your rights</h2>
              <p>We keep inquiry emails for as long as needed to handle the conversation. You can request access to or deletion of your information at any time by emailing nb@noaberger.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and analytics</h2>
              <p>This site does not set marketing cookies. Our hosting provider may collect standard server logs (such as IP address and browser type) for security and performance.</p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-16">
              <p>Questions about this policy: <a href="mailto:nb@noaberger.com" className="text-white hover:text-white/70 transition-colors">nb@noaberger.com</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
