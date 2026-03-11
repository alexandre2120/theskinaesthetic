'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

/* Service header images — index-matched to t.services.items */
const serviceImages = [
  '/relaxante.png',      // 0 – Massagem Relaxante
  '/terapeutica.png',    // 1 – Massagem Terapêutica
  '/drenagem.png',       // 2 – Drenagem Linfática
  '/redutora.png',       // 3 – Massagem Redutora / Modeladora
  '/gestantes.png',      // 4 – Massagem para Gestantes
  '/estrias.png',        // 5 – Tratamento de Estrias
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="tratamentos" className="py-12 sm:py-20 lg:py-28 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.services.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light leading-relaxed">
            {t.services.subtitle}
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100} variant="scale">
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-cream hover:border-rose-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-gold/5 hover:-translate-y-1 h-full flex flex-col">
                {/* Service Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={serviceImages[i] || serviceImages[0]}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Soft overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-[10px] font-medium text-charcoal tracking-wide">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-medium text-charcoal mb-2 group-hover:text-rose-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <a
                    href="#contacto"
                    className="text-xs font-medium text-rose-gold hover:text-rose-gold-dark transition-colors inline-flex items-center gap-1 group/link"
                  >
                    {t.services.cta}
                    <svg
                      className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/20 text-sm tracking-wide"
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
