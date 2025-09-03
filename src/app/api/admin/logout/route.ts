import { NextResponse } from "next/server";
import dbConnect from "@/app/mongo";
import Session from "@/app/models/session";
import { cookies } from "next/headers"; // ✅ correct import

export async function POST() {
  const cookieStore = await cookies(); // ✅ synchronous, not async
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 401 });
  }

  await dbConnect();

  // Invalidate or delete session
  await Session.updateOne({ token }, { valid: false });
  // OR: await Session.deleteOne({ token });

  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_token");
  return res;
}
