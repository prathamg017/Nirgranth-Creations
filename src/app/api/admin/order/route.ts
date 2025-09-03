import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Order from "@/app/models/adminorder";

export async function GET() {
  try {
    await dbConnect();
    const orders = await Order.find().sort({ createdAt: -1 });
    // Always wrap data in an object
    return NextResponse.json({ orders });
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
