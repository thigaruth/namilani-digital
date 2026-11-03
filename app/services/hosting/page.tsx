import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Web Hosting & Domain Services | Namilani Digital",
  description:
    "Get your business online with domain registration assistance, web hosting setup, website migration support, and hosting guidance from Namilani Digital in Kenya.",
  path: "/services/hosting",
  keywords: [
    "web hosting Kenya",
    "domain registration Kenya",
    "website hosting Kenya",
    "website migration",
  ],
});

export default function HostingPage() {
  return <ServiceDetail service={getService("hosting")!} />;
}
