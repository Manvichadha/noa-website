"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const differentiators = [
  {
    icon: "⚡",
    title: "AI-Powered, Not Just Advice",
    description: "We don't just tell you what to do — we build and run the systems that do it. Automation, AI tools, and operational infrastructure that keeps working after we've left the room."
  },
  {
    icon: "🎯",
    title: "Built for Local Business",
    description: "We're not enterprise consulting repackaged for small budgets. Every framework, every tactic, every metric is built around the reality of running a local business — tight margins, limited bandwidth, and real stakes."
  },
  {
    icon: "🤝",
    title: "Founder-Led, Every Engagement",
    description: "You work directly with Noa. No account managers, no hand-offs to junior staff. The same thinking and experience that built the strategy is the same presence that executes it with you."
  },
  {
    icon: "📊",
    title: "Results-First, Always Measurable",
    description: "We establish clear baselines in week one and measure everything that matters — not vanity metrics. If we can't tie it to revenue, leads, or time saved, we don't track it."
  }
];

const steps = [
  {
    number: "01",
    name: "Clarity",
    description: "We deep-dive into your business. We talk to your team, review your numbers, and audit what's actually working versus what you think is working. The goal is a clear-eyed picture of your starting point and your biggest opportunities — no sugarcoating."
  },
  {
    number: "02",
    name: "Strategy",
    description: "We build your 90-day growth roadmap. Specific goals, specific tactics, specific responsibilities. You'll know exactly what we're doing, why we're doing it, and what success looks like. This is your playbook — not a generic template."
  },
  {
    number: "03",
    name: "Execution",
    description: "We get to work. We implement the campaigns, build the systems, and run the initiatives alongside your team. We're in the trenches with you — not consultants who disappear after the plan is written."
  },
  {
    number: "04",
    name: "Optimization",
    description: "We measure everything against our targets. We identify what's working, kill what isn't, and double down on what's driving results. Growth isn't a project with an end date — it's a continuous cycle of learning and compounding."
  }
];

const About = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We're in the business of<br />
            <span className="text-teal-400">giving you back your business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most owners started their business to do something they love. Not to spend every day on operations, marketing, and admin. We're here to fix that.
          </p>
        </motion.div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">The Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I spent years in sports sponsorship brokerage watching how serious brands operated — the strategy, the systems, the playbooks that made everything compound over time. Then I'd talk to local business owners and see the gap. Great products, loyal customers, real talent — and zero visibility. Not because they weren't good enough, but because nobody had ever shown them how to compete.
              </p>
              <p>
                The tools that big companies take for granted — brand positioning, customer retention systems, data-driven marketing — none of it was being built for businesses doing $500K or $2M a year. The agencies that claimed to help were either too expensive, too generic, or too focused on looking busy instead of driving results.
              </p>
              <p>
                That's what BLEUKEI is built to fix. We bring the same strategic thinking that works at the top of the market, and we make it work for local businesses — with the automation and AI infrastructure to make it sustainable, not just a one-time campaign.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              There are a lot of consultants. Here's why clients choose BLEUKEI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-teal-500/40 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Four phases. No fluff. Designed to get results fast and keep them compounding.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                  <span className="text-teal-400 font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to get your time back?</h2>
          <p className="text-gray-400 mb-8">Book a free 30-minute consultation. No pitch, no pressure — just a real conversation about your business.</p>
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

export default About;
