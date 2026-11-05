import type { ServiceAccent } from "@/lib/services";

export const accentStyles: Record<
  ServiceAccent,
  {
    solid: string;
    soft: string;
    text: string;
    border: string;
    gradient: string;
    dot: string;
    ring: string;
  }
> = {
  coral: {
    solid: "bg-coral text-ink",
    soft: "bg-coral/10",
    text: "text-coral-ink",
    border: "border-coral/35",
    gradient: "from-coral/85 via-coral/45 to-clay/25",
    dot: "bg-coral",
    ring: "ring-coral/25",
  },
  teal: {
    solid: "bg-teal text-paper",
    soft: "bg-teal/10",
    text: "text-teal-ink",
    border: "border-teal/35",
    gradient: "from-teal/85 via-teal/45 to-forest/25",
    dot: "bg-teal",
    ring: "ring-teal/25",
  },
  orange: {
    solid: "bg-orange text-paper",
    soft: "bg-orange/12",
    text: "text-orange-ink",
    border: "border-orange/35",
    gradient: "from-orange/85 via-orange/45 to-coral/20",
    dot: "bg-orange",
    ring: "ring-orange/25",
  },
};
