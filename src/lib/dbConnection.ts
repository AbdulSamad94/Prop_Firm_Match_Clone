import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_CONNECTION_STRING;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Global Mongoose cache prevent multiple connections
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = global as typeof global & { mongoose: MongooseCache };

const cached: MongooseCache = globalWithMongoose.mongoose || { conn: null, promise: null };

 async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        if (!MONGODB_URI) {
            throw new Error("Please define the DATABASE_CONNECTION_STRING environment variable inside .env.local");
        }
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "PropFirmDB",
            bufferCommands: false,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect