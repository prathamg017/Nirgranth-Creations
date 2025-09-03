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

  // 🧹 Destroy all sessions whenever server restarts
  const db = mongoose.connection.db;
  if (db) {
    try {
      await db.collection("sessions").deleteMany({});
      console.log("🧹 Cleared all sessions on server restart");
    } catch (err) {
      console.error("⚠️ Failed to clear sessions on restart:", err);
    }
  }
}
