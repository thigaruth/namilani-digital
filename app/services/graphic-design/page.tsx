import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getService } from "@/lib/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Graphic Design & Branding | Namilani Digital",
  description:
    "Create a recognizable visual identity with logo design, brand identity development, social media graphics, promotional materials, and brand guidelines.",
  path: "/services/graphic-design",
  keywords: [
    "graphic design Kenya",
    "branding Kenya",
    "logo design Kenya",
    "social media graphics Kenya",
    "brand identity",
  ],
});

export default function GraphicDesignPage() {
  return <ServiceDetail service={getService("graphic-design")!} />;
}
