import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import { signIn } from '@/lib/auth';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { fullname, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user - password will be hashed by the pre-save middleware
    const user = new User({
      fullname,
      email,
      password,
      emailVerified: new Date()
    });

    await user.save();

    // Instead of creating our own JWT, let NextAuth handle authentication
    // This ensures consistent behavior across the app
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    return NextResponse.json(
      { message: 'Registration successful', userId: user._id },
      { status: 201 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}