'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { fireConversion } from '@/lib/gtag';

const WHATSAPP_URL =
  'https://wa.me/351920534489?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20desconto%20de%2050%25%20na%20Microderme%20%F0%9F%8C%B8';
const FORM_HREF = '#contacto';

export default function WomensDayModal() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRendered(true);
      // Small delay so the CSS transition fires after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const handleWhatsApp = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await fireConversion();
    close();
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleForm = () => {
    close();
  };

  if (!rendered) return null;

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.womensDay.headline}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-md bg-soft-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          visible ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}
      >
        {/* Top decorative bar */}
        <div className="h-1.5 w-full rose-gold-line" />

        {/* Close button */}
        <button
          onClick={close}
          aria-label={t.womensDay.close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cream hover:bg-cream-dark transition-colors duration-200 text-charcoal-light z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="px-8 pt-8 pb-10 text-center">
          {/* Badge */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rose-gold bg-rose-gold/10 px-4 py-1.5 rounded-full mb-5">
            {t.womensDay.badge}
          </span>

          {/* Headline */}
          <h2
            className="font-cormorant font-semibold text-charcoal leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', whiteSpace: 'pre-line' }}
          >
            {t.womensDay.headline}
          </h2>

          {/* Subheadline */}
          <p className="font-raleway text-sm text-charcoal-light leading-relaxed mb-7">
            {t.womensDay.subheadline}
          </p>

          {/* Discount pill */}
          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex items-baseline gap-2 bg-rose-gold rounded-2xl px-7 py-4">
              <span className="font-cormorant font-bold text-white" style={{ fontSize: '2.5rem' }}>
                {t.womensDay.discount}
              </span>
            </div>
            <span className="font-raleway text-xs font-medium text-rose-gold-dark tracking-wide mt-2">
              {t.womensDay.discountDetail}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-raleway font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200"
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.womensDay.ctaWhatsApp}
            </a>

            <a
              href={FORM_HREF}
              onClick={handleForm}
              className="w-full flex items-center justify-center gap-2 border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white font-raleway font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200"
            >
              {t.womensDay.ctaForm}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
