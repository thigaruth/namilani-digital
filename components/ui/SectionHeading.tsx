import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "max-w-3xl font-display text-[clamp(1.95rem,4vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.015em]",
          tone === "dark" ? "text-paper" : "text-forest",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-[1.0625rem]",
            tone === "dark" ? "text-paper/60" : "text-muted",
          )}
        >
          {description}
        </div>
      ) : null}
      {children}
    </div>
  );
}
