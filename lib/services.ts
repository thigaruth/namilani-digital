export type ServiceSlug =
  | "web-design"
  | "seo"
  | "social-media"
  | "graphic-design"
  | "hosting";

export type ServiceAccent = "coral" | "teal" | "orange";

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServicePrice {
  label: string;
  price: string;
  note: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  navName: string;
  cardTitle: string;
  cardDescription: string;
  heroTitle: string;
  heroDescription: string;
  startingPrice: string;
  icon: "monitor" | "search" | "share" | "palette" | "server";
  accent: ServiceAccent;
  whyHeading: string;
  whyBody: string[];
  offeringHeading: string;
  offeringIntro?: string;
  offerings: string[];
  includedHeading?: string;
  included?: string[];
  process: ServiceProcessStep[];
  pricing: ServicePrice[];
  notes: string[];
  platforms?: string[];
  approach?: ServiceProcessStep[];
  extras?: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Website Design & Development",
    navName: "Website Design & Development",
    cardTitle: "Your Business. Your Story. Your Digital Home.",
    cardDescription:
      "We design and develop professional, responsive websites that showcase your brand, communicate your value, and give your customers a seamless online experience.",
    heroTitle: "Your Website Should Do More Than Look Good.",
    heroDescription:
      "We design and develop professional websites that communicate your value, showcase your services, and help turn visitors into potential customers. Whether you need a simple business website or a more customized online experience, we'll help you build a digital foundation suited to your goals.",
    startingPrice: "From KES 25,000",
    icon: "monitor",
    accent: "coral",
    whyHeading: "Why Your Website Matters.",
    whyBody: [
      "Your website is often the first place potential customers go to learn about your business. It should make a strong impression, communicate your value, and make it easy for visitors to take the next step.",
      "A thoughtful website brings your story, services, and contact details into one clear experience. It also creates a foundation for search visibility, social media activity, and future growth.",
    ],
    offeringHeading: "What We Build",
    offeringIntro:
      "We create responsive, user-friendly websites tailored to your business goals.",
    offerings: [
      "Business websites",
      "Service-based websites",
      "Landing pages",
      "WordPress websites",
      "Website redesigns",
    ],
    includedHeading: "What's Included",
    included: [
      "Customized website design",
      "Mobile-responsive layouts",
      "Agreed website pages",
      "Contact forms",
      "WhatsApp contact integration",
      "Social media links",
      "Essential on-page SEO setup",
      "Basic website security configuration",
      "Analytics integration, where agreed",
      "Content upload and formatting",
      "Website testing before launch",
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We discuss your business, audience, goals, and the role the website needs to play.",
      },
      {
        title: "Content & Structure",
        description:
          "We agree on the pages, content requirements, and navigation structure before design begins.",
      },
      {
        title: "Design & Development",
        description:
          "We design the visual direction and build the responsive website around the agreed scope.",
      },
      {
        title: "Testing & Review",
        description:
          "We review the website on different screen sizes, check the agreed functionality, and refine based on feedback.",
      },
      {
        title: "Launch & Handover",
        description:
          "We help put the website live, confirm the essentials are working, and hand over the finished project.",
      },
    ],
    pricing: [
      {
        label: "Professional Website",
        price: "From KES 25,000",
        note: "The final price depends on the number of pages, complexity, content requirements, integrations, and requested features.",
      },
    ],
    notes: [
      "Premium plugins, hosting, domain registration, advanced functionality, and maintenance may be charged separately.",
      "Delivery timelines are confirmed after the project scope has been reviewed.",
    ],
  },
  {
    slug: "seo",
    name: "SEO Services",
    navName: "SEO Services",
    cardTitle: "Be Found by the People Looking for What You Offer.",
    cardDescription:
      "We help improve your website's visibility in search engines through keyword research, on-page optimization, technical SEO, and content improvements.",
    heroTitle: "Get Found by Customers Searching for What You Offer.",
    heroDescription:
      "Your business deserves to be visible when potential customers look for relevant products and services online. Namilani Digital helps businesses improve their search visibility through practical SEO strategies focused on website quality, useful content, and discoverability.",
    startingPrice: "From KES 5,000",
    icon: "search",
    accent: "teal",
    whyHeading: "Why SEO Matters.",
    whyBody: [
      "A well-designed website is more valuable when people can discover it. SEO helps connect your business with people already searching for the products, services, and information you provide.",
      "Our focus is on practical improvements to your website's structure, content, and technical foundations — building a stronger base for long-term organic visibility.",
    ],
    offeringHeading: "Our SEO Services",
    offerings: [
      "SEO audits",
      "Keyword research",
      "On-page optimization",
      "Page titles and meta descriptions",
      "Content optimization",
      "Technical SEO",
      "Image optimization",
      "Internal linking",
      "Local SEO",
      "Performance monitoring and reporting, where included",
    ],
    process: [
      {
        title: "Review your website and objectives",
        description:
          "We look at your current website, priorities, and the outcomes you want to improve.",
      },
      {
        title: "Identify important SEO opportunities",
        description:
          "We review your pages, content, and technical setup to find relevant areas for improvement.",
      },
      {
        title: "Develop a prioritized action plan",
        description:
          "We agree on the most useful improvements and the scope of the work.",
      },
      {
        title: "Implement agreed improvements",
        description:
          "We make the agreed on-page, content, and technical changes.",
      },
      {
        title: "Review performance data and recommend next steps",
        description:
          "We review the available data, share observations, and identify what to focus on next.",
      },
    ],
    pricing: [
      {
        label: "SEO Services",
        price: "From KES 5,000",
        note: "Quotations specify deliverables, reporting arrangements, and whether the engagement is one-time or recurring.",
      },
    ],
    notes: [
      "Search rankings are influenced by many factors outside our control. We do not promise guaranteed search rankings.",
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    navName: "Social Media Management",
    cardTitle: "Turn Your Social Presence Into a Business Asset.",
    cardDescription:
      "We help businesses maintain a consistent and professional social media presence through content planning, creative graphics, captions, and platform-specific strategies.",
    heroTitle: "Your Brand Has a Story. Let's Help More People See It.",
    heroDescription:
      "Consistent, relevant content helps your business stay visible and communicate with its audience. We help you develop a stronger social media presence through strategic planning, branded creative content, and platform-appropriate messaging.",
    startingPrice: "From KES 5,000",
    icon: "share",
    accent: "orange",
    whyHeading: "Why Consistent Social Media Matters.",
    whyBody: [
      "Social media gives your business an opportunity to stay visible, share its story, and build relationships with customers.",
      "We help you plan and create content that reflects your brand and communicates with your audience consistently — with purpose behind every post.",
    ],
    offeringHeading: "Our Social Media Services",
    offerings: [
      "Social media strategy",
      "Content calendars",
      "Post planning and scheduling",
      "Caption writing",
      "Branded social media graphics",
      "Content themes and campaign ideas",
      "Platform-specific content adaptation",
      "Engagement recommendations",
      "Performance reporting, where included",
    ],
    platforms: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Other agreed platforms"],
    approach: [
      {
        title: "Educate",
        description:
          "Help your audience understand your services, products, and industry.",
      },
      {
        title: "Engage",
        description:
          "Encourage conversations, questions, and meaningful interactions.",
      },
      {
        title: "Promote",
        description:
          "Communicate offers, services, announcements, and campaigns.",
      },
      {
        title: "Build Trust",
        description:
          "Showcase expertise, work, processes, and authorized customer experiences.",
      },
      {
        title: "Connect",
        description:
          "Share the people, purpose, and values behind your business.",
      },
    ],
    process: [
      {
        title: "Understand your brand",
        description:
          "We learn about your audience, priorities, and the platforms that matter to your business.",
      },
      {
        title: "Plan the content",
        description:
          "We develop themes, a content calendar, and a practical posting approach.",
      },
      {
        title: "Create the assets",
        description:
          "We produce branded graphics and captions aligned with your content plan.",
      },
      {
        title: "Support consistency",
        description:
          "We help coordinate scheduling and content delivery according to the agreed scope.",
      },
      {
        title: "Review and refine",
        description:
          "We review available performance information and recommend adjustments.",
      },
    ],
    pricing: [
      {
        label: "Social Media Management",
        price: "From KES 5,000",
        note: "Excluding advertising spend.",
      },
      {
        label: "Graphic Design Package",
        price: "15 Graphics for KES 3,000",
        note: "A practical package for branded social media creative.",
      },
    ],
    notes: [
      "Advertising expenditure, video production, photography, and community management are separate unless included in an agreed package.",
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design & Branding",
    navName: "Graphic Design & Branding",
    cardTitle: "Make Your Brand Impossible to Overlook.",
    cardDescription:
      "We create visually engaging designs that help your business communicate clearly and maintain a consistent identity.",
    heroTitle: "Make Your Brand Recognizable. Make Your Message Count.",
    heroDescription:
      "We create visual assets that help businesses communicate clearly, maintain a consistent identity, and stand out across digital platforms.",
    startingPrice: "Custom quote",
    icon: "palette",
    accent: "coral",
    whyHeading: "Why Visual Identity Matters.",
    whyBody: [
      "Your visual identity influences how people recognize and remember your business. Consistent design helps your brand feel credible and recognizable wherever it appears.",
      "We create cohesive design assets that help your brand communicate professionally across digital platforms and marketing materials.",
    ],
    offeringHeading: "Our Design Services",
    offerings: [
      "Logo design",
      "Brand identity",
      "Social media graphics",
      "Promotional posters",
      "Digital marketing creatives",
      "Brand guidelines",
      "Marketing collateral",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We learn about your business, audience, and the impression your brand needs to make.",
      },
      {
        title: "Define",
        description:
          "We agree on the visual direction, deliverables, and practical requirements.",
      },
      {
        title: "Design",
        description:
          "We create the agreed design assets and present them for review.",
      },
      {
        title: "Refine",
        description:
          "We make agreed refinements and prepare the final files.",
      },
      {
        title: "Deliver",
        description:
          "We hand over the finished assets with guidance on using them consistently.",
      },
    ],
    pricing: [
      {
        label: "Social Media Graphics",
        price: "15 Graphics for KES 3,000",
        note: "Final pricing for custom projects is based on the agreed deliverables.",
      },
    ],
    notes: [
      "Custom projects are quoted according to deliverables, scope, and the formats required.",
    ],
  },
  {
    slug: "hosting",
    name: "Web Hosting & Domain Services",
    navName: "Hosting & Domains",
    cardTitle: "A Reliable Foundation for Your Online Presence.",
    cardDescription:
      "We help businesses establish and maintain their online homes with domain registration assistance and web hosting solutions.",
    heroTitle: "Your Online Presence Needs a Strong Foundation.",
    heroDescription:
      "Get your business online with a suitable domain and hosting solution. We help businesses get these essentials in place and identify hosting options appropriate for their websites.",
    startingPrice: "From KES 2,500",
    icon: "server",
    accent: "teal",
    whyHeading: "Why the Right Foundation Matters.",
    whyBody: [
      "A website needs a suitable domain and hosting environment to be accessible online. The right setup gives your site a stable home and a clear address for customers to find.",
      "Whether you're launching your first website or moving an existing one, we help you get the technical foundations in place.",
    ],
    offeringHeading: "Our Hosting & Domain Services",
    offerings: [
      "Domain registration assistance",
      "Web hosting packages",
      "Website migration assistance, where agreed",
      "Hosting setup",
      "Basic technical support, according to the selected package",
      "Website maintenance options",
    ],
    process: [
      {
        title: "Understand your needs",
        description:
          "We discuss your website, expected requirements, and any existing domain or hosting setup.",
      },
      {
        title: "Recommend a solution",
        description:
          "We identify an appropriate hosting option and confirm what it includes.",
      },
      {
        title: "Set up the essentials",
        description:
          "We assist with the domain, hosting configuration, and the agreed setup tasks.",
      },
      {
        title: "Connect and test",
        description:
          "We help connect your website to the hosting environment and check the basics.",
      },
      {
        title: "Handover and support",
        description:
          "We confirm the setup details and explain the support arrangements in the selected package.",
      },
    ],
    pricing: [
      {
        label: "Web Hosting",
        price: "From KES 2,500",
        note: "Billing periods and hosting specifications are confirmed in the selected package.",
      },
    ],
    notes: [
      "Domain registration, SSL, backups, storage, email accounts, renewals, and technical support are subject to the actual hosting package terms.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const integratedPackages = [
  {
    title: "The Digital Foundation",
    description:
      "A business website, domain and hosting setup, and essential branding.",
    accent: "coral" as ServiceAccent,
  },
  {
    title: "The Visibility Package",
    description:
      "SEO improvements, website content optimization, and local search recommendations.",
    accent: "teal" as ServiceAccent,
  },
  {
    title: "The Social Presence Package",
    description:
      "Content planning, branded graphics, and social media management.",
    accent: "orange" as ServiceAccent,
  },
  {
    title: "The Complete Digital Presence",
    description:
      "A tailored combination of website development, branding, SEO, and social media services.",
    accent: "coral" as ServiceAccent,
  },
];

export const homeServiceLine = [
  "Web Design & Development",
  "SEO",
  "Digital Marketing",
  "Graphic Design",
  "Web Hosting",
];
