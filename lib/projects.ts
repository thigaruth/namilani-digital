export const projectCategories = [
  "All",
  "Website Design & Development",
  "Branding & Graphic Design",
  "Digital Content & Marketing",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type ProjectAccent = "coral" | "teal" | "orange" | "navy";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  accent: ProjectAccent;
  pattern: "orbit" | "grid" | "wave" | "stack" | "rays" | "blocks" | "rings" | "steps";
  status: "preview";
  industry: string;
  servicesProvided: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  liveUrl: string | null;
  cardDescription: string;
  image?: string;
}

const pending = "Verified project details are pending and will be added once confirmed.";

const websiteDescription =
  "A website project profile with supplied design previews. Verified details will be added when available.";

export const projects: Project[] = [
  {
    slug: "totos-baby-shop",
    name: "Toto's Baby Shop",
    category: "Website Design & Development",
    accent: "coral",
    pattern: "orbit",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/totos-baby-shop.png",
  },
  {
    slug: "safi-cleaning",
    name: "Safi Cleaning",
    category: "Website Design & Development",
    accent: "teal",
    pattern: "grid",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/safi-cleaning.png",
  },
  {
    slug: "lifepoint-nakuru",
    name: "LifePoint Nakuru",
    category: "Website Design & Development",
    accent: "orange",
    pattern: "wave",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/lifepoint-nakuru.png",
  },
  {
    slug: "dikus-transporters",
    name: "Dikus Transporters",
    category: "Website Design & Development",
    accent: "navy",
    pattern: "stack",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/dikus-transporters.png",
  },
  {
    slug: "huruma-counselling",
    name: "Huruma Counselling",
    category: "Website Design & Development",
    accent: "coral",
    pattern: "rings",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/huruma-counselling.png",
  },
  {
    slug: "kkay-bpo",
    name: "KKAY BPO",
    category: "Website Design & Development",
    accent: "teal",
    pattern: "rays",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/kkay-bpo.png",
  },
  {
    slug: "vuma-feeds",
    name: "Vuma Feeds",
    category: "Branding & Graphic Design",
    accent: "orange",
    pattern: "blocks",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription:
      "A branding and graphic design project profile with supplied design previews. Verified details will be added when available.",
    image: "/projects/vuma-feeds.png",
  },
  {
    slug: "afeeda-farms",
    name: "Afeeda Farms",
    category: "Website Design & Development",
    accent: "teal",
    pattern: "grid",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/afeeda-farms.png",
  },
  {
    slug: "the-gorge-tours",
    name: "The Gorge Tours",
    category: "Website Design & Development",
    accent: "orange",
    pattern: "wave",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription: websiteDescription,
    image: "/projects/the-gorge-tours.png",
  },
  {
    slug: "unfinished-agenda-africa",
    name: "Unfinished Agenda Africa",
    category: "Digital Content & Marketing",
    accent: "navy",
    pattern: "steps",
    status: "preview",
    industry: "To be confirmed",
    servicesProvided: "To be confirmed",
    challenge: pending,
    approach: pending,
    solution: pending,
    outcome: "No verified outcome has been documented yet.",
    liveUrl: null,
    cardDescription:
      "A digital content and marketing project profile. Visuals and verified details will be added when available.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.slice(0, 3);
