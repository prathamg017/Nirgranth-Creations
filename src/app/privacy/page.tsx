import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Nirgranth Creations",
  description: "Our commitment to protecting your digital data and privacy.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
