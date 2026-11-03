import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "SEO Services Kenya | Namilani Digital",
  description:
    "Improve your search visibility with practical SEO services in Kenya: SEO audits, keyword research, on-page optimization, technical SEO, and local SEO recommendations.",
  path: "/services/seo",
  keywords: [
    "SEO services Kenya",
    "SEO agency Kenya",
    "on-page SEO Kenya",
    "local SEO Kenya",
    "technical SEO",
  ],
});

export default function SeoPage() {
  return <ServiceDetail service={getService("seo")!} />;
}
