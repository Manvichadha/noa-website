'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, Zap, Building, User, TrendingUp } from 'lucide-react';

function FadeInUp({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors">
            ← Back to Home
          </Link>
          
          <RevealLine>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
              We're in the business of
            </h1>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white/50 pb-4">
              giving you back your business
            </h1>
          </RevealLine>

          <FadeInUp delay={0.3} className="mt-8 max-w-2xl">
            <p className="text-lg text-white/60 leading-relaxed font-light">
              Most owners started their business to do something they love. Not to spend every day on operations, marketing, and admin. We're here to fix that.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-[#FAF9F6] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-12">The Story</h2>
            <div className="max-w-3xl space-y-8 text-[#1A1A1A]/80 text-lg md:text-xl leading-relaxed font-light">
              <p>
                The firm behind the systems
              </p>
              <p>
                BleuKei exists because most businesses know exactly what they should be doing: consistent marketing, disciplined follow-up, modern tools, clean operations. They just do not have the time, team, or specialty to do it. We are the firm that does it for them, quietly, behind their brand.
              </p>
              <p>
                We are deliberately lean: senior strategy, a dedicated build team, and AI doing the heavy lifting everywhere it genuinely helps. That structure is the point. It is how our clients get big-company infrastructure without big-agency overhead, and it is the same playbook we use to run BleuKei itself.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="self-start">
              <FadeInUp>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">The Founder</span>
                </div>
              </FadeInUp>
              <RevealLine>
                <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white mb-6">
                  Led by Noa Berger
                </h2>
              </RevealLine>
            </div>

            <div className="flex flex-col gap-8 self-start">
              <FadeInUp delay={0.1}>
                <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light">
                  Noa spent years structuring partnerships for serious brands, inside the rooms where growth deals actually get made. What stood out was not the deals. It was the infrastructure: the systems, playbooks, and follow-up discipline that made everything compound.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-white/80 font-light">
                  BleuKei brings that infrastructure, plus the AI capability big companies take for granted, to businesses that never had access to either.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <div className="flex flex-wrap gap-6 mt-4">
                  <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 font-medium">
                    LinkedIn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[#FAF9F6] pb-32 px-6 md:px-12 lg:px-24 pt-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">What Makes Us Different</h2>
            <p className="text-[#1A1A1A]/60 text-lg mb-16">There are a lot of consultants. Here's why clients choose BLEUKEI.</p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeInUp delay={0.1}>
              <div className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">AI-Powered, Not Just Advice</h3>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed">
                We don't just tell you what to do we build and run the systems that do it. Automation, AI tools, and operational infrastructure that keeps working after we've left the room.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center mb-6">
                <Building className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Built for Local Business</h3>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed">
                We're not enterprise consulting repackaged for small budgets. Every framework, every tactic, every metric is built around the reality of running a local business tight margins, limited bandwidth, and real stakes.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center mb-6">
                <User className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Senior attention, every engagement</h3>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed">
                The people who design your strategy are the people who build it. No account managers, no hand-offs, no junior staff learning on your budget.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-4">Results-First, Always Measurable</h3>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed">
                We establish clear baselines in week one and measure everything that matters not vanity metrics. If we can't tie it to revenue, leads, or time saved, we don't track it.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#FAF9F6] pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <FadeInUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">Our Approach</h2>
              </div>
              <p className="text-[#1A1A1A]/60 max-w-sm text-sm md:text-base leading-relaxed">
                Four phases. No fluff. Designed to get results fast and keep them compounding.
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
                    We deep-dive into your business. We talk to your team, review your numbers, and audit what's actually working versus what you think is working. The goal is a clear-eyed picture of your starting point and your biggest opportunities no sugarcoating.
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
                    We build your 90-day growth roadmap. Specific goals, specific tactics, specific responsibilities. You'll know exactly what we're doing, why we're doing it, and what success looks like. This is your playbook not a generic template.
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
                    We get to work. We implement the campaigns, build the systems, and run the initiatives alongside your team. We're in the trenches with you not consultants who disappear after the plan is written.
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
                    We measure everything against our targets. We identify what's working, kill what isn't, and double down on what's driving results. Growth isn't a project with an end date it's a continuous cycle of learning and compounding.
                  </p>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] pt-32 pb-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto w-full text-center flex flex-col items-center">
          <RevealLine>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold tracking-tight text-white mb-6 pb-4">
              Ready to get your time back?
            </h2>
          </RevealLine>
          <FadeInUp delay={0.2} className="max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-lg text-white/60 leading-relaxed font-light mb-12">
              Book a free 30-minute consultation. No pitch, no pressure just a real conversation about your business.
            </p>
            <a href="https://calendar.app.google/9HkGH8jzjx82fwfk8" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
          </FadeInUp>
        </div>
      </section>

    </main>
  );
}
