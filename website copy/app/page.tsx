'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Megaphone,
  TrendingUp,
  ShieldCheck,
  Zap,
  Settings2,
  Code2,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Plus,
} from 'lucide-react';

const BOOKING_URL = 'https://calendar.app.google/9HkGH8jzjx82fwfk8';

// Reusable text reveal component matching reference's translate3d(0, 105%, 0)
function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Fade in up component
function FadeInUp({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Sections ---

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-8 px-6 md:px-12 lg:px-24 text-center mt-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-600/10 rounded-full blur-[160px] transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] transform-gpu will-change-transform" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        <FadeInUp delay={0.1}>
          <div className="border border-white/20 rounded-full px-6 py-2 mb-10 text-sm font-medium text-white/70">
            Growth & Operations Consultancy
          </div>
        </FadeInUp>
        
        <div className="mb-10 flex flex-wrap justify-center gap-x-4">
          <RevealLine delay={0.2}>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Growth,
            </h1>
          </RevealLine>
          <RevealLine delay={0.3}>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[1.05] font-bold tracking-[-0.02em] text-royal-400">
              engineered.
            </h1>
          </RevealLine>
        </div>

        <FadeInUp delay={0.5} className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/70 mb-6 font-light">
            BLEUKEI helps ambitious businesses scale: marketing that wins attention,
            and the automation, operations, and technology that win back your time.
          </p>
          <p className="text-[clamp(0.9rem,1vw,1.1rem)] leading-relaxed text-white/50 mb-12 max-w-xl">
            For business leaders who know they should be doing more, but don&apos;t have the
            time, expertise, or energy to do it themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover group relative overflow-hidden inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book a Call
              </span>
            </a>
            <a
              href="#contact"
              className="cursor-hover inline-flex items-center gap-2 font-medium px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Tell Us About Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function CapabilityMarquee() {
  const capabilities = [
    'Social Media', 'Brand Strategy', 'GEO + SEO', 'Partnerships & Sponsorships',
    'Sales Automation', 'Outbound', 'AI Workflows', 'Lead Nurture',
    'Process Design', 'Operations', 'Dashboards', 'Web Development',
    'Integrations', 'AI Implementation',
  ];
  const doubled = [...capabilities, ...capabilities];
  return (
    <div className="py-12 border-y border-white/10 overflow-hidden bg-black relative z-10">
      <div className="flex w-max animate-marquee gap-6 px-3">
        {doubled.map((cap, i) => (
          <span key={i} className="flex items-center gap-4 whitespace-nowrap text-xl md:text-2xl font-light text-white/60">
            <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-teal-400' : 'bg-royal-400'}`} />
            {cap}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      number: '01', icon: Megaphone, accent: 'text-royal-400', title: 'Marketing',
      description: 'Strategy and execution that gets you found and chosen: across search, social, and the rooms you are not in yet.',
      tags: ['Social Media', 'Brand Strategy', 'GEO + SEO', 'Partnerships & Sponsorships'],
    },
    {
      number: '02', icon: TrendingUp, accent: 'text-teal-400', title: 'Sales',
      description: 'Pipelines that fill themselves: outbound systems that find the right prospects, reach out, book the call, and follow up so nothing slips.',
      tags: ['Outbound Systems', 'CRM Integration', 'Scheduling & Follow-up', 'Signal Tracking'],
    },
    {
      number: '03', icon: Zap, accent: 'text-royal-400', title: 'Automation & AI',
      description: 'Systems that handle the repetitive work, so your team can do the valuable work. Example: a lead comes in, your CRM is updated and tagged, and a follow-up goes out in minutes, hands-free.',
      tags: ['AI Workflows', 'Lead Nurture', 'Reporting', 'Custom Agents'],
    },
    {
      number: '04', icon: Settings2, accent: 'text-teal-400', title: 'Operations',
      description: 'Streamlined processes that make the business run smoothly without depending on you for everything.',
      tags: ['Process Design', 'Systems & SOPs', 'Dashboards', 'Time Recovery'],
    },
    {
      number: '05', icon: Code2, accent: 'text-royal-400', title: 'Tech Development',
      description: 'Websites, internal tools, and integrations built to fit how your business actually works.',
      tags: ['Web Development', 'Internal Tools', 'Integrations', 'AI Implementation'],
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <RevealLine>
                <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·01)</p>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight mb-6 leading-tight">What We Do</h2>
              </RevealLine>
              <FadeInUp delay={0.2}>
                <p className="text-white/50 text-lg leading-relaxed">
                  End-to-end growth: visibility on the front end, efficiency on the back end.
                </p>
              </FadeInUp>
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="flex flex-col">
              {services.map((service, i) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-12 border-b border-white/10 last:border-0 relative overflow-hidden"
                >
                  {/* Subtle hover background sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-apple" />
                  
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 flex flex-col gap-4">
                      <span className="font-mono text-2xl font-light text-white/30 group-hover:text-teal-400 transition-colors duration-500">{service.number}</span>
                      <div className="flex items-center gap-4">
                        <service.icon className={`w-8 h-8 ${service.accent}`} />
                        <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                      </div>
                    </div>
                    <div className="md:col-span-8 md:col-start-5">
                      <p className="text-xl text-white/70 leading-relaxed mb-6 font-light">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="text-sm font-medium text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/[0.02]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuiltSection() {
  const builds = [
    {
      title: 'Autonomous sales agent',
      description: 'Discovers the right prospects, reaches out, logs everything into the CRM, books the call, and keeps watching for reasons to follow up: a promotion, a product launch, a job change.',
    },
    {
      title: 'Self-improving content engine',
      description: 'Turns founder thinking and market signals into ideas, copy, and scheduled posts. Reviews its own metrics, learns what works and what the client prefers, and improves over time, with human approval at every level.',
    },
    {
      title: 'Visibility infrastructure',
      description: 'Websites built to surface in Google search, AI answers, and Google Maps, backed by the reviews, photos, and signals that mark a business as the leader in its space.',
    },
  ];

  return (
    <section id="built" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <RevealLine>
            <p className="text-royal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·02) Real Builds</p>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight mb-6 leading-tight">Built, shipped, running</h2>
          </RevealLine>
          <FadeInUp delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed">
              A few of the systems working for clients right now, from marketing firms and restaurants to hospitality hosts and growing service businesses.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="cursor-hover group glass rounded-3xl p-10 h-full flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-500 ease-apple border border-white/5 hover:border-white/20"
            >
              <div>
                <span className="font-mono text-xl text-white/20 mb-8 block group-hover:text-white transition-colors duration-500">{`0${i + 1}`}</span>
                <h3 className="text-2xl font-bold mb-4">{build.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{build.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <FadeInUp delay={0.4} className="mt-16 flex items-start justify-center gap-4 text-center max-w-2xl mx-auto">
          <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
          <p className="text-white/40 text-sm leading-relaxed">
            No client names here, by design. We work quietly behind brands: your customers
            see you, not us. Discretion is part of the service.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { number: '01', name: 'Clarity', description: 'We audit your business: what is working, what is leaking time and money, and where the biggest opportunities sit. No templates, no assumptions.' },
    { number: '02', name: 'Strategy', description: 'A 90-day roadmap with specific goals, specific tactics, and clear success metrics. You know exactly what we are doing and why.' },
    { number: '03', name: 'Execution', description: 'We build and implement alongside your team: campaigns, systems, and automation working together, not in silos.' },
    { number: '04', name: 'Optimization', description: 'We measure against targets, scale what works, and kill what does not. Growth compounds; so does our work.' },
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <RevealLine>
                <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·03) How We Work</p>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight mb-6 leading-tight">Complex growth, simplified</h2>
              </RevealLine>
              <FadeInUp delay={0.2}>
                <p className="text-white/50 text-lg leading-relaxed">
                  A proven four-phase cycle that turns ambitious goals into measurable results.
                </p>
              </FadeInUp>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                  <span className="absolute -top-10 -right-4 text-[12rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <span className="font-mono text-teal-400 text-lg mb-4 block">{step.number}</span>
                    <h3 className="text-3xl font-bold mb-4">{step.name}</h3>
                    <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const points = [
    { title: 'Builders, not just advisors', description: 'We do not hand you a strategy deck and disappear. We build and run the systems: automation, tools, and infrastructure that keep working after the engagement.' },
    { title: 'Founder-led, every engagement', description: 'You work directly with the founder. No account managers, no hand-offs to junior staff. The thinking that builds the strategy is the same presence that executes it.' },
    { title: 'AI-native by default', description: 'Every system we build leverages AI where it actually helps: not as a buzzword, but as leverage that lets a small team operate like a big one.' },
    { title: 'Results-first, always measurable', description: 'Clear baselines in week one. If we cannot tie a metric to revenue, leads, or time saved, we do not track it.' },
  ];
  const tools = ['Anthropic', 'OpenAI', 'Google', 'Meta', 'Shopify', 'Notion', 'Zapier', 'Cloudflare'];

  return (
    <section id="why" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="mb-20">
          <RevealLine>
            <p className="text-royal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·04) Why BLEUKEI</p>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight leading-tight">Built different, <span className="gradient-text">on purpose</span></h2>
          </RevealLine>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-10 h-full border border-white/5"
            >
              <CheckCircle2 className="w-8 h-8 text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <FadeInUp delay={0.4} className="mt-32 border-t border-white/10 pt-16">
          <p className="text-xs font-mono tracking-widest uppercase text-white/30 mb-10">Tools We Build With</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {tools.map((tool) => (
              <span key={tool} className="text-xl md:text-3xl font-bold tracking-tight text-white/10 hover:text-white/40 transition-colors duration-500 select-none cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="founder" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-600/10 blur-[200px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-gradient-to-br from-royal-600 to-teal-500 flex items-center justify-center shadow-2xl">
                <span className="text-5xl md:text-7xl font-bold text-white tracking-tighter">NB</span>
              </div>
            </div>
            <div>
              <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·05) The Founder</p>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight mb-8">Noa Berger</h2>
              <div className="space-y-6 text-xl md:text-2xl font-light text-white/70 leading-relaxed max-w-3xl">
                <p>
                  Noa spent years in sports sponsorship brokerage watching how serious brands
                  operate: the strategy, the systems, and the playbooks that make everything
                  compound. BLEUKEI exists to bring that same infrastructure, plus the AI
                  leverage big companies take for granted, to businesses that never had access
                  to it.
                </p>
                <p>
                  Every engagement is run by Noa directly. The person who builds your strategy
                  is the person who executes it with you.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-12">
                <a href="https://noaberger.com" target="_blank" rel="noopener noreferrer" className="cursor-hover group flex items-center gap-3 text-lg font-semibold border-b border-white/20 pb-2 hover:border-teal-400 transition-colors">
                  More about Noa <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="cursor-hover flex items-center gap-3 text-lg font-medium text-white/50 hover:text-white transition-colors border-b border-transparent pb-2">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index, defaultOpen = false }: { q: string; a: string; index: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10 group">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-hover w-full flex items-center justify-between gap-8 py-10 text-left outline-none"
        aria-expanded={open}
      >
        <span className="flex items-center gap-8 md:gap-16">
          <span className="font-mono text-lg text-white/30 group-hover:text-teal-400 transition-colors">{index}</span>
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">{q}</span>
        </span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
          <Plus className={`w-5 h-5 text-white transition-transform duration-500 ease-apple ${open ? 'rotate-45' : ''}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[5.5rem] md:pl-[8.5rem]">
              <p className="text-xl text-white/50 font-light leading-relaxed max-w-3xl">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqSection() {
  const faqs = [
    { q: 'How long does it take to see results?', a: 'Most clients see early indicators within 30 days: improved visibility, more leads, operational time savings. Meaningful revenue impact typically shows at 60 to 90 days as the systems compound. We set specific milestones upfront so you always know what to expect by when.' },
    { q: 'How is BLEUKEI different from a marketing agency?', a: 'Marketing agencies run campaigns. We build the underlying infrastructure that makes everything compound: operations, automation, visibility, and systems. The result is not just more leads; it is a business that runs better with less of your time.' },
    { q: 'What does the process actually look like?', a: 'Four phases: Clarity (we audit your business and identify the biggest opportunities), Strategy (a 90-day roadmap with specific goals and metrics), Execution (we implement alongside your team), and Optimization (we measure, iterate, and scale what works).' },
    { q: 'How much does it cost?', a: 'Every engagement is scoped to your needs, timeline, budget, and how hands-on you want us to be. Pricing is project-based rather than hourly, transparent, and tied to defined deliverables. You will leave your free call with a clear ballpark, not a sales pitch.' },
    { q: 'How do we get started?', a: 'Book a free 30-minute consultation. We talk about your business, your challenges, and whether we are a fit. No pitch, no pressure. If it makes sense to work together, we outline a proposal within a few days.' },
  ];

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <RevealLine>
                <p className="text-royal-400 font-mono text-sm tracking-widest uppercase mb-6">(BK·06) Questions</p>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight leading-tight">Answers, upfront</h2>
              </RevealLine>
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 border-t border-white/10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} index={`0${i + 1}`} q={faq.q} a={faq.a} defaultOpen={i === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xqedgjon', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      if (response.ok) { setStatus('success'); form.reset(); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-600/10 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <RevealLine>
            <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm font-medium tracking-wide mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
              </span>
              Taking on select engagements
            </span>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-bold tracking-tight mb-8 leading-none">Ready to grow?</h2>
          </RevealLine>
          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto text-balance">
              Book a free consultation, or tell us about your project and we will respond within one business day.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-[2.5rem] p-12 h-full flex flex-col justify-between border border-white/10 bg-gradient-to-b from-royal-600/10 to-transparent">
              <div>
                <Calendar className="w-12 h-12 text-royal-400 mb-8" />
                <h3 className="text-3xl font-bold mb-6">Book a free consultation</h3>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-12">
                  Thirty minutes, no pitch, no pressure. We talk about your business and whether we are a fit.
                </p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover group w-full inline-flex items-center justify-center gap-3 bg-white text-black font-semibold text-lg px-8 py-5 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-6 h-6" /> Schedule a Call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-[2.5rem] p-12 h-full border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-3">Name</label>
                    <input id="name" name="name" type="text" required className="w-full bg-transparent border-b border-white/20 pb-3 text-xl text-white placeholder-white/20 focus:outline-none focus:border-teal-400 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-3">Email</label>
                    <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-white/20 pb-3 text-xl text-white placeholder-white/20 focus:outline-none focus:border-teal-400 transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-3">Company (Optional)</label>
                  <input id="company" name="company" type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-xl text-white placeholder-white/20 focus:outline-none focus:border-teal-400 transition-colors" placeholder="Your Company Ltd" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-3">Project Details</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-xl text-white placeholder-white/20 focus:outline-none focus:border-teal-400 transition-colors resize-none" placeholder="Tell us about your goals..." />
                </div>
                
                <div className="pt-6">
                  <button type="submit" disabled={status === 'sending' || status === 'success'} className="cursor-hover group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-teal-500 text-black font-semibold text-lg px-10 py-5 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && 'Message Sent!'}
                    {status === 'error' && 'Error. Try again.'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-black selection:bg-teal-500/30 selection:text-teal-200">
      <HeroSection />
      <CapabilityMarquee />
      <ServicesSection />
      <BuiltSection />
      <ProcessSection />
      <WhySection />
      <FounderSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
