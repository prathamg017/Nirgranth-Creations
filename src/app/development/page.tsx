import { Metadata } from "next";
import DevelopmentContent from "./DevelopmentContent";

export const metadata: Metadata = {
  title: "Elite Web & App Development | High-Performance Solutions | Nirgranth Creations",
  description: "Global Leader in Next.js Web Apps & Flutter Mobile Apps. We build high-speed, SEO-optimized, corporate-grade digital ecosystems. Starting at ₹15,000 for elite development.",
  keywords: [
    "World Class App Development", "Professional Next.js Developers", "Flutter Mobile App Studio",
    "Nirgranth Creations Dev", "High Speed Website Development", "Enterprise Web Solutions",
    "Global SaaS Development Agency", "iOS & Android App Expert", "Custom API Development",
    "Premium Web Design India", "Scalable Tech Architecture", "Digital Transformation Studio"
  ],
  alternates: { canonical: "https://nirgranthcreations.com/development" },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App & Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Nirgranth Creations",
      "url": "https://nirgranthcreations.com"
    },
    "description": "Custom high-performance digital solutions using Next.js, Flutter, and scalable cloud architectures.",
    "areaServed": "Global",
    "offers": [
      { "@type": "Offer", "name": "Basic Web App", "price": "15000", "priceCurrency": "INR" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <DevelopmentContent />
    </>
  );
}
