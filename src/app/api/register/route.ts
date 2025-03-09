// src/app/api/register/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import { generateOTP, sendVerificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { fullname, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If user exists but is not verified, we can allow re-registration
      if (existingUser.emailVerified) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        );
      } else {
        // Delete the unverified user if they're trying to register again
        await User.deleteOne({ _id: existingUser._id });
      }
    }

    // Generate OTP
    const verificationCode = generateOTP();
    const verificationCodeExpires = new Date();
    verificationCodeExpires.setMinutes(verificationCodeExpires.getMinutes() + 15); // 15 minutes expiry

    // Create a new unverified user
    const user = new User({
      fullname,
      email,
      password,
      verificationCode,
      verificationCodeExpires,
      emailVerified: null
    });

    await user.save();

    // Send verification email
    const emailResult = await sendVerificationEmail(email, verificationCode);

    if (!emailResult.success) {
      // If email sending fails, delete the user and return an error
      await User.deleteOne({ _id: user._id });
      return NextResponse.json(
        { error: 'Failed to send verification email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Registration initiated. Please check your email for verification code.',
        userId: user._id,
        email: user.email
      },
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