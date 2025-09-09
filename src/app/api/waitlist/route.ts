import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, buyingFor } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'You are already on the waitlist' },
        { status: 409 }
      );
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        fullName: name,
        email,
        phoneNumber: phone,
        location,
        buyingFor
      }
    });

    return NextResponse.json({
      message: 'Successfully joined the waitlist',
      user: {
        id: user.id,
        name: user.fullName,
        email: user.email
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}