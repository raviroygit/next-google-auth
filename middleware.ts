import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  
  const { pathname } = req.nextUrl;
  
  // Protect routes that require authentication
  if (pathname.startsWith('/log') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  // Redirect authenticated users away from auth pages
  if (pathname === '/' && isAuthenticated) {
    return NextResponse.redirect(new URL('/log', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};