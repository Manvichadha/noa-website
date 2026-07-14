'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, CheckCircle2, Calendar, ArrowRight, Megaphone, TrendingUp, Zap, Settings2, Code2 } from 'lucide-react';
import Image from 'next/image';

const TICKER_ITEMS = [
  "AI Workflows", "Lead Nurture", "Process Design", "Operations", 
  "Dashboards", "Web Development", "Integrations", "AI Implementation", 
  "Social Media", "Brand Strategy", "GEO + SEO"
];

function Ticker() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-b border-white/10 bg-[#0a0a0a] py-5 z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      >
        <div className="flex items-center">
          {TICKER_ITEMS.map((item, i) => (
            <div key={`a-${i}`} className="flex items-center">
              <span className="text-white/80 uppercase tracking-[0.15em] text-sm font-semibold">{item}</span>
              <span className="text-white/20 mx-10 text-sm">•</span>
            </div>
          ))}
          {TICKER_ITEMS.map((item, i) => (
            <div key={`b-${i}`} className="flex items-center">
              <span className="text-white/80 uppercase tracking-[0.15em] text-sm font-semibold">{item}</span>
              <span className="text-white/20 mx-10 text-sm">•</span>
            </div>
          ))}
        </div>
      </motion.div>
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
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scroll-linked Door Opening Image Component
function DoorImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  });

  // Slide left and right on scroll (opening effect - slightly slower by completing at 0.8)
  const xLeft = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
  // Container scale (zoom out effect - increased from 1.2 to 1.4)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden rounded-2xl">
      {/* Background Image (visible as doors open) */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 origin-center">
        <Image src="/images/image2.png" alt="Background" fill className="object-cover" priority />
      </motion.div>

      {/* Left Door */}
      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-0 left-0 w-1/2 h-full overflow-hidden z-10"
      >
        <div className="w-[200%] h-full relative">
          <Image src="/images/image.png" alt="Bleukei Hero Left" fill className="object-cover" priority />
        </div>
      </motion.div>
      
      {/* Right Door */}
      <motion.div 
        style={{ x: xRight }}
        className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-10"
      >
        <div className="w-[200%] h-full relative -left-[100%]">
          <Image src="/images/image.png" alt="Bleukei Hero Right" fill className="object-cover" priority />
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full">

      {/* 1. Header Hero Section */}
      <section className="relative bg-black pt-48 pb-16 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center flex-wrap">
              <RevealLine delay={0.1}>
                <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
                  Growth,
                </h1>
              </RevealLine>
              <RevealLine delay={0.2}>
                <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.05] font-bold tracking-[-0.02em] bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text pb-4">
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
              <a href="https://calendar.app.google/9HkGH8jzjx82fwfk8" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                <Calendar className="w-4 h-4" />
                Book a Call
              </a>
              <a href="#contact" className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Tell Us About Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeInUp>
          </div>
        </div>
        <Ticker />
      </section>

      {/* 2. Full Image Reveal Section */}
      <section className="bg-black px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/3] md:aspect-[16/9] bg-white/5 overflow-hidden relative rounded-2xl"
          >
            <DoorImage />
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Showcase Section */}
      <section className="bg-black py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">

            {/* Project 1 - Spans 7 cols */}
            <div className="md:col-span-7">
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
                  <h3 className="text-2xl font-bold mb-2 text-white">Project #1</h3>
                  <p className="text-white/60 max-w-md">Tempora atque omnis facere dignissimos libero dolor velit et laboriosam.</p>
                </div>
              </FadeInUp>
            </div>

            {/* Project 2 - Spans 5 cols, pushed down */}
            <div className="md:col-span-5 md:mt-32">
              <FadeInUp delay={0.2}>
                <div className="group cursor-project cursor-none block">
                  <div className="w-full aspect-[4/5] bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <Image src="/images/project_2.png" alt="Project 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image src="/images/project_2_hover.png" alt="Project 2 Hover" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Project #2</h3>
                  <p className="text-white/60 max-w-sm">Consequuntur accusantium animi aut aperiam dolores velit vel.</p>
                </div>
              </FadeInUp>
            </div>

            {/* Project 3 - Full width */}
            <div className="md:col-span-12">
              <FadeInUp>
                <div className="group cursor-project cursor-none block">
                  <div className="w-full aspect-[21/9] bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <Image src="/images/project_3.png" alt="Project 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image src="/images/project_3_hover.png" alt="Project 3 Hover" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Project #3</h3>
                  <p className="text-white/60 max-w-2xl">Odit hic facere adipisci ipsam corrupti voluptatibus ipsum officiis et. Reprehenderit consequatur ipsa aut.</p>
                </div>
              </FadeInUp>
            </div>

          </div>

          <div className="mt-32 flex justify-center">
            <a href="#work" className="group inline-flex items-center justify-center px-10 py-5 rounded-full border border-white font-semibold text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-hover">
              See more work
            </a>
          </div>

        </div>
      </section>

      {/* 5. Clients / Logos */}
      <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="self-start">
              <FadeInUp>
                <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light max-w-md">
                  Over the years I have worked with very diverse clients. I have a proven track record working with marketers, product managers, designers and developers.
                </p>
              </FadeInUp>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-black py-32 px-6 md:px-12 lg:px-24">
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
                  { q: "What is your process?", a: "I start by understanding your core business needs..." },
                  { q: "How much do you charge?", a: "Every project is custom, so pricing varies based on scope." },
                  { q: "Do you work with startups?", a: "Yes, I specialize in scaling ambitious startups." },
                  { q: "What tools do you use?", a: "Next.js, Framer Motion, and a suite of no-code tools." }
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-xs font-medium mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Limited availability
            </div>

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
                <span className="text-xl md:text-2xl font-medium text-white">contact@bleukei.com</span>
                <button className="cursor-hover flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                  Copy to clipboard
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div>
                <h4 className="text-white/50 text-sm mb-4">Social</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">LinkedIn</a>
                  <a href="#" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">Twitter</a>
                </div>
              </div>
              <div>
                <h4 className="text-white/50 text-sm mb-4">Legal</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">Privacy Policy</a>
                  <a href="#" className="cursor-hover font-medium hover:text-white/70 text-lg transition-colors">Terms of Service</a>
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
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 mb-6 border border-white/10 bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Taking on select engagements
          </span>
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
    <section id="services" className="bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/40 text-sm font-bold tracking-[0.2em]">(BK-01)</span>
              <span className="text-white/20 text-sm font-bold tracking-[0.2em] uppercase">What we do</span>
            </div>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white flex items-center gap-4">
              Services <span className="text-white/20 font-light text-[clamp(2rem,3vw,3rem)]">(5)</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed">
            End-to-end growth: visibility on the front end, efficiency on the back end.
          </p>
        </div>

        {/* Row-based Interactive Layout */}
        <div 
          className="flex flex-col gap-6 lg:gap-12 relative w-full"
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
