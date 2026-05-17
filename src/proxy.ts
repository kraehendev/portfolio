import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PATHNAME_HEADER = 'x-pathname';

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PATHNAME_HEADER, request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    /*
     * All app routes; skip static files and Next internals.
     */
    '/((?!_next/static|_next/image|favicon.ico|sw.js|workbox-|fallback-|icons/|Montserrat/).*)',
  ],
};
