import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Order from "@/app/models/order";
import Contact from "@/app/models/contact";

export async function GET() {
  try {
    await dbConnect();

    const ordersCount = await Order.countDocuments();
    const contactsCount = await Contact.countDocuments();

    return NextResponse.json({
      orders: ordersCount,
      contacts: contactsCount,
    });
  } catch (error) {
    console.error("❌ Error fetching stats:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
