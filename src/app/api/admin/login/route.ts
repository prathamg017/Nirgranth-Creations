// /api/admin/login/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/app/mongo";
import Session from "@/app/models/session";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    await dbConnect();

    // Sign JWT (you can extend to 1–2h if you like)
    const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });

    // Save session in DB (server-side control)
    await Session.create({ token, user: email, valid: true });

    const res = NextResponse.json({ success: true });

    // ✅ Session cookie: no maxAge → destroyed on browser close
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // works in dev too
      sameSite: "strict",
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
