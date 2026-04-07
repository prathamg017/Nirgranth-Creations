import { Metadata } from "next";
import GraphicContent from "./GraphicContent";

export const metadata: Metadata = {
  title: "Professional Graphics & Video Editing Studio | Nirgranth Creations",
  description: "Global Creative Studio for High-Performance Graphics, Cinematic Video Editing, and AI Video Creation. From branding & logos starting at ₹649 to high-impact commercials for elite brands.",
  keywords: [
    "World Class Graphic Design", "Professional Video Editing India", "AI Video Creation Agency",
    "Nirgranth Creations Portfolio", "Creative Branding Agency", "Cinematic Video Production",
    "High Conversion Ad Design", "Motion Graphics Studio", "YouTube Video Editing Service",
    "Premium Logo Design", "Visual Identity Engineering", "Global Creative Solutions"
  ],
  alternates: { canonical: "https://nirgranthcreations.com/graphic" },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphics, Video Editing & AI Creation",
    "provider": {
      "@type": "Organization",
      "name": "Nirgranth Creations",
      "url": "https://nirgranthcreations.com"
    },
    "description": "Professional design and editing services including AI-powered video synthesis and brand identity.",
    "areaServed": "Global",
    "offers": [
      { "@type": "Offer", "name": "Graphic Design", "price": "649", "priceCurrency": "INR" },
      { "@type": "Offer", "name": "Video Editing", "price": "1199", "priceCurrency": "INR" },
      { "@type": "Offer", "name": "AI Video Creation", "price": "1499", "priceCurrency": "INR" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GraphicContent />
    </>
  );
}
