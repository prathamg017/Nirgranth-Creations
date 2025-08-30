import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Order from "@/app/models/order";

export async function POST(req: Request) {
  try {
    const { formData, cart, amount, payment } = await req.json();
    await dbConnect();

    const order = await Order.create({
      ...formData,
      items: cart,
      amount,
      paymentId: payment.razorpay_payment_id,
      status: "paid",
    });

    return NextResponse.json({ success: true, order });
  } catch (err: any) {
    console.error("❌ Save Order Error:", err);
    return NextResponse.json({ error: "Failed to save order", details: err.message }, { status: 500 });
  }
}
