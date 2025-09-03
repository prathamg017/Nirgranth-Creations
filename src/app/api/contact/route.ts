import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Contact from "@/app/models/contact";

export async function POST(req: Request) {
  try {
    console.log("📩 Incoming contact request...");

    await dbConnect();
    console.log("✅ DB Connected in contact API");

    const { name, email, message } = await req.json();
    console.log("📥 Received form data:", { name, email, message });

    if (!name || !email || !message) {
      console.error("⚠️ Missing required fields");
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({ name, email, message });
    console.log("✅ Contact saved:", newContact);

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error: any) {
    console.error("❌ Error saving contact:", error.message || error);
    return NextResponse.json(
      { success: false, message: "Failed to save contact", error: error.message },
      { status: 500 }
    );
  }
}
