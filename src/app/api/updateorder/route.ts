// app/api/order/update/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Order from "@/app/models/order";

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { orderId, status, paymentId } = await req.json();

    const updated = await Order.findByIdAndUpdate(
      orderId,
      { status, paymentId },
      { new: true }
    );

    return NextResponse.json({ success: true, order: updated });
  } catch (error) {
    console.error("❌ Order update error:", error);
    return NextResponse.json(
      { success: false, message: "Order update failed" },
      { status: 500 }
    );
  }
}
