'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-rose-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testemunhos" className="py-12 sm:py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.testimonials.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-white rounded-2xl p-7 lg:p-8 border border-cream-dark/20 h-full flex flex-col">
                {/* Stars */}
                <Stars />

                {/* Quote */}
                <blockquote className="mt-5 mb-6 flex-1">
                  <svg className="w-8 h-8 text-rose-gold/15 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-charcoal-light font-light leading-relaxed text-sm">
                    {item.text}
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-cream">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold/20 to-sage/20 flex items-center justify-center">
                    <span className="font-serif text-sm font-semibold text-charcoal">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{item.name}</p>
                    <p className="text-xs text-charcoal-light/60">
                      {item.location} · {item.treatment}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
