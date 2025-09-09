import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwtForEdge } from './lib/edge-jwt';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware running for path:', request.nextUrl.pathname);
  
  // Only apply to admin routes (except login)
  if (!request.nextUrl.pathname.startsWith('/admin') || 
      request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Skip API routes (they handle their own auth)
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Check for admin token
  const token = request.cookies.get('admin_token')?.value;
  console.log('Token found:', !!token);

  // If no token, redirect to login
  if (!token) {
    console.log('No token found, redirecting to login');
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Verify token using Edge-compatible function
  const isValid = verifyJwtForEdge(token);
  
  if (isValid) {
    console.log('Token verified successfully');
    return NextResponse.next();
  } else {
    console.log('Token verification failed');
    
    // Create a response that redirects
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    
    // Clear the invalid cookie
    response.cookies.delete('admin_token');
    
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
}