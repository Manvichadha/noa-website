"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "Bean & Bloom Café",
    category: "Visibility & Content",
    result: "3x increase in foot traffic",
    description: "A local café struggling to stand out in a crowded market. We built their online presence from scratch.",
    stats: { traffic: "+300%", followers: "+2,500", bookings: "Fully booked" }
  },
  {
    title: "Artisan Crafts Co.",
    category: "E-commerce",
    result: "Online sales in 30 days",
    description: "A handmade goods maker selling only at markets. We launched their online store and marketing.",
    stats: { revenue: "$15K/mo", products: "50+", conversion: "4.2%" }
  },
  {
    title: "Metro Fitness Studio",
    category: "Efficiency & Automation",
    result: "40 hours saved monthly",
    description: "A gym drowning in manual booking and admin work. We automated their systems.",
    stats: { timeSaved: "40hrs/mo", members: "+150", satisfaction: "98%" }
  },
  {
    title: "GreenLeaf Landscaping",
    category: "Credibility & Branding",
    result: "Premium pricing accepted",
    description: "A landscaping business competing on price. We elevated their brand and positioning.",
    stats: { priceIncrease: "+35%", leads: "+200%", closeRate: "65%" }
  },
  {
    title: "TechStart Consulting",
    category: "Full Transformation",
    result: "6-figure launch in 90 days",
    description: "A new consultancy needing everything from brand to lead generation.",
    stats: { revenue: "$100K+", clients: "12", roi: "450%" }
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Real <span className="text-teal-400">Results</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how we've helped local businesses transform their digital presence and grow.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <p className="text-teal-400 text-sm uppercase tracking-widest mb-2">{study.category}</p>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-teal-400 font-semibold mb-4">{study.result}</p>
                <p className="text-gray-400 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {Object.entries(study.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xl font-bold text-teal-400">{value}</p>
                      <p className="text-xs text-gray-500 uppercase">{key}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready for Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Link 
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105 inline-block"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudies;
