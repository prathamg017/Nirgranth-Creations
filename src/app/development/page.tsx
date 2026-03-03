import { Metadata } from "next";
import DevelopmentContent from "./DevelopmentContent";

export const metadata: Metadata = {
  title: "App & Web Development | High-Performance Digital Solutions",
  description: "Custom Web & App development starting at ₹15,000. We build high-speed, SEO-optimized, corporate-grade websites that convert visitors into clients.",
  keywords: ["Web Development India", "App Development Company", "Website starting 15k", "E-commerce Development", "Next.js Developers"],
};

export default function Page() {
  return <DevelopmentContent />;
}
