import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Official Portfolio | Nirgranth Creations",
  description: "Explore the full exhibition of elite designs, cinematic edits, and brand identities by Nirgranth Creations. A deep dive into our finest creative executions.",
};

export default function Page() {
  return <PortfolioContent />;
}
