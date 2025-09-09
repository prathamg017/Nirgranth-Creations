"use client";

import Navbar from "@/app/components/Navbar";
import ToastProvider from "@/app/components/toast"; // ✅ default import
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <ToastProvider> {/* ✅ Wrap everything inside your ToastProvider */}
              <Navbar />
              <main>{children}</main>
            </ToastProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
