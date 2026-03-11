'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sage/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold-light mb-4">
            {t.howItWorks.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            {t.howItWorks.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto mb-6" />
          <p className="text-white/50 font-light leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-rose-gold/20 via-rose-gold/40 to-rose-gold/20" />

          {t.howItWorks.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="text-center space-y-5 relative">
                {/* Step number */}
                <div className="w-16 h-16 mx-auto rounded-full bg-rose-gold/10 border border-rose-gold/20 flex items-center justify-center relative z-10">
                  <span className="font-serif text-2xl font-light text-rose-gold-light">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {i < 2 && (
                  <div className="md:hidden flex justify-center py-2">
                    <svg className="w-5 h-5 text-rose-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/20 text-sm tracking-wide"
          >
            {t.hero.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
