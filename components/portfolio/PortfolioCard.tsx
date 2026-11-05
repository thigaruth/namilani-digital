import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  project,
  className,
  tone = "light",
}: {
  project: Project;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <Link href={`/portfolio/${project.slug}`} className={cn("group block", className)}>
      <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <ProjectVisual project={project} />
      </div>

      <div
        className={cn(
          "mt-4 flex items-start justify-between gap-4 border-t pt-4",
          dark ? "border-paper/15" : "border-ink/12",
        )}
      >
        <div>
          <p
            className={cn(
              "text-[0.5625rem] font-semibold uppercase tracking-[0.18em]",
              dark ? "text-paper/45" : "text-muted",
            )}
          >
            {project.category}
          </p>
          <h3
            className={cn(
              "mt-1.5 font-display text-xl font-semibold leading-tight tracking-[-0.01em] transition-colors sm:text-[1.35rem]",
              dark ? "text-paper group-hover:text-coral" : "text-forest group-hover:text-coral-ink",
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              "mt-2 line-clamp-2 text-sm leading-relaxed",
              dark ? "text-paper/50" : "text-muted",
            )}
          >
            {project.cardDescription}
          </p>
        </div>
        <span
          className={cn(
            "mt-1 inline-flex size-9 shrink-0 items-center justify-center border transition-colors",
            dark
              ? "border-paper/25 text-paper/60 group-hover:border-coral group-hover:bg-coral group-hover:text-ink"
              : "border-ink/15 text-forest/60 group-hover:border-coral group-hover:bg-coral group-hover:text-ink",
          )}
        >
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
