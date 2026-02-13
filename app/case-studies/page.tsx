"use client";

import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    name: "Bean & Bloom Café",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    metric: "25% increase in weekday traffic",
    challenge: "Struggling with declining customer traffic during weekdays",
    solution: "Implemented loyalty program and targeted social media campaigns",
    testimonial: "BLEUKEI's strategies revitalized our weekday business. The loyalty program made a huge difference!",
    author: "Sarah Miller, Owner"
  },
  {
    id: 2,
    name: "Apex Fitness",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    metric: "45% increase in new member sign-ups",
    challenge: "Member retention issues and attracting younger demographic",
    solution: "Personalized fitness platform and targeted Instagram/TikTok ads",
    testimonial: "BLEUKEI provided the tools we needed to boost our brand. Their approach paid off tenfold!",
    author: "John Carter, Owner"
  },
  {
    id: 3,
    name: "Cornerstone Construction",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    metric: "20% reduction in project completion time",
    challenge: "Operational inefficiencies and project delays",
    solution: "Project management software and streamlined workflows",
    testimonial: "BLEUKEI streamlined our operations and brought much-needed structure to our projects!",
    author: "Michael Davis, CEO"
  },
  {
    id: 4,
    name: "Glow Beauty Bar",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop",
    metric: "60% increase in website traffic",
    challenge: "Weak online presence and attracting new clients",
    solution: "SEO optimization and targeted online advertising",
    testimonial: "BLEUKEI helped us reach a broader audience. We're attracting more clients than ever!",
    author: "Emily White, Manager"
  },
  {
    id: 5,
    name: "TechFix Electronics",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop",
    metric: "35% increase in customer satisfaction",
    challenge: "Needed to improve customer service and increase repeat business",
    solution: "CRM system and customer engagement training",
    testimonial: "BLEUKEI's customer service strategies have been invaluable. Customer loyalty is secured!",
    author: "Robert Green, CEO"
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
            Real Businesses. <span className="text-teal-400">Real Results</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our case studies and see how we've helped local businesses like yours succeed.
          </p>
        </motion.div>
      </section>

      {/* Case Study Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{study.name}</h3>
                    <span className="text-sm text-teal-400">{study.location}</span>
                  </div>
                  
                  <div className="bg-teal-500/20 rounded-lg px-3 py-2 mb-4">
                    <p className="text-teal-400 font-semibold text-sm">{study.metric}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Challenge:</span>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Solution:</span>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                  
                  <blockquote className="mt-4 pt-4 border-t border-white/10 italic text-gray-400 text-sm">
                    "{study.testimonial}"
                    <footer className="mt-2 text-teal-400 not-italic">— {study.author}</footer>
                  </blockquote>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to be our next success story?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
          >
            Start Your Journey
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudies;
