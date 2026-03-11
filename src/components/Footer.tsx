'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <Image
                src="/logoastheric.png"
                alt="The Skin Aesthetic"
                width={240}
                height={160}
                className="h-14 w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/_theskinaesthetic_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-gold/20 flex items-center justify-center text-white/40 hover:text-rose-gold-light transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61553877294814"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-gold/20 flex items-center justify-center text-white/40 hover:text-rose-gold-light transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/60">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.services, href: '#tratamentos' },
                { label: t.nav.results, href: '#resultados' },
                { label: t.nav.testimonials, href: '#testemunhos' },
                { label: t.nav.pricing, href: '#precos' },
                { label: t.nav.faq, href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-rose-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/60">
              {t.footer.schedule}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.scheduleItems.map((item, i) => (
                <li key={i} className="text-sm text-white/40">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/60">
              {t.nav.contact}
            </h4>
            <div className="space-y-4">
              {/* Lisbon */}
              <div>
                <p className="text-xs text-rose-gold-light font-medium mb-1">{t.footer.lisbon}</p>
                <p className="text-sm text-white/40">{t.footer.lisbonAddress}</p>
              </div>
              {/* Setúbal */}
              <div>
                <p className="text-xs text-rose-gold-light font-medium mb-1">{t.footer.setubal}</p>
                <p className="text-sm text-white/40">{t.footer.setubalAddress}</p>
              </div>
              {/* Phone & Email */}
              <div className="space-y-1.5 pt-1">
                <a href={`tel:${t.footer.phone}`} className="block text-sm text-white/40 hover:text-rose-gold-light transition-colors">
                  {t.footer.phone}
                </a>
                <a href={`mailto:${t.footer.email}`} className="block text-sm text-white/40 hover:text-rose-gold-light transition-colors">
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex items-center justify-center">
          <p className="text-xs text-white/25">
            &copy; {year} The Skin Aesthetic. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
