import { Metadata } from "next";
import RefundContent from "./RefundContent";

export const metadata: Metadata = {
  title: "Refund & Cancellation | Nirgranth Creations",
  description: "Transparency regarding our service commitments and project cancellations.",
};

export default function RefundPage() {
  return <RefundContent />;
}
