import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
const JWT_SECRET = process.env.JWT_SECRET || 'eutopia-waitlist-secret-key-2023';

// Helper function to verify admin authentication
const verifyAdmin = (request: NextRequest) => {
  // Try to get token from request cookies first (more reliable)
  let token = request.cookies.get('admin_token')?.value;
  
  // If not found, try from cookies() API
  if (!token) {
    token = (cookies() as any).get('admin_token')?.value;
  }
  
  console.log('Admin API - Token found:', !!token);
  
  if (!token) {
    return false;
  }
  
  try {
    const decoded = verify(token, JWT_SECRET);
    console.log('Admin API - Token verified:', decoded);
    return decoded && (decoded as any).role === 'admin';
  } catch (err) {
    console.error('Admin API - Token verification failed:', err);
    return false;
  }
};

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    if (!verifyAdmin(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get all users from the database
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}