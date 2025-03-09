// src/lib/auth.ts
import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import dbConnect from '@/lib/dbConnection';
import User from '@/models/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Initialize the MongoDB adapter properly
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await dbConnect();

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('Invalid credentials');
        }

        // Check if email is verified
        if (!user.emailVerified) {
          throw new Error('Please verify your email before signing in');
        }

        // Fix TypeScript error by explicitly passing credentials.password as string
        const isValidPassword = await user.comparePassword(credentials.password as string);

        if (!isValidPassword) {
          throw new Error('Invalid credentials');
        }

        // Fix TypeScript error by safely accessing _id with type assertion
        const userId = (user._id as unknown) as ObjectId;

        return {
          id: userId.toString(),
          email: user.email,
          name: user.fullname
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.id) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  // Using AUTH_SECRET instead of NEXTAUTH_SECRET
  secret: process.env.AUTH_SECRET
});