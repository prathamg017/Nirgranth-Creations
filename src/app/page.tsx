import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Nirgranth Creations | High-End Creative Agency & Social Media Dominance",
  description: "Elite agency specializing in Social Media Management, AI Video Creation, Recording Studio services, and Web Development. We transform brands from zero to dominance.",
  keywords: ["Nirgranth Creations", "Social Media Agency", "Recording Studio", "AI Video Production", "Creative Studio India"],
};

export default function Page() {
  return <HomeContent />;
}
