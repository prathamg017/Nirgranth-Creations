import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/app/mongo";
import Session from "@/app/models/session";

export async function middleware(req: NextRequest) {
  // Only protect /admin routes
  if (!req.nextUrl.pathname.startsWith("/admin")) return NextResponse.next();

  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    await dbConnect();

    // Verify JWT validity
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    // Check session validity in DB
    const session = await Session.findOne({ token, valid: true });
    if (!session) {
      const res = NextResponse.redirect(new URL("/admin/login", req.url));
      res.cookies.delete("admin_token");
      return res;
    }

    // Everything ok → allow request
    return NextResponse.next();
  } catch (err) {
    const res = NextResponse.redirect(new URL("/admin/login", req.url));
    res.cookies.delete("admin_token");
    return res;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
