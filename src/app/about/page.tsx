import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | The Vision Behind Nirgranth Creations",
  description: "Learn about the multidisciplinary creative studio that combines traditional craftsmanship with modern technology. We design, record, and build with purpose.",
  keywords: ["About Nirgranth Creations", "Creative Studio History", "Jain Culture Aesthetics", "Professional Creative Team"],
};

export default function Page() {
  return <AboutContent />;
}
