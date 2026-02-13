import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Exclude specific paths (like API routes, static files, etc.)
  if (request.nextUrl.pathname.startsWith('/api/') ||
      request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.startsWith('/static/') ||
      request.nextUrl.pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }

  // If the subdomain is 'www' or the root domain, serve the main site
  if (subdomain === 'www' || subdomain === 'bleukei-website') {
    return NextResponse.next();
  }
    
  // Rewrite the request to the client subdomain page
  return NextResponse.rewrite(new URL(`/${subdomain}`, request.url));
}

// Configuration to run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
