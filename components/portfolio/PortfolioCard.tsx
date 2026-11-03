import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group block rounded-[1.75rem] border border-navy/8 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-lift",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.35rem]">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.025]">
          <ProjectVisual project={project} />
        </div>
      </div>

      <div className="px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-muted">
              {project.category}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.03em] text-navy sm:text-[1.35rem]">
              {project.name}
            </h3>
          </div>
          <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy/50 transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-ink">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.cardDescription}
        </p>
      </div>
    </Link>
  );
}
