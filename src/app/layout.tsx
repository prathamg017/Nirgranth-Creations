import ClientWrapper from "@/app/components/ClientWrapper";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirgranth Creations | Elite Social Media Management & Creative Studio",
  description: "Transform your brand from zero to dominance. Expert Social Media Management, Recording Studio, AI Video Creation, and Web Development starting at ₹15k. The ultimate execution agency for modern brands.",
  keywords: [
    "Social Media Management India",
    "Recording Studio Indore",
    "Digital Marketing Agency",
    "Web Development starting 15k",
    "AI Video Creation",
    "Personal Branding Agency",
    "Nirgranth Creations",
    "Voice Over Recording Indore",
    "Corporate Video Editing",
    "Social Media Success Strategy",
    "Jinshasan ki Prabhavna",
    "Modern Dharmik Concert",
    "Ratnatray Show",
    "Best Creative Agency Indore",
    "High End Branding Agency",
    "Lead Generation Experts",
    "Creative Studio Indore",
    "Event Management Indore",
    "Wedding Planning Aesthetic",
    "Corporate Event Solutions"
  ],
  authors: [{ name: "Nirgranth Creations" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nirgranthcreations.com",
    title: "Nirgranth Creations | Scale Your Brand to Dominance",
    description: "Expert Social Media Management, Recording, and Creative Execution.",
    siteName: "Nirgranth Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirgranth Creations | Agency of Future",
    description: "We manufacture authority and craft empires.",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
