import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/utils";
import { site } from "@/lib/site";

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  keywords,
  image = "/og/namilani-digital-og.png",
  noIndex = false,
}: PageMetadata): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    metadataBase: new URL(getSiteUrl()),
  };
}
