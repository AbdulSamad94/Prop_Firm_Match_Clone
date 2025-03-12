// app/api/seed/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import Firm from '@/models/Firms';
import Challenge from '@/models/Challenge';
import Offer from '@/models/Offer';
import Review from '@/models/Review';
import User from '@/models/User';

export async function GET() {
  try {
    // Connect to MongoDB
    await dbConnect();

    // OPTIONAL: Clear existing dummy data for a clean seed
    await Firm.deleteMany({});
    await Challenge.deleteMany({});
    await Offer.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});

    // Create dummy users
    const user1 = await User.create({
      fullname: "Alice Johnson",
      email: "alice@example.com",
      password: "password123" // This will be hashed automatically by the pre-save hook
    });

    const user2 = await User.create({
      fullname: "Bob Williams",
      email: "bob@example.com",
      password: "secret456" // This will also be hashed automatically
    });

    // Create a sample Firm document
    const firm = await Firm.create({
      name: "The5ers",
      slug: "the5ers",
      logoUrl: "https://the5ers.com/logo.png",
      rating: 4.8,
      reviewCount: 300,
      foundedYear: 2018,
      yearsInOperation: 5,
      website: "https://the5ers.com",
      overview: "The5ers is a proprietary trading firm offering funding for forex traders.",
      instrumentsAndAssets: [
        { assetName: "Forex", description: "Major, minor, and exotic currency pairs" },
        { assetName: "Indices", description: "Popular global indices" }
      ],
      leverage: [
        { accountType: "Standard", leverageValue: "1:30" },
        { accountType: "Aggressive", leverageValue: "1:100" }
      ],
      commissions: [
        { instrument: "Forex", commissionValue: "$5 per lot" },
        { instrument: "Indices", commissionValue: "$2 per contract" }
      ],
      firmRules: [
        { ruleTitle: "Max Daily Drawdown", ruleDescription: "Traders must not exceed a 3% daily drawdown." },
        { ruleTitle: "Profit Target", ruleDescription: "Traders must reach a 10% profit target within 60 days." }
      ],
      payoutPolicy: [
        { policyTitle: "Profit Split", policyDescription: "Traders keep 50% of profits on the funded account." },
        { policyTitle: "Payout Frequency", policyDescription: "Profit payouts are processed once a month." }
      ]
    });

    // Create sample Challenges referencing the firm
    const challenge1 = await Challenge.create({
      firm: firm._id,
      name: "Bootcamp Challenge",
      entryFee: 99,
      accountSize: 10000,
      profitTarget: "10%",
      maxDrawdown: "5%",
      maxDailyDrawdown: "3%",
      timeLimit: "60 days",
      description: "A two-phase evaluation challenge to get funded up to $10k.",
      phases: [
        {
          phaseName: "Phase 1",
          profitTarget: "10%",
          timeLimit: "30 days",
          otherRules: "No news trading, no weekend positions"
        },
        {
          phaseName: "Phase 2",
          profitTarget: "10%",
          timeLimit: "30 days",
          otherRules: "Max daily loss 3%"
        }
      ]
    });

    const challenge2 = await Challenge.create({
      firm: firm._id,
      name: "Pro Trader Challenge",
      entryFee: 199,
      accountSize: 50000,
      profitTarget: "8%",
      maxDrawdown: "5%",
      maxDailyDrawdown: "2%",
      timeLimit: "60 days",
      description: "A single-phase challenge for advanced traders seeking a $50k funded account.",
      phases: []
    });

    // Create a sample Offer referencing the firm
    const offer = await Offer.create({
      firm: firm._id,
      title: "5% OFF",
      discountPercentage: 5,
      code: "SAVE5",
      validUntil: new Date("2025-06-30"),
      description: "Save 5% on your challenge fees with this code!"
    });

    // Create sample Reviews referencing the firm and the dummy users
    const review1 = await Review.create({
      firm: firm._id,
      user: user1._id,
      rating: 5,
      title: "Excellent Support",
      comment: "The5ers team has excellent customer service. They helped me pass the challenge quickly!"
    });

    const review2 = await Review.create({
      firm: firm._id,
      user: user2._id,
      rating: 4,
      title: "Good Challenge",
      comment: "Their challenge is fair, though I wish the time limits were more flexible."
    });

    return NextResponse.json(
      {
        message: "Dummy data seeded successfully with users",
        firm,
        challenges: [challenge1, challenge2],
        offer,
        reviews: [review1, review2],
        users: [user1, user2]
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error seeding dummy data:", error);
    return NextResponse.json(
      { error: error.message || "Failed to seed dummy data" },
      { status: 500 }
    );
  }
}
