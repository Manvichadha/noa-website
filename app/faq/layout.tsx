import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'FAQ: Pricing, Process, AI | BleuKei',
  description:
    'Answers to the most common questions about working with BleuKei: pricing, timelines, AI automation, GEO, contracts, and how to get started.',
  alternates: {
    canonical: 'https://bleukei.com/faq',
  },
  openGraph: {
    type: 'website',
    url: 'https://bleukei.com/faq',
    title: 'FAQ: Pricing, Process, AI | BleuKei',
    description:
      'Answers to the most common questions about working with BleuKei: pricing, timelines, AI automation, GEO, contracts, and how to get started.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Every engagement is scoped to the problem, so we do not publish flat prices. There are two models: project builds (a defined system, a defined price) and ongoing engagements (we build, run, and improve your growth systems month over month). What drives cost is scope, integrations, and how much we operate versus hand over. You will have a clear number after one call.' } },
    { '@type': 'Question', name: 'How long until we see results?', acceptedAnswer: { '@type': 'Answer', text: 'Systems ship in weeks, not quarters. Automation and sales systems show output fast: booked calls, hours recovered, follow-ups that stop slipping. Visibility work (SEO, GEO, reviews) compounds: expect early signals in 60 to 90 days and real momentum after that. In week one we set baselines, so you always know exactly what changed.' } },
    { '@type': 'Question', name: 'I am not technical. Will I actually be able to use what you build?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. That is the point. We work almost exclusively with non-technical owners. Everything we ship comes with plain-language documentation, training for your team, and human approval steps where they matter. If a system only works while we babysit it, we consider it unfinished.' } },
    { '@type': 'Question', name: 'Are we locked into a long contract?', acceptedAnswer: { '@type': 'Answer', text: 'No. Project work is scoped and done. Ongoing engagements run month to month after an initial period agreed upfront. We keep clients by results, not by contract terms. You also own everything we build: accounts, systems, and data stay in your name.' } },
    { '@type': 'Question', name: 'How is BleuKei different from a marketing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Marketing agencies run campaigns. We build the underlying machine: sales systems, automation, operations, and visibility infrastructure that keep compounding after any single campaign ends. The result is not just more leads. It is a business that runs better with less of your time.' } },
    { '@type': 'Question', name: 'How do we get started?', acceptedAnswer: { '@type': 'Answer', text: 'Book a free 30-minute call. No pitch, no pressure: we talk about your business, and you leave with our honest read on your biggest opportunities. If we are a fit, the first engagement is a paid deep audit that becomes your 90-day roadmap, whether you continue with us or not.' } },
    { '@type': 'Question', name: 'What does the process actually look like?', acceptedAnswer: { '@type': 'Answer', text: 'Four phases. Clarity: we audit what is working and what is leaking time and money. Strategy: a 90-day roadmap with specific goals and metrics. Execution: we build and implement alongside your team. Optimization: we measure, scale what works, and kill what does not.' } },
    { '@type': 'Question', name: 'Who actually does the work?', acceptedAnswer: { '@type': 'Answer', text: 'A senior strategist leads every engagement and a dedicated build team ships the systems. The people who design your strategy are the people responsible for delivering it. We do not hand accounts down a chain.' } },
    { '@type': 'Question', name: "Why don't you name your clients?", acceptedAnswer: { '@type': 'Answer', text: "Discretion is part of the service. We work behind our clients' brands: their customers see them, not us. That is also why our case studies are anonymized, with their approval. The specifics are real." } },
    { '@type': 'Question', name: 'What do you need from us?', acceptedAnswer: { '@type': 'Answer', text: 'A decision-maker who can give us an hour a week, access to the tools you already use, and honest answers in the audit. We handle the rest.' } },
    { '@type': 'Question', name: 'Who owns the systems when the engagement ends?', acceptedAnswer: { '@type': 'Answer', text: 'You do. Accounts, automations, content, data: everything is built in your name and documented so it keeps running. No hostage infrastructure.' } },
    { '@type': 'Question', name: 'Do you work with our existing tools?', acceptedAnswer: { '@type': 'Answer', text: 'Almost always yes. We build on mainstream platforms (Google, Shopify, Notion, your CRM) and connect what you have before recommending anything new.' } },
    { '@type': 'Question', name: 'What industries do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'Right now: e-commerce, retail, restaurants, healthcare, hospitality, sales teams, marketing agencies, and technology companies. The systems transfer across industries, so if yours is not listed, book a call anyway.' } },
    { '@type': 'Question', name: 'What is GEO (Generative Engine Optimization)?', acceptedAnswer: { '@type': 'Answer', text: "GEO is the practice of making a business visible and citeable in AI-generated answers from tools like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO optimizes for ranked links, GEO optimizes for being the business an AI names when someone asks for a recommendation. It combines structured data, answer-first content, and off-site reputation signals." } },
    { '@type': 'Question', name: 'What can AI automation actually do for a small business?', acceptedAnswer: { '@type': 'Answer', text: 'Today, reliably: respond to and qualify leads, keep a CRM updated without manual entry, produce and schedule content with human approval, monitor for buying signals, and generate reports automatically. The pattern: AI removes repetitive coordination work, humans keep the judgment calls.' } },
    { '@type': 'Question', name: 'Do AI systems replace staff?', acceptedAnswer: { '@type': 'Answer', text: 'In our experience, no. They remove the work your team should never have been doing by hand: data entry, chasing follow-ups, formatting reports. Teams end up doing more of the work that actually needs a human.' } },
    { '@type': 'Question', name: 'What is a fractional growth team?', acceptedAnswer: { '@type': 'Answer', text: 'A fractional growth team gives a business senior marketing, sales, and operations capability without full-time hires: one firm building and running those systems for a fraction of the cost of employing that team. BleuKei is a fractional growth team with an engineering arm.' } },
  ],
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
