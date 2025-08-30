import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100, // paise
    currency: "INR",
    receipt: "receipt#1",
  };

  const order = await instance.orders.create(options);

  return NextResponse.json({
    id: order.id,
    currency: order.currency,
    amount: order.amount,
    key: process.env.RAZORPAY_KEY_ID,
  });
}
