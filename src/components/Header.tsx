'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.services, href: '#tratamentos' },
    { label: t.nav.results, href: '#resultados' },
    { label: t.nav.testimonials, href: '#testemunhos' },
    { label: t.nav.pricing, href: '#precos' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-rose-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center group shrink-0">
            <Image
              src="/logoastheric.png"
              alt="The Skin Aesthetic — Beauty . Technique . Results"
              width={240}
              height={160}
              className="h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal-light hover:text-rose-gold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-rose-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Language Switcher — hidden on mobile, shown in mobile menu instead */}
            <div className="hidden sm:flex items-center gap-1 bg-cream/60 rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-white text-charcoal shadow-sm'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="hidden sm:inline">{lang.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contacto"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-rose-gold text-white text-sm font-medium rounded-full hover:bg-rose-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/20"
            >
              {t.nav.book}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-6 pt-2 bg-soft-white/95 backdrop-blur-lg border-t border-cream">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-charcoal-light hover:text-rose-gold transition-colors border-b border-cream/50 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          {/* Language Switcher — Mobile */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  language === lang.code
                    ? 'bg-rose-gold/10 text-rose-gold border border-rose-gold/20'
                    : 'text-charcoal-light hover:text-charcoal bg-cream/50'
                }`}
              >
                <span className="text-sm">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block w-full text-center px-5 py-3 bg-rose-gold text-white text-sm font-medium rounded-full hover:bg-rose-gold-dark transition-colors"
          >
            {t.nav.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
