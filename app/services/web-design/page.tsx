import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Website Design & Development Kenya | Namilani Digital",
  description:
    "Professional website design and development in Kenya. We build responsive business websites, landing pages, WordPress sites, and website redesigns tailored to your goals.",
  path: "/services/web-design",
  keywords: [
    "website design Kenya",
    "web development Kenya",
    "business website Kenya",
    "WordPress development Kenya",
    "website redesign Kenya",
  ],
});

export default function WebsiteDesignPage() {
  return <ServiceDetail service={getService("web-design")!} />;
}
