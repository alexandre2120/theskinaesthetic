'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function MeetTheTeam() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.team.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.team.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto" />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <ScrollReveal variant="left" className="lg:col-span-2">
              <div className="relative max-w-xs mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-[30px] overflow-hidden border-2 border-cream-dark/20">
                  <Image
                    src="/team.jpeg"
                    alt={t.team.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 280px, 320px"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-rose-gold/15" />
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-sage/10" />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal variant="right" className="lg:col-span-3">
              <div className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-charcoal">
                    {t.team.name}
                  </h3>
                  <p className="text-rose-gold font-medium text-sm mt-1">{t.team.role}</p>
                </div>

                <p className="text-charcoal-light font-light leading-relaxed text-sm lg:text-base">
                  {t.team.bio}
                </p>

                {/* Qualifications */}
                <ul className="space-y-2.5 pt-2">
                  {t.team.qualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-light">
                      <svg className="w-4 h-4 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {qual}
                    </li>
                  ))}
                </ul>

                {/* Location tag */}
                <div className="flex items-center gap-2 pt-2">
                  <svg className="w-4 h-4 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm text-charcoal-light">{t.team.locations}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
