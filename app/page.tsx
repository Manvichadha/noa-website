'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Zap,
  Settings2,
  Code2,
  ArrowRight,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const BOOKING_URL = 'https://calendar.app.google/9HkGH8jzjx82fwfk8';

// Glass card component
function GlassCard({
  children,
  className = '',
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl ${
        hover ? 'transition-all duration-300 hover:glass-hover hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Section heading
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-sm font-semibold tracking-widest uppercase text-teal-400 mb-4">
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">{subtitle}</p>
      )}
    </motion.div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-royal-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-teal-500/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block glass rounded-full px-4 py-2 text-sm text-white/70 mb-8"
        >
          Growth &amp; Operations Consultancy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Growth, <span className="gradient-text">engineered.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/65 max-w-2xl mx-auto mb-10 text-balance"
        >
          BLEUKEI helps ambitious businesses scale — marketing that wins attention,
          and the automation, operations, and technology that win back your time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-4 rounded-xl hover:bg-white/90 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a Call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass glass-hover font-semibold px-7 py-4 rounded-xl text-white/90 hover:text-white transition-colors"
          >
            Tell Us About Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section — the four pillars
function ServicesSection() {
  const services = [
    {
      icon: Megaphone,
      accent: 'text-royal-400',
      title: 'Marketing',
      description:
        'Strategy and execution that gets you found and chosen.',
      tags: ['Social Media', 'Brand Strategy', 'GEO + SEO', 'Partnerships & Sponsorships'],
    },
    {
      icon: Zap,
      accent: 'text-teal-400',
      title: 'Automation & AI',
      description:
        'AI-powered systems that handle the repetitive work, so your team can do the valuable work.',
      tags: ['AI Workflows', 'Lead Nurture', 'Reporting', 'Custom Agents'],
    },
    {
      icon: Settings2,
      accent: 'text-royal-400',
      title: 'Operations',
      description:
        'Streamlined processes that make the business run smoothly without depending on you for everything.',
      tags: ['Process Design', 'Systems & SOPs', 'Dashboards', 'Time Recovery'],
    },
    {
      icon: Code2,
      accent: 'text-teal-400',
      title: 'Tech Development',
      description:
        'Websites, internal tools, and integrations built to fit how your business actually works.',
      tags: ['Web Development', 'Internal Tools', 'Integrations', 'AI Implementation'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="What We Do"
          title="Four ways we move the needle"
          subtitle="End-to-end growth: visibility on the front end, efficiency on the back end."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-8 h-full">
                <service.icon className={`w-8 h-8 ${service.accent} mb-5`} />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-white/50 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: '01',
      name: 'Clarity',
      description:
        'We audit your business — what is working, what is leaking time and money, and where the biggest opportunities sit. No templates, no assumptions.',
    },
    {
      number: '02',
      name: 'Strategy',
      description:
        'A 90-day roadmap with specific goals, specific tactics, and clear success metrics. You know exactly what we are doing and why.',
    },
    {
      number: '03',
      name: 'Execution',
      description:
        'We build and implement alongside your team — campaigns, systems, and automation working together, not in silos.',
    },
    {
      number: '04',
      name: 'Optimization',
      description:
        'We measure against targets, scale what works, and kill what does not. Growth compounds; so does our work.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-royal-700/10 rounded-full blur-[180px]" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 relative">
        <SectionHeading
          eyebrow="How We Work"
          title="Complex growth, simplified"
          subtitle="A proven four-phase cycle that turns ambitious goals into measurable results."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-7 h-full" hover={false}>
                <p className="text-sm font-bold gradient-text-teal mb-4">{step.number}</p>
                <h3 className="text-xl font-semibold mb-3">{step.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why BLEUKEI Section
function WhySection() {
  const points = [
    {
      title: 'Builders, not just advisors',
      description:
        'We do not hand you a strategy deck and disappear. We build and run the systems — automation, tools, and infrastructure that keep working after the engagement.',
    },
    {
      title: 'Founder-led, every engagement',
      description:
        'You work directly with the founder. No account managers, no hand-offs to junior staff. The thinking that builds the strategy is the same presence that executes it.',
    },
    {
      title: 'AI-native by default',
      description:
        'Every system we build leverages AI where it actually helps — not as a buzzword, but as leverage that lets a small team operate like a big one.',
    },
    {
      title: 'Results-first, always measurable',
      description:
        'Clear baselines in week one. If we cannot tie a metric to revenue, leads, or time saved, we do not track it.',
    },
  ];

  return (
    <section id="why" className="py-24 sm:py-32 relative">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Why BLEUKEI"
          title={
            <>
              Built different, <span className="gradient-text">on purpose</span>
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-8 h-full" hover={false}>
                <CheckCircle2 className="w-6 h-6 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-white/55 leading-relaxed">{point.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-600/10 rounded-full blur-[180px]" />
      </div>
      <div className="container mx-auto max-w-5xl px-4 relative">
        <SectionHeading
          eyebrow="Get Started"
          title="Ready to grow?"
          subtitle="Book a free consultation, or tell us about your project and we will respond within one business day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Booking card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between glow-royal" hover={false}>
              <div>
                <Calendar className="w-8 h-8 text-royal-400 mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Book a free consultation</h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  Thirty minutes, no pitch, no pressure. We talk about your business and
                  whether we are a fit.
                </p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-royal-600 hover:bg-royal-500 text-white font-semibold px-6 py-4 rounded-xl transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-500/60 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-500/60 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-white/60 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-500/60 transition-colors"
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-teal-500/60 transition-colors resize-none"
                    placeholder="What are you trying to grow, fix, or build?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="flex items-center gap-2 text-teal-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Message sent. We will get back to you within one business day.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-royal-300 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Email us directly at nb@noaberger.com.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/10 py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold tracking-wide">BLEUKEI</p>
            <p className="text-white/40 text-sm mt-1">Growth &amp; Operations Consultancy</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/about" className="text-white/50 hover:text-white transition-colors">
              About
            </a>
            <a href="/still-curious" className="text-white/50 hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href="https://www.linkedin.com/in/noabberger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/noableu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-teal-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:nb@noaberger.com"
              className="text-white/50 hover:text-teal-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-white/30 text-xs text-center sm:text-left mt-8">
          © {new Date().getFullYear()} BLEUKEI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
