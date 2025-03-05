import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({ message: "MongoDB Connected Successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Database connection failed!", result: error }, { status: 500 });
    }
}