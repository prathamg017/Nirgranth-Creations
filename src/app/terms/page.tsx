import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Nirgranth Creations",
  description: "The legal framework for our creative partnerships.",
};

export default function TermsPage() {
  return <TermsContent />;
}
