import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // Convert rupees to paise
    const order = await rzp.orders.create({
      amount: amount * 100, // IMPORTANT ✅
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: { email: email || "" },
    });

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (e: unknown) {
    console.error("Razorpay Error:", e);

    // Narrow the error type
    let message = "Razorpay error";
    if (e instanceof Error) {
      message = e.message;
    }

    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}
