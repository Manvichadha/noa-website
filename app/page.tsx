'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Target, Palette, BarChart3, Mail } from 'lucide-react';

// Animated counter component
function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Glass card component
function GlassCard({ children, className = '', hover = true }: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`
      bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl
      ${hover ? 'hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,170,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,107,0.05),transparent_40%)]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium tracking-wider uppercase">
              Growth & Operations Consultancy
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.1] mb-8"
          >
            Accelerating
            <br />
            <span className="gradient-text">ambitious brands</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 text-center max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            We help local businesses reclaim their time and scale through 
            strategic brand development and performance marketing.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
          >
            <GlassCard className="p-6 sm:p-8 text-center" hover>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text-teal mb-2">
                $<AnimatedCounter value={2} suffix="M+" />
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Revenue Generated</div>
            </GlassCard>
            
            <GlassCard className="p-6 sm:p-8 text-center" hover>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Projects Delivered</div>
            </GlassCard>
            
            <GlassCard className="p-6 sm:p-8 text-center" hover>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-coral-400 mb-2">
                <AnimatedCounter value={30} suffix="+" />
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Brands Accelerated</div>
            </GlassCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Growth Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-teal-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      client: "Bean & Bloom Café",
      service: "Brand Strategy + Local SEO",
      result: "3x revenue increase in 90 days",
      metric: "300%",
      metricLabel: "Revenue Growth"
    },
    {
      client: "Artisan Home Services",
      service: "Content + Automation",
      result: "40 hours saved weekly",
      metric: "40h",
      metricLabel: "Time Saved/Week"
    },
    {
      client: "Coastal Fitness Studio",
      service: "Paid Ads + Landing Pages",
      result: "4.5x ROAS consistently",
      metric: "4.5x",
      metricLabel: "Return on Ad Spend"
    },
    {
      client: "Urban Retail Collective",
      service: "E-commerce + Email",
      result: "150% increase in online sales",
      metric: "150%",
      metricLabel: "Sales Increase"
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-4 block">Selected Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Recent Projects</h2>
          <p className="text-white/60 text-lg">Real results for real businesses. Every project is a partnership focused on measurable growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 h-full group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-teal-400 transition-colors">{project.client}</h3>
                    <p className="text-white/50 text-sm">{project.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold gradient-text">{project.metric}</div>
                    <div className="text-white/40 text-xs uppercase tracking-wider">{project.metricLabel}</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/70">{project.result}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business, understanding your goals, challenges, and opportunities. No templates, no assumptions.",
      icon: Target
    },
    {
      number: "02",
      title: "Strategy",
      description: "A custom growth roadmap tailored to your specific situation. Clear milestones, realistic timelines, measurable outcomes.",
      icon: Sparkles
    },
    {
      number: "03",
      title: "Execution",
      description: "We implement with precision — brand development, design systems, campaigns, and automation working in harmony.",
      icon: Zap
    },
    {
      number: "04",
      title: "Optimize",
      description: "Continuous improvement based on real data. We scale what works, refine what doesn't, and keep you ahead of the curve.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-coral-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Process</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Complex growth, simplified</h2>
          <p className="text-white/60 text-lg">A proven methodology that turns ambitious goals into achievable results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-white/10 group-hover:text-teal-500/20 transition-colors">{step.number}</span>
                  <step.icon className="w-6 h-6 text-white/30 group-hover:text-teal-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "Brand Strategy",
      description: "Positioning, messaging, and visual identity that sets you apart from competitors.",
      icon: Target,
      color: "teal"
    },
    {
      title: "Design Systems",
      description: "Cohesive visual language across all touchpoints — web, social, print, and beyond.",
      icon: Palette,
      color: "coral"
    },
    {
      title: "Growth Marketing",
      description: "Data-driven campaigns that acquire customers profitably at scale.",
      icon: BarChart3,
      color: "teal"
    },
    {
      title: "Operations",
      description: "Automation and workflows that free up your time to focus on what matters.",
      icon: Zap,
      color: "coral"
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-4 block">What We Do</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Services</h2>
          <p className="text-white/60 text-lg">End-to-end growth solutions for businesses ready to scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-8 group cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'teal' ? 'bg-teal-500/10 text-teal-400' : 'bg-coral-500/10 text-coral-400'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                <p className="text-white/50">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Insights/Newsletter Section
function InsightsSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqedgjon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, source: 'Weekly Insights signup' }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="insights" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,107,107,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-coral-400 text-sm font-medium uppercase tracking-wider mb-4 block">Weekly Insights</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Growth intelligence, delivered</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Join 500+ founders and marketers receiving actionable strategies, case studies, and industry insights every week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 sm:p-12" hover={false}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
                  <p className="text-white/50">Check your inbox for a welcome message.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-400 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/30 text-sm text-center">
                    No spam. Unsubscribe anytime. Join 500+ subscribers.
                  </p>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Recent issues preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { title: "The 3-Month Growth Sprint", date: "Feb 20, 2026" },
              { title: "Local SEO in 2026", date: "Feb 13, 2026" },
              { title: "Automation That Actually Works", date: "Feb 6, 2026" }
            ].map((issue, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{issue.date}</div>
                <div className="text-white/70 text-sm hover:text-teal-400 transition-colors cursor-pointer">{issue.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
  const logos = ["Google", "Meta", "Shopify", "Stripe", "Notion"];
  
  const testimonials = [
    {
      quote: "BLEUKEI transformed our online presence. We went from invisible to fully booked in 3 months.",
      author: "Sarah Chen",
      role: "Owner, Bean & Bloom Café"
    },
    {
      quote: "The automation alone saved us 40 hours a week. Best investment we've made.",
      author: "Marcus Rodriguez",
      role: "CEO, Artisan Home Services"
    }
  ];

  return (
    <section id="trust" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-center text-white/30 text-sm uppercase tracking-wider mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-40">
            {logos.map((logo, idx) => (
              <span key={idx} className="text-xl sm:text-2xl font-bold text-white/60">{logo}</span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What clients say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, idx) => (
              <GlassCard key={idx} className="p-8">
                <blockquote className="text-lg text-white/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA/Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqedgjon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,170,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Ready to accelerate?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours with next steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 sm:p-12" hover={false}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message sent!</h3>
                  <p className="text-white/50">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2">Tell us about your project</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                      placeholder="What are your goals? What challenges are you facing?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">BLEUKEI</span>
          </div>
          <div className="text-white/30 text-sm">
            © 2026 BLEUKEI. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-teal-400 transition-colors text-sm">Twitter</a>
            <a href="#" className="text-white/50 hover:text-teal-400 transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-white/50 hover:text-teal-400 transition-colors text-sm">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
