import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Social Media Management | Namilani Digital",
  description:
    "Build a consistent social media presence with content planning, branded graphics, captions, scheduling support, and platform-specific strategies for your business.",
  path: "/services/social-media",
  keywords: [
    "social media management Kenya",
    "social media agency Kenya",
    "content calendar",
    "social media graphics",
  ],
});

export default function SocialMediaPage() {
  return <ServiceDetail service={getService("social-media")!} />;
}
