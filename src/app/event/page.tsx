import { Metadata } from "next";
import EventContent from "./EventContent";

export const metadata: Metadata = {
  title: "Event Management | Legendary Moments by Nirgranth Creations",
  description: "Elite event management in Indore for corporate events, dream weddings, and cultural celebrations. We turn your vision into a legendary experience with meticulous planning.",
  keywords: ["Event Management Indore", "Wedding Planner Indore", "Corporate Event Organizer", "Jain Event Management", "Legendary Moments"],
};

export default function Page() {
  return <EventContent />;
}
