import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Domain redirects: redirect external domains to sub-routes
  const domainMap: Record<string, string> = {
    'svedkovia.sk': '/svedkovia',
    'www.svedkovia.sk': '/svedkovia',
    'duhovyrod.sk': '/duhovyrod',
    'www.duhovyrod.sk': '/duhovyrod',
    'katolickaviera.sk': '/katolickaviera',
    'www.katolickaviera.sk': '/katolickaviera',
  };

  const redirectPath = domainMap[hostname];
  if (redirectPath) {
    const url = new URL(request.url);
    // Only redirect if not already on the correct sub-path
    const pathWithoutLocale = url.pathname.replace(/^\/(sk|en|cs)/, '');
    if (!pathWithoutLocale.startsWith(redirectPath)) {
      const targetUrl = new URL(`https://cestazivota.sk${redirectPath}`, request.url);
      return NextResponse.redirect(targetUrl, 301);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(sk|en|cs)/:path*'],
};
