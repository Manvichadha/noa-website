'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, CheckCircle2, Calendar, ArrowRight, Megaphone, TrendingUp, Zap, Settings2, Code2, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from './components/HeroBackground';

const TICKER_ITEMS = [
  "AI Workflows", "Lead Nurture", "Process Design", "Operations", 
  "Dashboards", "Web Development", "Integrations", "AI Implementation", 
  "Social Media", "Brand Strategy", "GEO + SEO"
];

function Ticker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-12 left-0 w-full flex justify-center z-20">
      <div className="h-8 w-full max-w-lg relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-white/90 uppercase tracking-[0.25em] text-base md:text-lg font-bold absolute text-center drop-shadow-sm"
          >
            {TICKER_ITEMS[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Reusable text reveal component matching reference
function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <div className="overflow-hidden relative pt-2 -mt-2 pb-[0.5em] -mb-[0.5em]">
      <motion.div
        initial={{ y: "105%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ type: "spring", damping: 25, stiffness: 120, delay }}
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
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



export default function Home() {
  return (
    <main className="w-full">

      {/* 1. Header Hero Section */}
      <section id="hero" className="relative bg-black pt-48 pb-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroBackground />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center flex-wrap">
              <RevealLine delay={0.1}>
                <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
                  Growth,
                </h1>
              </RevealLine>
              <RevealLine delay={0.2}>
                <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white">
                  engineered.
                </h1>
              </RevealLine>
            </div>

            <FadeInUp delay={0.4} className="mt-8 max-w-2xl">
              <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/70 font-light">
                BLEUKEI helps ambitious businesses scale: marketing that wins attention,
                and the automation, operations, and technology that win back your time.
              </p>
              <p className="mt-6 text-sm md:text-base text-white/40 max-w-xl mx-auto leading-relaxed">
                For business leaders who know they should be doing more, but don't have the time, expertise, or energy to do it themselves.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5} className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://calendar.app.google/9HkGH8jzjx82fwfk8" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                <Calendar className="w-4 h-4" />
                Book a Call
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Tell Us About Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </FadeInUp>
          </div>
        </div>
        <Ticker />
      </section>


      {/* 3. Services Section */}
      <ServicesSection />

      {/* 5. How We Work (BK-02) Section */}
      <section id="work" className="bg-[#FAF9F6] pt-16 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <FadeInUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-black/70 text-sm font-bold tracking-[0.2em]">(BK-02)</span>
                  <span className="text-black/50 text-sm font-bold tracking-[0.2em] uppercase">How we work</span>
                </div>
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-[#1A1A1A] flex items-center gap-4">
                  Complex growth, simplified
                </h2>
              </div>
              <p className="text-[#1A1A1A]/60 max-w-sm text-sm md:text-base leading-relaxed">
                A proven four-phase cycle that turns ambitious goals into measurable results.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-24 lg:gap-y-24">
            
            {/* Item 1 */}
            <FadeInUp delay={0.1}>
              <div className="relative group pt-8">
                <div className="absolute top-0 right-0 md:-right-8 -translate-y-12 md:-translate-y-16 text-[10rem] md:text-[14rem] font-bold text-black/[0.03] leading-none pointer-events-none select-none transition-transform duration-700 group-hover:scale-105">
                  01
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">Clarity</h3>
                  <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                    We audit your business: what is working, what is leaking time and money, and where the biggest opportunities sit. No templates, no assumptions.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Item 2 */}
            <FadeInUp delay={0.2}>
              <div className="relative group pt-8">
                <div className="absolute top-0 right-0 md:-right-8 -translate-y-12 md:-translate-y-16 text-[10rem] md:text-[14rem] font-bold text-black/[0.03] leading-none pointer-events-none select-none transition-transform duration-700 group-hover:scale-105">
                  02
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">Strategy</h3>
                  <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                    A 90-day roadmap with specific goals, specific tactics, and clear success metrics. You know exactly what we are doing and why.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Item 3 */}
            <FadeInUp delay={0.3}>
              <div className="relative group pt-8">
                <div className="absolute top-0 right-0 md:-right-8 -translate-y-12 md:-translate-y-16 text-[10rem] md:text-[14rem] font-bold text-black/[0.03] leading-none pointer-events-none select-none transition-transform duration-700 group-hover:scale-105">
                  03
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">Execution</h3>
                  <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                    We build and implement alongside your team: campaigns, systems, and automation working together, not in silos.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Item 4 */}
            <FadeInUp delay={0.4}>
              <div className="relative group pt-8">
                <div className="absolute top-0 right-0 md:-right-8 -translate-y-12 md:-translate-y-16 text-[10rem] md:text-[14rem] font-bold text-black/[0.03] leading-none pointer-events-none select-none transition-transform duration-700 group-hover:scale-105">
                  04
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">Optimization</h3>
                  <p className="text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                    We measure against targets, scale what works, and kill what does not. Growth compounds; so does our work.
                  </p>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* 4. Showcase Section */}
      <section className="bg-black pt-16 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white/70 text-sm font-bold tracking-[0.2em]">(BK-03)</span>
                <span className="text-white/50 text-sm font-bold tracking-[0.2em] uppercase">Real Builds</span>
              </div>
              <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white flex items-center gap-4">
                Built, shipped, running
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed lg:text-right">
              A few of the systems working for clients right now, from marketing firms and restaurants to hospitality hosts and growing service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="w-full">
              <FadeInUp>
                <div className="group cursor-project cursor-none block">
                  <div className="w-full aspect-[4/3] bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <Image src="/images/project_1.png" alt="Project 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image src="/images/project_1_hover.png" alt="Project 1 Hover" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/40 font-bold tracking-widest text-lg">01</span>
                      <div className="w-10 h-[1px] bg-white/20" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Autonomous sales agent</h3>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      Discovers the right prospects, reaches out, logs everything into the CRM, books the call, and keeps watching for reasons to follow up: a promotion, a product launch, a job change.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Project 2 */}
            <div className="w-full">
              <FadeInUp delay={0.2}>
                <div className="group cursor-project cursor-none block">
                  <div className="w-full aspect-[4/3] bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <Image src="/images/project_2.png" alt="Project 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image src="/images/project_2_hover.png" alt="Project 2 Hover" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/40 font-bold tracking-widest text-lg">02</span>
                      <div className="w-10 h-[1px] bg-white/20" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Self-improving content engine</h3>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      Turns founder thinking and market signals into ideas, copy, and scheduled posts. Reviews its own metrics, learns what works and what the client prefers, and improves over time, with human approval at every level.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Project 3 */}
            <div className="w-full">
              <FadeInUp delay={0.4}>
                <div className="group cursor-project cursor-none block">
                  <div className="w-full aspect-[4/3] bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <Image src="/images/project_3.png" alt="Project 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image src="/images/project_3_hover.png" alt="Project 3 Hover" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/40 font-bold tracking-widest text-lg">03</span>
                      <div className="w-10 h-[1px] bg-white/20" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Visibility infrastructure</h3>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      Websites built to surface in Google search, AI answers, and Google Maps, backed by the reviews, photos, and signals that mark a business as the leader in its space.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <div className="group inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 rounded-3xl border border-white/20 font-medium text-white/60 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 cursor-hover text-center text-sm md:text-base">
              No client names here, by design. We work quietly behind brands: your customers see you, not us. Discretion is part of the service.
            </div>
          </div>

        </div>
      </section>

      {/* 5.5. Why BLEUKEI (BK-04) */}
      <section className="bg-[#FAF9F6] pt-16 pb-0 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col mb-24">
            <FadeInUp>
              <div className="text-black/50 text-sm tracking-widest uppercase mb-6 font-medium">(BK-04) Why BLEUKEI</div>
            </FadeInUp>
            <RevealLine>
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-[#1A1A1A] pb-4">
                Built different, <span className="italic font-light text-black/40">on purpose.</span>
              </h2>
            </RevealLine>
          </div>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Builders, not just advisors",
                text: "We do not hand you a strategy deck and disappear. We build and run the systems: automation, tools, and infrastructure that keep working after the engagement."
              },
              {
                num: "02",
                title: "Founder-led, every engagement",
                text: "You work directly with the founder. No account managers, no hand-offs to junior staff. The thinking that builds the strategy is the same presence that executes it."
              },
              {
                num: "03",
                title: "AI-native by default",
                text: "Every system we build leverages AI where it actually helps: not as a buzzword, but as leverage that lets a small team operate like a big one."
              },
              {
                num: "04",
                title: "Results-first, always measurable",
                text: "Clear baselines in week one. If we cannot tie a metric to revenue, leads, or time saved, we do not track it."
              }
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <motion.div whileHover={{ x: 10 }} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-t border-black/10 hover:bg-black/[0.03] transition-all duration-300 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 cursor-default">
                  <div className="md:col-span-2">
                    <span className="text-sm font-medium text-black/30 tracking-widest uppercase transition-colors group-hover:text-[#1A332B]">[{item.num}]</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] transition-colors group-hover:text-black">{item.title}</h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-lg md:text-xl text-black/60 leading-relaxed font-light transition-colors group-hover:text-black/80">{item.text}</p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
            <div className="border-t border-black/10 -mx-6 md:-mx-12 lg:-mx-24"></div>
          </div>

          <FadeInUp delay={0.4}>
            <div className="-mx-6 md:-mx-12 lg:-mx-24 bg-[#1A332B] py-16 flex flex-col items-center">
              <span className="text-white/40 text-xs tracking-[0.2em] uppercase mb-10 font-semibold">Tools we build with</span>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-white/90 font-bold text-xl md:text-2xl lg:text-3xl px-6 max-w-[1200px]">
                {['Anthropic', 'OpenAI', 'Google', 'Meta', 'Shopify', 'Notion', 'Zapier', 'Cloudflare'].map((tool, index) => (
                  <motion.span 
                    whileHover={{ scale: 1.15, y: -4, rotate: index % 2 === 0 ? 3 : -3 }}
                    key={tool} 
                    className="cursor-default tracking-tight hover:text-white transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 6. Founder Section */}
      <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="self-start">
              <FadeInUp>
                <div className="text-white/50 text-sm tracking-widest uppercase mb-8">(BK-05) The Founder</div>
              </FadeInUp>
              <RevealLine>
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white mb-6">
                  Noa Berger
                </h2>
              </RevealLine>
            </div>

            <div className="flex flex-col gap-8 self-start">
              <FadeInUp delay={0.1}>
                <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light">
                  Noa spent years in sports sponsorship brokerage watching how serious brands operate: the strategy, the systems, and the playbooks that make everything compound. BLEUKEI exists to bring that same infrastructure, plus the AI leverage big companies take for granted, to businesses that never had access to it.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light">
                  Every engagement is run by Noa directly. The person who builds your strategy is the person who executes it with you.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <div className="flex flex-wrap gap-6 mt-4">
                  <a href="https://noaberger.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 font-medium">
                    More about Noa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 font-medium">
                    LinkedIn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="bg-black py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <RevealLine>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-4 text-white">
                  Frequently
                </h2>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white/50">
                  asked questions
                </h2>
              </RevealLine>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {[
                  { 
                    q: "How long does it take to see results?", 
                    a: "Most clients see early indicators within 30 days: improved visibility, more leads, operational time savings. Meaningful revenue impact typically shows at 60 to 90 days as the systems compound. We set specific milestones upfront so you always know what to expect by when." 
                  },
                  { 
                    q: "How is BLEUKEI different from a marketing agency?", 
                    a: "Marketing agencies run campaigns. We build the underlying infrastructure that makes everything compound: operations, automation, visibility, and systems. The result is not just more leads; it is a business that runs better with less of your time." 
                  },
                  { 
                    q: "What does the process actually look like?", 
                    a: "Four phases: Clarity (we audit your business and identify the biggest opportunities), Strategy (a 90-day roadmap with specific goals and metrics), Execution (we implement alongside your team), and Optimization (we measure, iterate, and scale what works)." 
                  },
                  { 
                    q: "How much does it cost?", 
                    a: "Every engagement is scoped to your needs, timeline, budget, and how hands-on you want us to be. Pricing is project-based rather than hourly, transparent, and tied to defined deliverables. You will leave your free call with a clear ballpark, not a sales pitch." 
                  },
                  {
                    q: "How do we get started?",
                    a: "Book a free 30-minute consultation. We talk about your business, your challenges, and whether we are a fit. No pitch, no pressure. If it makes sense to work together, we outline a proposal within a few days."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6.5 Contact Section */}
      <ContactSection />

      {/* 7. Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-32 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[3rem]">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="mb-32">


            <RevealLine>
              <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1] font-bold tracking-[-0.02em]">
                Want to start a
              </h2>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1] font-bold tracking-[-0.02em]">
                project together?
              </h2>
            </RevealLine>
            <RevealLine delay={0.2}>
              <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[1] font-bold tracking-[-0.02em] text-white/40">
                Get in touch
              </h2>
            </RevealLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-white/50 text-sm mb-4">Email</h4>
              <div className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-medium text-white">nb@noaberger.com</span>
                <button className="cursor-hover flex items-center justify-center text-xs font-medium bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div>
                <h4 className="text-white/50 text-sm mb-4">Social</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">LinkedIn</a>
                  <a href="https://www.instagram.com/noableu/" target="_blank" rel="noopener noreferrer" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">Instagram</a>
                </div>
              </div>
              <div>
                <h4 className="text-white/50 text-sm mb-4">Legal</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/privacy-policy" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">Privacy Policy</Link>
                  <Link href="/about" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">About</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center text-white/30 text-sm">
            © {new Date().getFullYear()} BLEUKEI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInUp delay={index * 0.1}>
      <div className="border-b border-white/10 py-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left cursor-hover group"
        >
          <h3 className="text-2xl font-bold text-white group-hover:opacity-70 transition-opacity">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0"
          >
            <Plus className="w-5 h-5 text-white" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="pt-6 text-lg text-white/70 max-w-2xl">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeInUp>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white mb-4">
            Ready to grow?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Book a free consultation, or tell us about your project and we will respond within
            one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <Calendar className="w-6 h-6 text-white mb-5" />
                <h3 className="text-2xl font-bold mb-3 text-white">Book a free consultation</h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  Thirty minutes, no pitch, no pressure. We talk about your business and whether we
                  are a fit.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
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
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
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
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
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
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
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
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
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
                    'Message Sent'
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="mt-4 text-sm text-white/60">
                    Thanks for reaching out. We will be in touch shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      icon: Megaphone,
      title: 'Marketing',
      description: 'Strategy and execution that gets you found and chosen: across search, social, and the rooms you are not in yet.',
      tags: ['Social Media', 'Brand Strategy', 'GEO + SEO', 'Partnerships & Sponsorships'],
      textColor: 'text-purple-400',
      underlineColor: 'bg-purple-400',
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Sales',
      description: 'Pipelines that fill themselves: outbound systems that find the right prospects, reach out, book the call, and follow up so nothing slips.',
      tags: ['Outbound Systems', 'CRM Integration', 'Scheduling & Follow-up', 'Signal Tracking'],
      textColor: 'text-blue-400',
      underlineColor: 'bg-blue-400',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Automation & AI',
      description: 'Systems that handle the repetitive work, so your team can do the valuable work. Example: a lead comes in, your CRM is updated and tagged, and a follow-up goes out in minutes, hands-free.',
      tags: ['AI Workflows', 'Lead Nurture', 'Reporting', 'Custom Agents'],
      textColor: 'text-cyan-400',
      underlineColor: 'bg-cyan-400',
    },
    {
      number: '04',
      icon: Settings2,
      title: 'Operations',
      description: 'Streamlined processes that make the business run smoothly without depending on you for everything.',
      tags: ['Process Design', 'Systems & SOPs', 'Dashboards', 'Time Recovery'],
      textColor: 'text-orange-400',
      underlineColor: 'bg-orange-400',
    },
    {
      number: '05',
      icon: Code2,
      title: 'Tech Development',
      description: 'Websites, internal tools, and integrations built to fit how your business actually works.',
      tags: ['Web Development', 'Internal Tools', 'Integrations', 'AI Implementation'],
      textColor: 'text-emerald-400',
      underlineColor: 'bg-emerald-400',
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] pt-16 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/70 text-sm font-bold tracking-[0.2em]">(BK-01)</span>
              <span className="text-white/50 text-sm font-bold tracking-[0.2em] uppercase">What we do</span>
            </div>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white flex items-center gap-4">
              Services <span className="text-white/50 font-light text-[clamp(2rem,3vw,3rem)]">(5)</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed">
            End-to-end growth: visibility on the front end, efficiency on the back end.
          </p>
        </div>

        {/* Row-based Interactive Layout */}
        <div 
          className="flex flex-col gap-6 lg:gap-12 relative w-full pb-8 lg:pb-24"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;
            const ActiveIcon = service.icon;
            
            return (
              <div 
                key={index}
                className="group relative flex flex-col lg:flex-row w-full"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Left Side: Heading */}
                <div className="w-full lg:w-1/2">
                  <div className="cursor-hover inline-block relative pb-2 pr-4">
                    <h3 
                      className={`text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight transition-colors duration-500 ${
                        isActive ? service.textColor : 'text-white/30'
                      }`}
                    >
                      {service.title}
                    </h3>
                    {/* Animated Underline */}
                    <div 
                      className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ease-out ${service.underlineColor} ${
                        isActive ? 'w-full' : 'w-0'
                      }`} 
                    />
                  </div>
                </div>

                {/* Right Side Desktop: Absolute to align vertically with heading */}
                <div className="hidden lg:block absolute left-1/2 top-4 w-1/2 pl-12 lg:pl-24 pointer-events-none">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-white/40 font-bold tracking-widest text-lg">{service.number}</span>
                          <div className="w-10 h-[1px] bg-white/20" />
                          <ActiveIcon className="w-6 h-6 text-white/50" />
                        </div>
                        
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 pointer-events-auto">
                          {service.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Inline Description */}
                <div className="lg:hidden w-full mt-4">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
