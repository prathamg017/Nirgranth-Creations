import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await rzp.orders.create({
      amount: amount * 100, // Razorpay wants paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: { email: email || "" },
    });

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (e: any) {
    console.error("Razorpay error:", e);
    return NextResponse.json(
      { error: e.message || "Razorpay error" },
      { status: 400 }
    );
  }
}
