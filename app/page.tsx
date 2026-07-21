'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, CheckCircle2, Calendar, ArrowRight, Megaphone, TrendingUp, Zap, Settings2, Code2, Copy, Check, Linkedin, Instagram, Mail, Building, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import HeroBackground from './components/HeroBackground';

const TICKER_ITEMS = [
  "Social Media", "Brand Strategy", "GEO + SEO", "Partnerships", 
  "Outbound Systems", "CRM Integration", "AI Strategy", "Custom Agents", 
  "Lead Nurture", "Workflow Automation", "Process Design", "Dashboards", 
  "Web Development", "Direct Booking Systems", "Shopify Builds", "Integrations"
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
      <section id="hero" className="relative bg-black pt-48 pb-12 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroBackground />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center flex-wrap">
              <RevealLine delay={0.1}>
                <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
                  <span>Growth, </span><span>engineered.</span>
                </h1>
              </RevealLine>
            </div>

            <FadeInUp delay={0.4} className="mt-8 max-w-5xl">
              <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light text-balance">
                BleuKei is a growth and operations firm that builds and runs the marketing, sales, AI, and automation systems businesses need but do not have the time, team, or specialty to run themselves. <br className="hidden md:block" />
                <span className="text-white font-medium inline-block mt-4">You stay focused on the business. We build the machine behind it.</span>
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

      {/* 2. Trust Bar */}
      <section className="relative z-10 w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden">
        
        {/* Subtle gold radial glow matching hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[150px] bg-[#D8B45A]/[0.04] blur-[100px] rounded-full pointer-events-none z-0"></div>

        <FadeInUp delay={0.6} className="w-full relative z-10">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 relative">
            
            {/* Item 1 */}
            <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 transition-all duration-300 hover:bg-white/[0.03] cursor-default py-6 px-6 md:px-12 relative z-10">
              <Building className="w-6 h-6 shrink-0 text-[#D8B45A] drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(216,180,90,0.5)] group-hover:-translate-y-[1px] transition-all duration-300 sm:mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-[15px] md:text-[16px] mb-1">Proven Scale</h4>
                <p className="text-white/50 text-sm leading-snug">Building for <strong className="text-white/90 font-medium">5+ clients</strong> across multiple industries.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/10 pointer-events-none z-0"></div>

            {/* Item 2 */}
            <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 transition-all duration-300 hover:bg-white/[0.03] cursor-default py-6 px-6 md:px-12 relative z-10">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-[#D8B45A] drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(216,180,90,0.5)] group-hover:-translate-y-[1px] transition-all duration-300 sm:mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-[15px] md:text-[16px] mb-1">Live Systems</h4>
                <p className="text-white/50 text-sm leading-snug">Every system we show is <strong className="text-white/90 font-medium">live today</strong> and running.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-[66.666%] top-0 bottom-0 w-px bg-white/10 pointer-events-none z-0"></div>

            {/* Item 3 */}
            <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 transition-all duration-300 hover:bg-white/[0.03] cursor-default py-6 px-6 md:px-12 relative z-10">
              <Clock className="w-6 h-6 shrink-0 text-[#D8B45A] drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(216,180,90,0.5)] group-hover:-translate-y-[1px] transition-all duration-300 sm:mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-[15px] md:text-[16px] mb-1">Rapid Response</h4>
                <p className="text-white/50 text-sm leading-snug">Every message answered within <strong className="text-white/90 font-medium">one business day</strong>.</p>
              </div>
            </div>

          </div>
        </FadeInUp>
      </section>
{/* 3. Services Section */}
      <ServicesSection />

      {/* 5. How We Work (BK-02) Section */}
      <section className="bg-[#FAF9F6] pt-16 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <FadeInUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-black/40 text-sm font-bold tracking-[0.2em]">(BK·02)</span>
                  <span className="text-black/90 text-sm font-bold tracking-[0.2em] uppercase">How We Work</span>
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
                <span className="text-[#A3A3A3] text-sm font-bold tracking-[0.2em]">(BK·03)</span>
                <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">Real Builds</span>
              </div>
              <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white flex items-center gap-4">
                Built, shipped, running
              </h2>
            </div>
            <p className="text-[#A3A3A3] max-w-sm text-sm md:text-base leading-relaxed lg:text-right">
              A few of the systems working for clients right now, from marketing firms and restaurants to hospitality hosts and growing service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 border-t border-white/10 mt-16 pt-16">
            {[
              {
                num: "01",
                title: "Autonomous sales outreach (for a B2B sales team)",
                text: "Prospecting was eating the team alive: finding leads, researching them, writing outreach, logging activity, chasing follow-ups. We built an outreach system that discovers warm leads, researches them, reaches out with relevant messages, logs everything automatically, and books calls straight onto the calendar. Result: more than 100 hours per week saved across the sales team, with every contact logged and nothing depending on anyone’s memory.",
                img: "/images/project_4.png",
                hoverImg: "/images/project_1_hover.png"
              },
              {
                num: "02",
                title: "Social content engine (for small business owners)",
                text: "Consistent content is the first thing that slips when you run a business. We build engines that turn an owner’s thinking and market signals into ideas, drafts, and scheduled posts, with human approval on everything before it ships. Result: a full content presence running on one 30-minute approval session a week.",
                img: "/images/project_5.png",
                hoverImg: "/images/project_2_hover.png"
              },
              {
                num: "03",
                title: "Restaurant discovery infrastructure (for a restaurant owner)",
                text: "A great restaurant nobody can find is a bad business. We rebuilt their online presence to surface everywhere customers look: Google search, Google Maps, and the AI assistants that increasingly answer “where should I eat.” Result: a restaurant that gets found first, in every channel that matters.",
                img: "/images/project_3_bright.png",
                hoverImg: "/images/project_3_hover.png"
              },
              {
                num: "04",
                title: "Direct booking platform (for a group of Airbnb hosts)",
                text: "Every booking through a platform hands a commission to the middleman. We built the group a branded website and booking platform on top of their existing property management stack: real-time availability, secure payments, and a direct relationship with their guests. Result: live and taking direct bookings today, commission-free, with the guest data staying with the hosts.",
                img: "/images/project_4.png",
                hoverImg: "/images/project_1_hover.png"
              },
              {
                num: "05",
                title: "Shopify launch and social campaign (for a clothing brand)",
                text: "A brand with product and no storefront. We built the Shopify store end to end and ran the social campaign to launch it: content, creative, and the automation connecting the two. Result: a live store and a repeatable campaign system the brand runs on.",
                img: "/images/project_5.png",
                hoverImg: "/images/project_2_hover.png"
              }
            ].map((project, i) => (
              <div key={i} className="w-full">
                <FadeInUp delay={i * 0.1}>
                  <Link href="/work" className="group cursor-project cursor-none block relative">
                    
                    {/* Base text (visible normally, transparent on hover) */}
                    <div className="flex flex-col gap-4 relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="text-4xl lg:text-5xl font-bold text-[#A3A3A3]">
                        {project.num}
                      </span>
                      <div className="flex flex-col gap-2 mt-4">
                        <h3 className="text-base lg:text-lg font-bold text-white leading-tight tracking-tight">
                          {project.title.split(' (')[0]}
                        </h3>
                        <p className="text-xs lg:text-sm text-[#A3A3A3] font-medium uppercase tracking-wider leading-relaxed">
                          {project.title.match(/\((.*?)\)/)?.[1]}
                        </p>
                      </div>
                    </div>

                    {/* Hover layer with background-clip: text */}
                    <div 
                      className="absolute inset-0 z-0 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                    >
                      <span className="text-4xl lg:text-5xl font-bold">
                        {project.num}
                      </span>
                      <div className="flex flex-col gap-2 mt-4">
                        <h3 className="text-base lg:text-lg font-bold leading-tight tracking-tight">
                          {project.title.split(' (')[0]}
                        </h3>
                        <p className="text-xs lg:text-sm font-medium uppercase tracking-wider leading-relaxed">
                          {project.title.match(/\((.*?)\)/)?.[1]}
                        </p>
                      </div>
                    </div>

                  </Link>
                </FadeInUp>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            <Link href="/work" className="text-white hover:text-white/70 uppercase tracking-widest text-sm font-semibold transition-colors pb-1 border-b border-white/30 hover:border-white/70">
              View all work
            </Link>
          </div>

        </div>
      </section>

      {/* 5.5. Why BLEUKEI (BK-04) */}
      <section className="bg-[#FAF9F6] pt-16 pb-0 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col mb-24">
            <FadeInUp>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-black/40 text-sm font-bold tracking-[0.2em]">(BK·04)</span>
                <span className="text-black/90 text-sm font-bold tracking-[0.2em] uppercase">Why BleuKei</span>
              </div>
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
                title: "Senior attention, every engagement",
                text: "The people who design your strategy are the people who build it. No account managers, no hand-offs, no junior staff learning on your budget."
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
            <div className="-mx-6 md:-mx-12 lg:-mx-24 bg-[#1A332B] py-10 flex flex-col items-center">
              <span className="text-[#A3A3A3] text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-semibold">Built on platforms you already trust</span>
              <div className="flex flex-wrap justify-between items-center gap-y-6 w-full px-6 md:px-12 lg:px-24">
                {[
                  { name: 'Anthropic', url: 'https://cdn.simpleicons.org/anthropic/e5e5e5' },
                  { name: 'OpenAI', url: 'https://cdn.jsdelivr.net/npm/simple-icons@10.0.0/icons/openai.svg' },
                  { name: 'Google', url: 'https://cdn.simpleicons.org/google/e5e5e5' },
                  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/e5e5e5' },
                  { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify/e5e5e5' },
                  { name: 'Notion', url: 'https://cdn.simpleicons.org/notion/e5e5e5' },
                  { name: 'Zapier', url: 'https://cdn.simpleicons.org/zapier/e5e5e5' },
                  { name: 'Cloudflare', url: 'https://cdn.simpleicons.org/cloudflare/e5e5e5' }
                ].map((tool, index) => (
                  <motion.div 
                    whileHover={{ scale: 1.15, y: -4, rotate: index % 2 === 0 ? 3 : -3 }}
                    key={tool.name} 
                    className="relative opacity-60 hover:opacity-100 transition-all flex items-center justify-center cursor-default"
                    title={tool.name}
                  >
                    <img 
                      src={tool.url} 
                      alt={tool.name} 
                      className={`w-7 h-7 md:w-8 md:h-8 object-contain ${tool.name === 'OpenAI' ? 'brightness-0 invert opacity-90' : ''}`} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="bg-black py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <FadeInUp>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[#A3A3A3] text-sm font-bold tracking-[0.2em]">(BK·05)</span>
                  <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">FAQ</span>
                </div>
              </FadeInUp>
              <RevealLine>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-4 text-white">
                  Frequently <span className="text-[#A3A3A3]">asked questions</span>
                </h2>
              </RevealLine>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {[
                  { 
                    q: "How much does it cost?", 
                    a: "Every engagement is scoped to the problem, so we do not publish flat prices. There are two models: project builds (a defined system, a defined price) and ongoing engagements (we build, run, and improve your growth systems month over month). What drives cost is scope, integrations, and how much we operate versus hand over. You will have a clear number after one call." 
                  },
                  { 
                    q: "How long until we see results?", 
                    a: "Systems ship in weeks, not quarters. Automation and sales systems show output fast: booked calls, hours recovered, follow-ups that stop slipping. Visibility work (SEO, GEO, reviews) compounds: expect early signals in 60 to 90 days and real momentum after that. In week one we set baselines, so you always know exactly what changed." 
                  },
                  { 
                    q: "I am not technical. Will I actually be able to use what you build?", 
                    a: "Yes. That is the point. We work almost exclusively with non-technical owners. Everything we ship comes with plain-language documentation, training for your team, and human approval steps where they matter. If a system only works while we babysit it, we consider it unfinished." 
                  },
                  { 
                    q: "Are we locked into a long contract?", 
                    a: "No. Project work is scoped and done. Ongoing engagements run month to month after an initial period agreed upfront. We keep clients by results, not by contract terms. You also own everything we build: accounts, systems, and data stay in your name." 
                  },
                  {
                    q: "How is BleuKei different from a marketing agency?",
                    a: "Marketing agencies run campaigns. We build the underlying machine: sales systems, automation, operations, and visibility infrastructure that keep compounding after any single campaign ends. The result is not just more leads. It is a business that runs better with less of your time."
                  },
                  {
                    q: "How do we get started?",
                    a: "Book a free 30-minute call. No pitch, no pressure: we talk about your business, and you leave with our honest read on your biggest opportunities. If we are a fit, the first engagement is a paid deep audit that becomes your 90-day roadmap, whether you continue with us or not."
                  }
                ].map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} index={i} defaultOpen={i === 0} />
                ))}
                
                <FadeInUp delay={0.6}>
                  <div className="pt-12 text-center lg:text-left">
                    <Link href="/faq" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl transition-colors hover:bg-white/90 group">
                      View all FAQs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </FadeInUp>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6.5 Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}



function ContactSection() {
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
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <div className="text-[#A3A3A3] text-sm tracking-widest uppercase mb-4 font-semibold">
            Taking on select engagements
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white mb-4">
            Ready to grow?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance">
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
                <p className="text-[#A3A3A3] leading-relaxed mb-8">
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
                    rows={4}
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
      description: 'Get found and get chosen. Strategy and execution across search, social, and the partnerships you have not tapped yet.',
      tags: ['Social Media', 'Brand Strategy', 'GEO + SEO', 'Partnerships & Sponsorships'],
      textColor: 'text-purple-400',
      underlineColor: 'bg-purple-400',
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Sales',
      description: 'Pipelines that fill themselves. Outbound systems that find the right prospects, reach out, book the call, and follow up so nothing slips.',
      tags: ['Outbound Systems', 'CRM Integration', 'Scheduling & Follow-up', 'Warm Lead Discovery'],
      textColor: 'text-blue-400',
      underlineColor: 'bg-blue-400',
    },
    {
      number: '03',
      icon: Zap,
      title: 'AI',
      description: 'AI that actually ships. We cut through the noise, pick what works for your business, and implement it end to end.',
      tags: ['AI Strategy', 'Custom Agents', 'AI Implementation', 'Team Enablement'],
      textColor: 'text-cyan-400',
      underlineColor: 'bg-cyan-400',
    },
    {
      number: '04',
      icon: Settings2,
      title: 'Automation',
      description: 'The repetitive work, handled. A lead comes in, your systems update themselves, and the follow-up goes out without anyone touching it.',
      tags: ['Workflow Automation', 'Lead Nurture', 'Reporting', 'Integrations'],
      textColor: 'text-orange-400',
      underlineColor: 'bg-orange-400',
    },
    {
      number: '05',
      icon: CheckCircle2,
      title: 'Operations',
      description: 'A business that runs without you in every loop. Processes, systems, and dashboards that make the whole thing hum.',
      tags: ['Process Design', 'Systems & SOPs', 'Dashboards', 'Time Recovery'],
      textColor: 'text-purple-400',
      underlineColor: 'bg-purple-500',
    },
    {
      number: '06',
      icon: Code2,
      title: 'Web & Tech Development',
      description: 'Websites and stores built for how your business actually works. Fast, findable by humans and AI, and connected to everything behind the scenes.',
      tags: ['Web Development', 'Shopify Builds', 'Direct Booking Systems', 'Internal Tools'],
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
              <span className="text-[#A3A3A3] text-sm font-bold tracking-[0.2em]">(BK·01)</span>
              <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">What We Do</span>
            </div>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white flex items-center gap-4">
              Services <span className="text-[#A3A3A3] font-light text-[clamp(2rem,3vw,3rem)]">(6)</span>
            </h2>
          </div>
          <p className="text-[#A3A3A3] max-w-sm text-sm md:text-base leading-relaxed">
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
                        isActive ? service.textColor : 'text-[#A3A3A3]'
                      }`}
                    >
                      {service.title}
                    </h3>
                    {/* Animated Underline — positioned below descenders */}
                    <div 
                      className={`absolute -bottom-2 left-0 h-[3px] transition-all duration-500 ease-out ${service.underlineColor} ${
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
                          <span className="text-[#A3A3A3] font-bold tracking-widest text-lg">{service.number}</span>
                          <div className="w-10 h-[1px] bg-white/20" />
                          <ActiveIcon className="w-6 h-6 text-[#A3A3A3]" />
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
