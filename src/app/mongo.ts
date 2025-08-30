import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
  console.log("✅ MongoDB connected");
}
