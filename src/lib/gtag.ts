const GA_ID = 'AW-18008215319';
const CONVERSION_LABEL = 'TXPeCOqohYccEJee_opD';

export function fireConversion() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GA_ID}/${CONVERSION_LABEL}`,
    });
  }
}
