"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients see early indicators within 30 days — improved visibility, more leads coming in, operational time savings. Meaningful revenue impact typically shows at 60–90 days as the systems compound. We set specific milestones upfront so you always know what to expect by when."
  },
  {
    q: "What size businesses do you work with?",
    a: "Local and small businesses doing $200K–$5M in annual revenue. That sweet spot where you have real traction but haven't yet built the operational infrastructure to scale without chaos. We're not for solopreneurs just starting out, and we're not for large enterprises — we work best with owners who are ready to grow but need the right systems."
  },
  {
    q: "How is BLEUKEI different from a marketing agency?",
    a: "Marketing agencies run campaigns. We build the underlying infrastructure that makes everything compound — operations, automation, visibility, systems. We also implement AI tools that reduce your team's workload by 20–40%. The result isn't just more leads; it's a business that runs better with less of your time."
  },
  {
    q: "What does the process actually look like?",
    a: "Four phases: Clarity (we audit your business and identify the biggest opportunities), Strategy (we build a 90-day roadmap with specific goals and metrics), Execution (we implement alongside your team), and Optimization (we measure, iterate, and scale what's working). The whole cycle takes 90 days to get to meaningful results, then we keep compounding."
  },
  {
    q: "How much does it cost?",
    a: "We quote based on the scope of your situation after a free consultation. We don't post rates because every business is different — a single-location café has different needs than a multi-location fitness studio. What we can tell you: our pricing is project-based (not hourly), transparent, and tied to defined deliverables. Book a free call and we'll be direct about what makes sense."
  },
  {
    q: "Do you work with businesses outside Hawaii?",
    a: "Yes. While we started in Hawaii and understand the local market deeply, we work with businesses across the US. Most of our work is done remotely — strategy, systems, and marketing translate regardless of location."
  },
  {
    q: "What if it doesn't work?",
    a: "We establish clear success metrics before we start. If we're not hitting targets by the 60-day mark, we diagnose why and adjust the strategy — at no extra charge. We don't disappear when things get hard. We've worked through enough edge cases to know that the path to results is rarely perfectly straight."
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute consultation. We'll talk about your business, your challenges, and whether we're a fit. No pitch, no pressure — just an honest conversation. If it makes sense to work together, we'll outline a proposal within a few days."
  }
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span className="font-medium text-white">{q}</span>
        <span className={`flex-shrink-0 text-teal-400 text-xl transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const StillCurious = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-3xl text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Everything you need to know</h1>
          <p className="text-gray-400 text-lg">Honest answers to the questions we get most.</p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10"
          >
            Frequently Asked Questions
          </motion.h2>
          <div>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Quiz — Coming Soon */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 rounded-2xl p-12 text-center"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-3">2-Minute Visibility Quiz</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              Find out exactly where your business is losing visibility — and what to fix first.
            </p>
            <span className="inline-block bg-white/10 text-gray-300 text-sm font-medium py-2 px-4 rounded-full">
              Coming Soon
            </span>
          </motion.div>
        </div>
      </section>

      {/* Resources — Coming Soon */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 rounded-2xl p-12 text-center"
          >
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-3">Free Resources</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              Guides, checklists, and templates for local business owners. No fluff.
            </p>
            <span className="inline-block bg-white/10 text-gray-300 text-sm font-medium py-2 px-4 rounded-full">
              Coming Soon
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">Just ask. Book a free call and we'll answer everything directly.</p>
          <Link
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default StillCurious;
