"use client";

import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEro + Image Section - Fresh Consulting Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,131,161,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal-400 text-sm uppercase tracking-widest mb-6">
              Growth & Operations Consultancy
            </p>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Stop Wasting Time.
              <br />
              <span className="text-teal-400">Start Growing.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We save local business owners from digital headaches 
              and give them back their time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/still-curious"
                className="border-2 border-white/30 hover:border-teal-400 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:bg-white/5"
              >
                Find Your Package (2 min)
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Problem Statement - Diana Style */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Headaches Holding You Back?
            </h2>
            <p className="text-xl text-gray-400">
              You're great at what you do. But technology keeps getting in the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Invisible Online",
                desc: "Potential customers can't find you on Google or social media",
                icon: "🔍"
              },
              {
                title: "Content Chaos", 
                desc: "You know you need content, but creating it feels impossible",
                icon: "📱"
              },
              {
                title: "Manual Madness",
                desc: "Hours wasted on repetitive tasks that could be automated",
                icon: "⚙️"
              }
            ].map((problem, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Fresh Consulting Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Five Ways We Help</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every business is different. That's why we offer targeted solutions 
              for your specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Visibility",
                desc: "Get found on Google Maps, social media, and local searches",
                color: "from-teal-500/20 to-transparent"
              },
              {
                title: "Content",
                desc: "Consistent, authentic content without the filming hassle",
                color: "from-blue-500/20 to-transparent"
              },
              {
                title: "Efficiency",
                desc: "Automation and workflows that cut manual work in half",
                color: "from-purple-500/20 to-transparent"
              },
              {
                title: "E-commerce",
                desc: "Online stores that convert browsers to buyers",
                color: "from-pink-500/20 to-transparent"
              },
              {
                title: "Credibility",
                desc: "Professional web presence that builds instant trust",
                color: "from-orange-500/20 to-transparent"
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`group relative bg-gradient-to-br ${service.color} border border-white/10 rounded-xl p-8 hover:border-teal-500/50 transition-all`}
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-teal-400 text-2xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Simple & Elegant */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "We talk about your business, your challenges, and your goals. No commitment, no pressure."
              },
              {
                step: "02", 
                title: "Custom Plan",
                desc: "You get a tailored strategy with clear deliverables, timeline, and pricing."
              },
              {
                step: "03",
                title: "Execution",
                desc: "We implement the plan while you focus on running your business."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <span className="text-6xl font-bold text-teal-400/30">{item.step}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop" 
              alt="Business team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Local Businesses</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { number: "50+", label: "Businesses Helped" },
              { number: "3x", label: "Avg. Traffic Increase" },
              { number: "40%", label: "Time Saved" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 text-center">
              "BLEUKEI transformed our online presence. We went from invisible to fully booked in 3 months."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-gray-400">Owner, Bean & Bloom Café</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-900/20 via-black to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take our 2-minute quiz to discover which package fits your needs, 
            or book a free consultation to talk directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/still-curious"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
            >
              Take the Quiz
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white/30 hover:border-teal-400 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:bg-white/5"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
