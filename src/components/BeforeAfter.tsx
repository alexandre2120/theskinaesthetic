'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

/*
 * Before/After image pairs — keyed by translation label substring.
 * When a label includes the key (case-insensitive), the real images render.
 * Cards without a match keep the elegant placeholder.
 */
const beforeAfterImages: Record<string, { before: string; after: string }> = {
  drenagem:  { before: '/drenagem-antes.jpeg', after: '/drenagem-depois.jpeg' },
  drainage:  { before: '/drenagem-antes.jpeg', after: '/drenagem-depois.jpeg' },
  drenaje:   { before: '/drenagem-antes.jpeg', after: '/drenagem-depois.jpeg' },
  redutora:  { before: '/redutora-antes.jpeg', after: '/redutora-depois.jpeg' },
  sculpting: { before: '/redutora-antes.jpeg', after: '/redutora-depois.jpeg' },
  reductor:  { before: '/redutora-antes.jpeg', after: '/redutora-depois.jpeg' },
  estrias:   { before: '/estrias-antes.jpeg', after: '/estrias-depois.jpeg' },
  stretch:   { before: '/estrias-antes.jpeg', after: '/estrias-depois.jpeg' },
  estrías:   { before: '/estrias-antes.jpeg', after: '/estrias-depois.jpeg' },
};

/** Try to find a matching image pair for a given label */
function findImages(label: string) {
  const lower = label.toLowerCase();
  for (const key of Object.keys(beforeAfterImages)) {
    if (lower.includes(key)) return beforeAfterImages[key];
  }
  return null;
}

export default function BeforeAfter() {
  const { t } = useLanguage();

  return (
    <section id="resultados" className="py-12 sm:py-20 lg:py-28 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.beforeAfter.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.beforeAfter.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {t.beforeAfter.items.map((label, i) => {
            const images = findImages(label);

            return (
              <ScrollReveal key={i} delay={i * 150} variant="scale">
                <div className="group relative rounded-2xl overflow-hidden bg-cream border border-cream-dark/30 hover:border-rose-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-gold/5">
                  <div className="aspect-[4/3] flex items-center justify-center relative">
                    {images ? (
                      /* ── Real before/after images ── */
                      <>
                        <div className="absolute inset-0 grid grid-cols-2">
                          <div className="relative overflow-hidden border-r-2 border-white">
                            <Image
                              src={images.before}
                              alt={`${label} — ${t.beforeAfter.beforeLabel}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, 25vw"
                            />
                            {/* Antes label */}
                            <div className="absolute bottom-2 left-2 bg-charcoal/70 backdrop-blur-sm rounded-full px-3 py-1">
                              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white">
                                {t.beforeAfter.beforeLabel}
                              </span>
                            </div>
                          </div>
                          <div className="relative overflow-hidden">
                            <Image
                              src={images.after}
                              alt={`${label} — ${t.beforeAfter.afterLabel}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, 25vw"
                            />
                            {/* Depois label */}
                            <div className="absolute bottom-2 right-2 bg-rose-gold/80 backdrop-blur-sm rounded-full px-3 py-1">
                              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white">
                                {t.beforeAfter.afterLabel}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Center divider circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </>
                    ) : (
                      /* ── Placeholder for services without images yet ── */
                      <>
                        <div className="absolute inset-0 grid grid-cols-2">
                          <div className="bg-gradient-to-br from-cream-dark/40 to-cream flex items-center justify-center border-r border-dashed border-charcoal/10">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal-light/40">
                              Antes
                            </span>
                          </div>
                          <div className="bg-gradient-to-br from-cream to-rose-gold/5 flex items-center justify-center">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal-light/40">
                              Depois
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                  {/* Label */}
                  <div className="p-4 bg-white">
                    <p className="font-serif text-base font-medium text-charcoal text-center">
                      {label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Disclaimer */}
        <ScrollReveal className="text-center mt-10">
          <p className="text-xs text-charcoal-light/50 max-w-lg mx-auto italic">
            {t.beforeAfter.disclaimer}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3 border border-rose-gold text-rose-gold font-medium rounded-full hover:bg-rose-gold hover:text-white transition-all duration-300 text-sm tracking-wide"
          >
            {t.hero.cta}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
