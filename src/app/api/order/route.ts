import { NextResponse } from "next/server";
import connectDB from "@/app/mongo";  // your Mongo connection util
import Order from "@/app/models/order";     // your Mongoose model

// POST => Save order
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { amount, formData, cart, status } = body;

    if (!formData?.email || !cart?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newOrder = new Order({
      amount,
      customer: formData,
      cart,
      status: status || "pending",
    });

    const saved = await newOrder.save();

    return NextResponse.json({ success: true, dbOrder: saved });
  } catch (err: any) {
    console.error("❌ Order save error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
