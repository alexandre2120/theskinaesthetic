'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-soft-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rose gold circle */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-rose-gold/8 via-rose-gold-light/5 to-transparent" />
        {/* Small sage accent */}
        <div className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full bg-sage/8 animate-float hidden sm:block" />
        {/* Subtle pattern dots */}
        <div className="absolute left-10 bottom-1/3 w-24 h-24 opacity-10 hidden sm:block">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
            ))}
          </div>
        </div>
        {/* Thin vertical rose gold line */}
        <div className="absolute right-1/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-rose-gold/10 to-transparent hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-0 lg:pb-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream rounded-full">
                <svg className="w-3.5 h-3.5 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal-light">
                  {t.hero.badge}
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
              {t.hero.headline.split(' ').map((word, i, arr) => (
                <span key={i}>
                  {i >= arr.length - 2 ? (
                    <span className="text-rose-gold italic">{word}</span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </h1>

            <p className="text-base lg:text-lg text-charcoal-light leading-relaxed max-w-lg font-light">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/20 text-sm tracking-wide"
              >
                {t.hero.cta}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/15 text-charcoal font-medium rounded-full hover:border-rose-gold hover:text-rose-gold transition-all duration-300 text-sm tracking-wide"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Jessica Photo */}
          <div className="relative hidden lg:flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Gradient backdrop shape — slightly larger, offset behind photo */}
              <div className="absolute -inset-3 rounded-[42%_58%_52%_48%/58%_42%_58%_42%] bg-gradient-to-br from-cream via-rose-gold/8 to-cream-dark shadow-2xl shadow-rose-gold/10 rotate-2" />

              {/* Organic-shaped photo with background preserved */}
              <div className="relative w-full h-full rounded-[45%_55%_50%_50%/55%_45%_55%_45%] overflow-hidden shadow-2xl shadow-charcoal/10 z-10">
                <Image
                  src="/jessica.jpeg"
                  alt={t.hero.imageAlt}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 0vw, 450px"
                />
                {/* Subtle vignette overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
              </div>

              {/* Thin decorative ring — echoes the blob shape */}
              <div className="absolute -inset-6 rounded-[48%_52%_45%_55%/52%_48%_52%_48%] border border-rose-gold/10 z-0 -rotate-3" />

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-sage/15 animate-float z-0" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border-2 border-rose-gold/15 z-0" style={{ animationDelay: '2s' }} />

              {/* Stats badge */}
              <div className="absolute bottom-10 -left-10 bg-white rounded-2xl shadow-xl shadow-charcoal/5 p-4 animate-fade-in z-30" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light">+500</p>
                    <p className="text-[10px] text-charcoal-light/60 tracking-wide">{t.trust.clients}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-pulse hidden sm:flex">
        <div className="w-5 h-8 border border-charcoal/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-rose-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
