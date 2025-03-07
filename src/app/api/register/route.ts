import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

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

    const hashedPassword = await hash(password, 10);
    const user = new User({
      fullname,
      email,
      password: hashedPassword,
      emailVerified: new Date()
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id.toString() },
      process.env.AUTH_SECRET!,
      { expiresIn: '7d' }
    );

    // Determine cookie name based on environment
    const isProduction = process.env.NODE_ENV === 'production';
    const cookieName = isProduction
      ? '__Secure-next-auth.session-token'
      : 'next-auth.session-token';

    // Create response
    const response = NextResponse.json(
      { message: 'Registration successful', userId: user._id },
      { status: 201 }
    );

    // Set session cookie
    response.cookies.set({
      name: cookieName,
      value: token,
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}