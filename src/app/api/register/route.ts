import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import { generateOTP, sendVerificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { fullname, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If user exists but is not verified, allow resending the verification code
      if (!existingUser.emailVerified) {
        // Generate new OTP
        const verificationCode = generateOTP();
        const verificationCodeExpires = new Date();
        verificationCodeExpires.setMinutes(verificationCodeExpires.getMinutes() + 15); // 15 minutes expiry

        // Update user with new verification code
        existingUser.verificationCode = verificationCode;
        existingUser.verificationCodeExpires = verificationCodeExpires;
        await existingUser.save();

        // Send verification email
        const emailResult = await sendVerificationEmail(email, verificationCode);

        if (!emailResult.success) {
          return NextResponse.json(
            { error: 'Failed to send verification email. Please try again.' },
            { status: 500 }
          );
        }

        return NextResponse.json(
          { message: 'Verification code resent successfully' },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        );
      }
    }

    // Generate verification code
    const verificationCode = generateOTP();
    const verificationCodeExpires = new Date();
    verificationCodeExpires.setMinutes(verificationCodeExpires.getMinutes() + 15); // 15 minutes expiry

    // Create new user with verification code - password will be hashed by the pre-save middleware
    const user = new User({
      fullname,
      email,
      password,
      verificationCode,
      verificationCodeExpires,
      // Don't set emailVerified yet
    });

    await user.save();

    // Send verification email
    const emailResult = await sendVerificationEmail(email, verificationCode);

    if (!emailResult.success) {
      // If email fails to send, remove the user from database
      await User.deleteOne({ email });
      return NextResponse.json(
        { error: 'Failed to send verification email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Registration initiated. Please check your email for verification.' },
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