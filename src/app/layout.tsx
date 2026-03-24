import ClientWrapper from "@/app/components/ClientWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://nirgranthcreations.com"),
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
    images: [{ url: "/favicon-branded.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirgranth Creations | Agency of Future",
    description: "We manufacture authority and craft empires.",
    images: ["/favicon-branded.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nirgranth Creations",
              "url": "https://nirgranthcreations.com",
              "logo": "https://nirgranthcreations.com/icon-512.png",
              "sameAs": [
                "https://www.instagram.com/nirgranth_creation/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
