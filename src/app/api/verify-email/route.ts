import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import { signIn } from '@/lib/auth';

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { email, verificationCode } = await request.json();

        // Find user with matching email and verification code
        const user = await User.findOne({
            email,
            verificationCode,
            verificationCodeExpires: { $gt: new Date() } // Check if code hasn't expired
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid or expired verification code' },
                { status: 400 }
            );
        }

        // Mark email as verified
        user.emailVerified = new Date();
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        // Log the user in
        await signIn('credentials', {
            redirect: false,
            email,
            password: '', // Empty password for internal verification login
        });

        return NextResponse.json(
            { message: 'Email verified successfully' },
            { status: 200 }
        );
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}