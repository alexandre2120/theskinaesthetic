import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_COUNTRY = 'PT';

export function middleware(request: NextRequest) {
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
