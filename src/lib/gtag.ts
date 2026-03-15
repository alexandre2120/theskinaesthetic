const GA_ID = 'AW-18008215319';
const CONVERSION_LABEL = 'TXPeCOqohYccEJee_opD';

/**
 * Fires a Google Ads conversion event and returns a Promise that resolves
 * once the hit has been sent (or after a 2 s timeout / missing gtag).
 */
export function fireConversion(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: `${GA_ID}/${CONVERSION_LABEL}`,
        event_callback: resolve,
        event_timeout: 2000,
      });
    } else {
      resolve();
    }
  });
}
