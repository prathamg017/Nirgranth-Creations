import { Metadata } from "next";
import RecordingContent from "./RecordingContent";

export const metadata: Metadata = {
  title: "Premium Recording Studio & Professional Voice Over | Nirgranth Creations",
  description: "World-Class Audio Production & Voice Over services by 'Voice of Nations'. High-end studio for podcasts, ads, dubbing, and documentaries. Professional acoustics and industry-standard gear.",
  keywords: [
    "World's Best Voice Over Artist", "Professional Recording Studio India", "Voice of Nations Studio",
    "Nirgranth Creations Audio", "Podcast Production Studio", "Dubbing Service India",
    "IVR Voice Over Service", "High End Audio Mastering", "Voice Recording for Ads",
    "Studio Hire Indore", "Broadcast Quality Audio Studio", "Global Voice Over Solutions"
  ],
  alternates: { canonical: "https://nirgranthcreations.com/recording" },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Recording Studio & Voice Over Services",
    "provider": {
      "@type": "Organization",
      "name": "Nirgranth Creations",
      "url": "https://nirgranthcreations.com"
    },
    "description": "Broadcast-quality voiceovers and music production in a professional isolated acoustic environment.",
    "areaServed": "Global",
    "offers": [
      { "@type": "Offer", "name": "Studio Session (Hourly)", "price": "1500", "priceCurrency": "INR" },
      { "@type": "Offer", "name": "Standard Voice Over", "price": "1500", "priceCurrency": "INR" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <RecordingContent />
    </>
  );
}
