import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SkipLink } from "@/components/layout/SkipLink";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { site, socialLinks } from "@/lib/site";
import { absoluteUrl, getSiteUrl } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Namilani Digital | Web Design, SEO & Digital Marketing",
    template: "%s | Namilani Digital",
  },
  description:
    "Build a stronger online presence with Namilani Digital. Explore website design, SEO, social media management, graphic design, and hosting solutions.",
  applicationName: site.name,
  authors: [{ name: site.name, url: getSiteUrl() }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "web design Kenya",
    "website development Kenya",
    "digital marketing Kenya",
    "SEO services Kenya",
    "social media management Kenya",
    "graphic design Kenya",
    "website hosting Kenya",
    "web design for small businesses Kenya",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: getSiteUrl(),
    siteName: site.name,
    title: "Namilani Digital | Web Design, SEO & Digital Marketing",
    description:
      "Build a stronger online presence with Namilani Digital. Explore website design, SEO, social media management, graphic design, and hosting solutions.",
    images: [
      {
        url: absoluteUrl("/og/namilani-digital-og.png"),
        width: 1200,
        height: 630,
        alt: "Namilani Digital — Build. Grow. Connect.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namilani Digital | Web Design, SEO & Digital Marketing",
    description:
      "Build a stronger online presence with Namilani Digital. Explore website design, SEO, social media management, graphic design, and hosting solutions.",
    images: [absoluteUrl("/og/namilani-digital-og.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#17243A" },
  ],
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: getSiteUrl(),
  logo: absoluteUrl("/logo/namilani-logo.png"),
  image: absoluteUrl("/og/namilani-digital-og.png"),
  email: site.email,
  telephone: site.phoneInternational,
  description: site.description,
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneInternational,
    email: site.email,
    contactType: "customer service",
    areaServed: "KE",
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: socialLinks.map((link) => link.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: getSiteUrl(),
  description: site.description,
  inLanguage: "en-KE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <MotionProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
