import { Metadata } from "next";
import RecordingContent from "./RecordingContent";

export const metadata: Metadata = {
  title: "Recording Studio & Voice Over | Nirgranth Creations",
  description: "Professional Recording Studio & Voice Over services by 'Voice of Nations'. Studio hire at ₹1500/hr. High-end audio production for podcasts, ads, and documentaries.",
  keywords: ["Recording Studio Indore", "Voice Over Service India", "Voice of Nations", "Podcast Recording Studio", "Audio Production"],
};

export default function Page() {
  return <RecordingContent />;
}
