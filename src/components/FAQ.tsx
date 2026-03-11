'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-cream last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 lg:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base lg:text-lg font-medium text-charcoal group-hover:text-rose-gold transition-colors pr-4">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border border-cream flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-rose-gold border-rose-gold rotate-180' : 'group-hover:border-rose-gold'
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-charcoal-light'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-charcoal-light font-light leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left column - Title */}
          <ScrollReveal className="lg:col-span-2">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
              {t.faq.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
              {t.faq.title}
            </h2>
            <div className="w-16 h-[2px] bg-rose-gold mb-6" />
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-rose-gold hover:text-rose-gold-dark transition-colors"
            >
              {t.hero.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>

          {/* Right column - Accordion */}
          <ScrollReveal className="lg:col-span-3" delay={200}>
            <div className="bg-white rounded-2xl px-6 lg:px-8">
              {t.faq.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
