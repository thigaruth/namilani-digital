export const site = {
  name: "Namilani Digital",
  tagline: "Build. Grow. Connect.",
  description:
    "Namilani Digital helps businesses build a stronger digital presence through creative design, website development, SEO, and digital marketing solutions.",
  shortDescription:
    "Digital solutions for businesses ready to build, grow and connect.",
  url: "https://namilanidigital.com",
  email: "info@namilanidigital.com",
  phoneDisplay: "0796439179",
  phoneLocal: "0796439179",
  phoneInternational: "+254796439179",
  whatsappNumber: "254796439179",
  location: "Kenya",
  currency: "KES",
} as const;

export const whatsappHref = (() => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d]/g, "") || site.whatsappNumber;
  return `https://wa.me/${number}`;
})();

export function whatsappMessageHref(message = "Hi Namilani Digital, I'd like to discuss a project.") {
  return `${whatsappHref}?text=${encodeURIComponent(message)}`;
}

export const mailtoHref = `mailto:${site.email}`;
export const telHref = `tel:${site.phoneInternational}`;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website Design & Development", href: "/services/web-design" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Social Media Management", href: "/services/social-media" },
      { label: "Graphic Design & Branding", href: "/services/graphic-design" },
      { label: "Hosting & Domains", href: "/services/hosting" },
    ],
  },
  { label: "Our Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Website Design & Development", href: "/services/web-design" },
    { label: "Search Engine Optimization", href: "/services/seo" },
    { label: "Social Media Management", href: "/services/social-media" },
    { label: "Graphic Design & Branding", href: "/services/graphic-design" },
    { label: "Web Hosting & Domains", href: "/services/hosting" },
  ],
} as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    icon: "facebook" as const,
  },
  {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    icon: "instagram" as const,
  },
  {
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    icon: "linkedin" as const,
  },
  {
    label: "TikTok",
    href: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
    icon: "tiktok" as const,
  },
].filter((link) => link.href.length > 0);
