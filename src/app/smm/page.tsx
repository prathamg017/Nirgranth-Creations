import { Metadata } from "next";
import SMMContent from "./SMMContent";

export const metadata: Metadata = {
  title: "SMM Dominance | World-Class Social Media Management | Nirgranth Creations",
  description: "Elite Social Media Management & Brand Engineering. We manufacture market authority for 20+ global brands. Professional SMM strategy, viral content architecture, and aggressive brand scaling.",
  keywords: [
    "World's Best SMM Agency", "Elite Social Media Management", "Nirgranth Creations SMM",
    "Global Brand Scaling Agency", "Instagram Growth Strategy", "SMM for Personal Brands",
    "Corporate Social Media Authority", "Viral Content Engineering", "Social Media Dominance",
    "Premium SMM Packages India", "SMM Agency for Founders", "Attention Engineering Agency"
  ],
  alternates: { canonical: "https://nirgranthcreations.com/smm" },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management & Brand Scaling",
    "provider": {
      "@type": "Organization",
      "name": "Nirgranth Creations",
      "url": "https://nirgranthcreations.com"
    },
    "description": "Premium SMM services including content architecture, market positioning, and viral growth engine.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SMM Plans",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Starter SMM Plan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth SMM Plan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advanced SMM Plan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium SMM Plan" } }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SMMContent />
    </>
  );
}
