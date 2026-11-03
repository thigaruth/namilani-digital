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
    sm: "h-10",
    md: "h-12 sm:h-14",
    lg: "h-16 sm:h-20",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-navy/5",
        heights[size],
        className,
      )}
    >
      <Image
        src="/logo/namilani-logo.png"
        alt="Namilani Digital"
        width={1536}
        height={1024}
        priority={priority}
        className="h-full w-auto rounded-lg object-contain"
        sizes="(max-width: 640px) 90px, 120px"
      />
    </span>
  );
}
