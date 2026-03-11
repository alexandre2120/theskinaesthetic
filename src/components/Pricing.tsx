'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  const category = t.pricing.categories[activeCategory];

  return (
    <section id="precos" className="py-12 sm:py-20 lg:py-28 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.pricing.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.pricing.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-2xl mx-auto">
          {t.pricing.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? 'bg-rose-gold text-white shadow-lg shadow-rose-gold/20'
                  : 'bg-white text-charcoal-light border border-cream hover:border-rose-gold/30 hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </ScrollReveal>

        {/* Active Category Content */}
        <div className="max-w-3xl mx-auto">
          {/* Category Description */}
          {category.description && (
            <ScrollReveal className="text-center mb-8">
              <p className="text-sm text-charcoal-light/70 font-light leading-relaxed max-w-xl mx-auto">
                {category.description}
              </p>
            </ScrollReveal>
          )}

          {/* Items List */}
          <div className="bg-white rounded-3xl border border-cream overflow-hidden shadow-sm">
            {category.items.map((item, i) => (
              <ScrollReveal key={`${activeCategory}-${i}`} delay={i * 60}>
                <div
                  className={`p-5 lg:p-6 hover:bg-cream/30 transition-colors duration-300 ${
                    i !== category.items.length - 1 ? 'border-b border-cream' : ''
                  }`}
                >
                  {/* Top row: Name + Book button */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-serif text-base lg:text-lg font-medium text-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal-light/60 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <a
                      href="#contacto"
                      className="hidden sm:inline-flex items-center shrink-0 px-4 py-2 bg-cream hover:bg-rose-gold hover:text-white text-charcoal text-xs font-medium rounded-full transition-all duration-300"
                    >
                      {t.pricing.bookNow}
                    </a>
                  </div>

                  {/* Price options */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.options.map((opt, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-gold/5 border border-rose-gold/10 rounded-full"
                      >
                        <span className="text-xs text-charcoal-light">{opt.duration}</span>
                        <span className="text-xs text-charcoal-light/30">—</span>
                        <span className="text-sm font-semibold text-rose-gold">{opt.price}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal className="text-center mt-8">
            <p className="text-sm text-charcoal-light/60 font-light max-w-lg mx-auto">
              {t.pricing.note}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
