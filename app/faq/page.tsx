'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQItem from '@/components/FAQItem';
import Footer from '@/components/Footer';

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

const FAQ_GROUPS = [
  {
    title: "Working with BleuKei",
    questions: [
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
    ]
  },
  {
    title: "The engagement",
    questions: [
      {
        q: "What does the process actually look like?",
        a: "Four phases. Clarity: we audit what is working and what is leaking time and money. Strategy: a 90-day roadmap with specific goals and metrics. Execution: we build and implement alongside your team. Optimization: we measure, scale what works, and kill what does not."
      },
      {
        q: "Who actually does the work?",
        a: "A senior strategist leads every engagement and a dedicated build team ships the systems. The people who design your strategy are the people responsible for delivering it. We do not hand accounts down a chain."
      },
      {
        q: "Why don’t you name your clients?",
        a: "Discretion is part of the service. We work behind our clients’ brands: their customers see them, not us. That is also why our case studies are anonymized, with their approval. The specifics are real."
      },
      {
        q: "What do you need from us?",
        a: "A decision-maker who can give us an hour a week, access to the tools you already use, and honest answers in the audit. We handle the rest."
      },
      {
        q: "Who owns the systems when the engagement ends?",
        a: "You do. Accounts, automations, content, data: everything is built in your name and documented so it keeps running. No hostage infrastructure."
      },
      {
        q: "Do you work with our existing tools?",
        a: "Almost always yes. We build on mainstream platforms (Google, Shopify, Notion, your CRM) and connect what you have before recommending anything new."
      },
      {
        q: "What industries do you work with?",
        a: "Right now: e-commerce, retail, restaurants, healthcare, hospitality, sales teams, marketing agencies, and technology companies. The systems transfer across industries, so if yours is not listed, book a call anyway."
      }
    ]
  },
  {
    title: "AI and search, explained",
    questions: [
      {
        q: "What is GEO (Generative Engine Optimization)?",
        a: "GEO is the practice of making a business visible and citeable in AI-generated answers from tools like ChatGPT, Perplexity, Gemini, and Google’s AI Overviews. Where SEO optimizes for ranked links, GEO optimizes for being the business an AI names when someone asks for a recommendation. It combines structured data, answer-first content, and off-site reputation signals."
      },
      {
        q: "What can AI automation actually do for a small business?",
        a: "Today, reliably: respond to and qualify leads, keep a CRM updated without manual entry, produce and schedule content with human approval, monitor for buying signals, and generate reports automatically. The pattern: AI removes repetitive coordination work, humans keep the judgment calls."
      },
      {
        q: "Do AI systems replace staff?",
        a: "In our experience, no. They remove the work your team should never have been doing by hand: data entry, chasing follow-ups, formatting reports. Teams end up doing more of the work that actually needs a human."
      },
      {
        q: "What is a fractional growth team?",
        a: "A fractional growth team gives a business senior marketing, sales, and operations capability without full-time hires: one firm building and running those systems for a fraction of the cost of employing that team. BleuKei is a fractional growth team with an engineering arm."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors">
            ← Back to Home
          </Link>
          
          <RevealLine>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
              Frequently <span className="text-[#A3A3A3]">asked questions</span>
            </h1>
          </RevealLine>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          {FAQ_GROUPS.map((group, groupIdx) => {
            const words = group.title.split(' ');
            const firstWord = words[0];
            const restWords = words.slice(1).join(' ');

            return (
              <div key={group.title} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 last:mb-0">
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                  <FadeInUp>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[#A3A3A3] text-sm font-bold tracking-[0.2em]">0{groupIdx + 1}</span>
                      <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">{group.title}</span>
                    </div>
                  </FadeInUp>
                  <RevealLine>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-4 text-white">
                      {firstWord} {restWords && <span className="text-[#A3A3A3]">{restWords}</span>}
                    </h2>
                  </RevealLine>
                </div>

                <div className="lg:col-span-7">
                  <div className="border-t border-white/10">
                    {group.questions.map((faq, i) => (
                      <FAQItem 
                        key={i} 
                        question={faq.q} 
                        answer={faq.a} 
                        index={i} 
                        defaultOpen={groupIdx === 0 && i === 0} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
