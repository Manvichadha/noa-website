'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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

export default function WorkPage() {
  const caseStudies = [
    {
      num: "01",
      title: "Autonomous sales outreach (for a B2B sales team)",
      text: "Prospecting was eating the team alive: finding leads, researching them, writing outreach, logging activity, chasing follow-ups. We built an outreach system that discovers warm leads, researches them, reaches out with relevant messages, logs everything automatically, and books calls straight onto the calendar. Result: more than 100 hours per week saved across the sales team, with every contact logged and nothing depending on anyone’s memory.",
      img: "/images/project_1.png",
      hoverImg: "/images/project_1_hover.png"
    },
    {
      num: "02",
      title: "Social content engine (for small business owners)",
      text: "Consistent content is the first thing that slips when you run a business. We build engines that turn an owner’s thinking and market signals into ideas, drafts, and scheduled posts, with human approval on everything before it ships. Result: a full content presence running on one 30-minute approval session a week.",
      img: "/images/project_2.png",
      hoverImg: "/images/project_2_hover.png"
    },
    {
      num: "03",
      title: "Restaurant discovery infrastructure (for a restaurant owner)",
      text: "A great restaurant nobody can find is a bad business. We rebuilt their online presence to surface everywhere customers look: Google search, Google Maps, and the AI assistants that increasingly answer “where should I eat.” Result: a restaurant that gets found first, in every channel that matters.",
      img: "/images/project_3.png",
      hoverImg: "/images/project_3_hover.png"
    },
    {
      num: "04",
      title: "Direct booking platform (for a group of Airbnb hosts)",
      text: "Every booking through a platform hands a commission to the middleman. We built the group a branded website and booking platform on top of their existing property management stack: real-time availability, secure payments, and a direct relationship with their guests. Result: live and taking direct bookings today, commission-free, with the guest data staying with the hosts.",
      img: "/images/project_4_top.png",
      hoverImg: "/images/project_4_hover.png"
    },
    {
      num: "05",
      title: "Shopify launch and social campaign (for a clothing brand)",
      text: "A brand with product and no storefront. We built the Shopify store end to end and ran the social campaign to launch it: content, creative, and the automation connecting the two. Result: a live store and a repeatable campaign system the brand runs on.",
      img: "/images/project_5_top.png",
      hoverImg: "/images/project_5_hover.png"
    }
  ];

  const getLayout = (i: number) => {
    switch (i) {
      case 0: return { col: 'col-span-1 md:col-span-7', aspect: 'aspect-[4/3] md:aspect-[16/10]', mt: 'mt-0' };
      case 1: return { col: 'col-span-1 md:col-span-4 md:col-start-9', aspect: 'aspect-square', mt: 'mt-16 md:mt-48' };
      case 2: return { col: 'col-span-1 md:col-span-12', aspect: 'aspect-[4/3] md:aspect-[21/9]', mt: 'mt-16 md:mt-16' };
      case 3: return { col: 'col-span-1 md:col-span-4', aspect: 'aspect-square', mt: 'mt-16 md:mt-32' };
      case 4: return { col: 'col-span-1 md:col-span-7 md:col-start-6', aspect: 'aspect-[4/3] md:aspect-[16/10]', mt: 'mt-16 md:mt-16' };
      default: return { col: 'col-span-1 md:col-span-12', aspect: 'aspect-[4/3]', mt: 'mt-16' };
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors">
            ← Back to Home
          </Link>
          
          <RevealLine>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-white pb-4">
              Built, shipped, running
            </h1>
          </RevealLine>

          <FadeInUp delay={0.2} className="mt-8 max-w-2xl">
            <p className="text-lg text-white/80 leading-relaxed font-light">
              These are real systems working for real clients right now. The names are hidden by design: our clients’ customers see them, not us. Discretion is part of the service, so we let the specifics carry the proof. Every detail below is real and shared with our clients’ approval.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="pb-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8">
            {caseStudies.map((project, i) => {
              const layout = getLayout(i);
              return (
              <div key={i} className={`w-full ${layout.col} ${layout.mt}`}>
                <FadeInUp delay={0.1}>
                  <div className="group cursor-project cursor-none block">
                    <div className={`w-full ${layout.aspect} bg-white/5 rounded-xl mb-6 overflow-hidden relative`}>
                      <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
                        <Image src={project.img} alt={`Project ${project.num}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="absolute inset-0 z-0">
                        <Image src={project.hoverImg} alt={`Project ${project.num} Hover`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#A3A3A3] font-bold tracking-widest text-lg">{project.num}</span>
                        <div className="w-10 h-[1px] bg-white/20" />
                      </div>
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-white leading-tight tracking-tight">
                          {project.title.split(' (')[0]}
                        </h3>
                        <p className="text-sm text-[#A3A3A3] font-medium uppercase tracking-wider">
                          {project.title.match(/\((.*?)\)/)?.[1]}
                        </p>
                      </div>
                      <p className="text-base text-white/80 leading-relaxed font-light">
                        {project.text}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            )})}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
