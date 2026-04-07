import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Nirgranth Creations | Global Leader in Social Media Dominance & Creative Execution",
  description: "World-Class Agency specializing in SMM, AI Video Creation, Recording Studio Services, and App/Web Development. We manufacture market authority and scale global brands from zero to dominance.",
  keywords: [
    "World's Best Creative Agency", "Social Media Dominance Agency", "Elite Brand Scaling",
    "Nirgranth Creations Global", "High End Content Architecture", "Attention Engineering",
    "Global Recording & Voiceover", "Premium Web & App Studio", "Influencer Growth Strategy",
    "Corporate Brand Positioning", "Viral Marketing Engine", "Market Authority Manufacturer"
  ],
  alternates: { canonical: "https://nirgranthcreations.com" },
};

export default function Page() {
  return <HomeContent />;
}
