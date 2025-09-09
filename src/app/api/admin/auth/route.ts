import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

// Get JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'eutopia-waitlist-secret-key-2023';

export async function GET(request: NextRequest) {
  try {
    console.log('Auth API called');
    
    // Get token from request cookies directly
    const token = request.cookies.get('admin_token')?.value;
    console.log('Token from request:', !!token);

    if (!token) {
      console.log('No token found in auth API');
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // Verify token
      const decoded = verify(token, JWT_SECRET);
      console.log('Token verified in auth API:', decoded);
      return NextResponse.json({ authenticated: true, user: decoded });
    } catch (err) {
      console.error('Token verification failed in auth API:', err);
      
      // Create response
      const response = NextResponse.json(
        { message: 'Invalid or expired token' },
        { status: 401 }
      );
      
      // Clear the invalid cookie
      response.cookies.delete('admin_token');
      
      return response;
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}