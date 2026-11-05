import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
  size = "md",
}: {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const heights = {
    sm: "h-9",
    md: "h-11 sm:h-12",
    lg: "h-16 sm:h-20",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        heights[size],
        className,
      )}
    >
      <Image
        src="/logo/namilani-logo-transparent.png"
        alt="Namilani Digital"
        width={1536}
        height={1024}
        priority={priority}
        className="h-full w-auto object-contain"
        sizes="(max-width: 640px) 90px, 120px"
      />
    </span>
  );
}
