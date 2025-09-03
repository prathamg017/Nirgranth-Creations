import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Contact from "@/app/models/admincontact";

export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({contacts});
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}
