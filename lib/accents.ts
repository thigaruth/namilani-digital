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
    gradient: "from-coral/90 via-coral/50 to-orange/30",
    dot: "bg-coral",
    ring: "ring-coral/30",
  },
  teal: {
    solid: "bg-teal text-ink",
    soft: "bg-teal/10",
    text: "text-teal-ink",
    border: "border-teal/35",
    gradient: "from-teal/90 via-teal/45 to-teal/10",
    dot: "bg-teal",
    ring: "ring-teal/30",
  },
  orange: {
    solid: "bg-orange text-ink",
    soft: "bg-orange/10",
    text: "text-orange-ink",
    border: "border-orange/35",
    gradient: "from-orange/90 via-orange/45 to-coral/20",
    dot: "bg-orange",
    ring: "ring-orange/30",
  },
};
