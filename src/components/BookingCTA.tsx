'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function BookingCTA() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      treatment: (form.elements.namedItem('treatment') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // silently handle — user sees no change, can retry
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-20 lg:py-28 bg-soft-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-gold/3 via-transparent to-sage/3" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cream opacity-60 hidden sm:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-rose-gold mb-4">
            {t.booking.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            {t.booking.title}
          </h2>
          <div className="w-16 h-[2px] bg-rose-gold mx-auto mb-6" />
          <p className="text-charcoal-light font-light leading-relaxed">
            {t.booking.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-cream shadow-xl shadow-charcoal/3"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-charcoal-light uppercase">
                  {t.booking.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream bg-cream/30 text-charcoal text-sm placeholder:text-charcoal-light/30 focus:outline-none focus:border-rose-gold/40 focus:bg-white transition-all duration-300"
                  placeholder="Maria Silva"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-charcoal-light uppercase">
                  {t.booking.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream bg-cream/30 text-charcoal text-sm placeholder:text-charcoal-light/30 focus:outline-none focus:border-rose-gold/40 focus:bg-white transition-all duration-300"
                  placeholder="maria@email.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-charcoal-light uppercase">
                  {t.booking.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream bg-cream/30 text-charcoal text-sm placeholder:text-charcoal-light/30 focus:outline-none focus:border-rose-gold/40 focus:bg-white transition-all duration-300"
                  placeholder="+351 931 943 608"
                />
              </div>

              {/* Treatment */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-charcoal-light uppercase">
                  {t.booking.treatment}
                </label>
                <select
                  name="treatment"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-cream bg-cream/30 text-charcoal text-sm focus:outline-none focus:border-rose-gold/40 focus:bg-white transition-all duration-300 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>—</option>
                  {t.booking.treatmentOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-medium tracking-wide text-charcoal-light uppercase">
                  {t.booking.message}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-cream bg-cream/30 text-charcoal text-sm placeholder:text-charcoal-light/30 focus:outline-none focus:border-rose-gold/40 focus:bg-white transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 text-center">
              {submitted ? (
                <div className="inline-flex items-center gap-2 px-8 py-4 bg-sage/15 text-sage rounded-full text-sm font-medium animate-fade-in">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t.booking.success}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/20 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.booking.submit}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
