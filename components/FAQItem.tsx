'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

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

export default function FAQItem({ question, answer, index, defaultOpen = false }: { question: string, answer: string, index: number, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <FadeInUp delay={index * 0.1}>
      <div className="border-b border-white/10 py-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
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
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <p className="pt-6 text-lg text-white/70 max-w-2xl whitespace-pre-wrap">{answer}</p>
        </motion.div>
      </div>
    </FadeInUp>
  );
}
