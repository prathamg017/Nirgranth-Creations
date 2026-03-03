import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Connect with Nirgranth Creations",
  description: "Ready to scale your brand? Connect with our expert team for Social Media Management, Recording Studio bookings, and Creative Solutions. Let's build your empire together.",
  keywords: ["Contact Nirgranth Creations", "Hire Social Media Agency", "Book Recording Studio Indore", "Creative Consultation"],
};

export default function Page() {
  return <ContactContent />;
}
