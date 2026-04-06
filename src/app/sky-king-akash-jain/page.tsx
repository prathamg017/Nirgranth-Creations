import { Metadata } from "next";
import BiographyClient from "./BiographyClient";

// ─── SEO METADATA (server component — keeps full Google authority) ─────────────
export const metadata: Metadata = {
  title: "Sky King Akash Jain | Founder of Nirgranth Creation & Ratnatraya | Jain Entrepreneur",
  description:
    "Sky King Akash Jain is the visionary Founder & CEO of Nirgranth Creation and the creator of Ratnatraya — India's grand Jain cultural show. Known as the Voice of Jainism, Akash Jain is a leading Jain entrepreneur and youth influencer shaping Jain culture with digital innovation.",
  keywords: [
    "Sky King Akash Jain", "Akash Jain Jain entrepreneur", "Nirgranth Creation founder",
    "Ratnatraya Jain show", "Voice of Jainism", "Jainism influencer India",
    "Jain youth entrepreneur", "Sky King Akash Jain biography", "Akash Jain Nirgranth",
    "Jain entrepreneur India", "Sky King entrepreneur", "Akash Jain Ratnatraya",
    "Jain cultural show founder", "Maryada Jain brand", "Jain Vidhi Vidhan platform",
  ],
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://nirgranthcreations.com/sky-king-akash-jain" },
  openGraph: {
    type: "profile", locale: "en_IN",
    url: "https://nirgranthcreations.com/sky-king-akash-jain",
    siteName: "Nirgranth Creations",
    title: "Sky King Akash Jain — Founder, Jain Entrepreneur & Voice of Modern Jainism",
    description: "Official biography of Sky King Akash Jain. Founder & CEO of Nirgranth Creation, creator of Ratnatraya — India's premier Jain cultural show.",
    images: [{ url: "https://nirgranthcreations.com/akashjain.jpeg", width: 1200, height: 630, alt: "Sky King Akash Jain - Founder of Nirgranth Creation" }],
    firstName: "Akash", lastName: "Jain",
  },
  twitter: {
    card: "summary_large_image", site: "@nirgranth_c", creator: "@nirgranth_c",
    title: "Sky King Akash Jain | Jain Entrepreneur & Founder of Nirgranth Creation",
    description: "Meet Sky King Akash Jain — Founder of Nirgranth Creation & Ratnatraya. Voice of Jainism.",
    images: ["https://nirgranthcreations.com/akashjain.jpeg"],
  },
  authors: [{ name: "Sky King Akash Jain", url: "https://nirgranthcreations.com/sky-king-akash-jain" }],
};

export default function SkyKingAkashJain() {
  const personSchema = {
    "@context": "https://schema.org", "@type": "Person",
    name: "Sky King Akash Jain", alternateName: ["Akash Jain", "Sky King"],
    description: "Sky King Akash Jain is a Jain entrepreneur, founder of Nirgranth Creation and Ratnatraya, and a prominent voice of modern Jainism in India.",
    url: "https://nirgranthcreations.com/sky-king-akash-jain",
    image: "https://nirgranthcreations.com/akashjain.jpeg",
    jobTitle: "Founder & CEO",
    worksFor: [{ "@type": "Organization", name: "Nirgranth Creation", url: "https://nirgranthcreations.com" }],
    knowsAbout: ["Jainism", "Cultural Branding", "Digital Marketing", "Youth Entrepreneurship", "Event Management"],
    nationality: { "@type": "Country", name: "India" },
    sameAs: ["https://www.instagram.com/nirgranth_creation/", "https://twitter.com/nirgranth_c", "https://youtube.com/@nirgranthcreations"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Nirgranth Creations", item: "https://nirgranthcreations.com" },
      { "@type": "ListItem", position: 2, name: "Sky King Akash Jain", item: "https://nirgranthcreations.com/sky-king-akash-jain" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Sky King Akash Jain — Founder of Nirgranth Creation & Voice of Modern Jainism",
    image: "https://nirgranthcreations.com/akashjain.jpeg",
    datePublished: "2026-04-06", dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Person", name: "Sky King Akash Jain", url: "https://nirgranthcreations.com/sky-king-akash-jain" },
    publisher: { "@type": "Organization", name: "Nirgranth Creations", logo: { "@type": "ImageObject", url: "https://nirgranthcreations.com/icon-512.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://nirgranthcreations.com/sky-king-akash-jain" },
    keywords: "Sky King Akash Jain, Jainism influencer, Nirgranth Creation founder, Ratnatraya, Jain entrepreneur India",
    about: { "@type": "Person", name: "Sky King Akash Jain" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hidden microdata */}
      <span itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
        <meta itemProp="name" content="Sky King Akash Jain" />
        <meta itemProp="jobTitle" content="Founder & CEO of Nirgranth Creation" />
        <meta itemProp="url" content="https://nirgranthcreations.com/sky-king-akash-jain" />
      </span>
      <BiographyClient />
    </>
  );
}
