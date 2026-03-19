import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_COUNTRY = 'PT';

// Known search engine and AI bot user-agent patterns (bypass geo-block)
const BOT_PATTERNS = /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|gptbot|chatgpt-user|perplexitybot|claudebot|anthropic-ai|applebot|google-extended/i;

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? '';

  // Always allow search engine and AI bots through (they crawl from outside PT)
  if (BOT_PATTERNS.test(userAgent)) return NextResponse.next();

  const country = request.headers.get('x-vercel-ip-country') ?? '';

  // Allow Portuguese visitors through
  if (country === ALLOWED_COUNTRY || country === '') return NextResponse.next();

  // Rewrite non-PT visitors to the blocked page
  return NextResponse.rewrite(new URL('/blocked', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - /api/*          (webhook, contact form)
     * - /_next/*        (Next.js internals, static assets)
     * - /blocked        (the blocked page itself — avoid infinite loop)
     * - /favicon.ico, /icon.svg, /apple-icon.svg
     * - /sitemap.xml, /robots.txt (SEO crawlers)
     * - static files (images, fonts, etc.)
     */
    '/((?!api|_next|blocked|favicon\\.ico|icon\\.svg|apple-icon\\.svg|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpe?g|gif|svg|webp|ico|woff2?|ttf|eot|css|js)).*)',
  ],
};
