"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { projectCategories, projects, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by category">
        {projectCategories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200",
                selected
                  ? "border-navy bg-navy text-white"
                  : "border-navy/12 bg-white text-navy/60 hover:border-navy/30 hover:text-navy",
              )}
            >
              {category}
              <span className={cn("ml-2 text-[0.6rem]", selected ? "text-white/50" : "text-navy/30")}>
                {category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category).length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {filtered.map((project, index) => (
            <m.div
              key={project.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard project={project} />
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">
          No projects in this category yet. Please check back soon.
        </p>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-muted">
        All projects are currently shown with temporary placeholder visuals. Verified screenshots,
        project details, and live links will be added as they are supplied and approved.
      </p>
    </div>
  );
}
