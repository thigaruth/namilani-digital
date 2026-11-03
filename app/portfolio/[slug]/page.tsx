import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getProject, projects } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found | Namilani Digital",
      description: "The project you are looking for could not be found.",
      path: `/portfolio/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${project.name} | Our Work`,
    description: `${project.name} project profile from Namilani Digital. ${project.cardDescription}`,
    path: `/portfolio/${project.slug}`,
  });
}

const caseSections = [
  { key: "challenge", label: "Challenge", number: "01" },
  { key: "approach", label: "Our Approach", number: "02" },
  { key: "solution", label: "Solution", number: "03" },
  { key: "outcome", label: "Verified Outcome", number: "04" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.cardDescription}
        breadcrumbs={[
          { label: "Our Work", href: "/portfolio" },
          { label: project.name },
        ]}
        image="/portfolio-hero/portfolio.jpg"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="light">Preview project</Badge>
          <Badge tone="light">{project.industry}</Badge>
        </div>
      </PageHero>

      <section className="bg-white pb-20 pt-10 md:pb-28">
        <Container>
          <AnimatedSection>
            <div className="-mt-20 overflow-hidden rounded-[2rem] border-8 border-white shadow-lift sm:-mt-24 md:rounded-[2.5rem]">
              <ProjectVisual project={project} large />
            </div>
          </AnimatedSection>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-orange/25 bg-orange/8 p-4 text-xs leading-relaxed text-navy/70">
            <Info className="mt-0.5 size-4 shrink-0 text-orange-ink" aria-hidden="true" />
            <p>
              This is a placeholder project profile. Verified project details, screenshots, client
              approval, and outcome information have not yet been supplied. Nothing on this page
              should be interpreted as a confirmed project result.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <AnimatedSection>
              <Eyebrow>Project overview</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.04em] text-navy">
                The Details
              </h2>
              <dl className="mt-7 space-y-0">
                {[
                  { label: "Project", value: project.name },
                  { label: "Category", value: project.category },
                  { label: "Industry", value: project.industry },
                  { label: "Services provided", value: project.servicesProvided },
                  { label: "Status", value: "Preview — details pending verification" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-navy/8 py-4">
                    <dt className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-navy">{item.value}</dd>
                  </div>
                ))}
                <div className="py-4">
                  <dt className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-muted">
                    Live project
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-navy">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-teal-ink underline underline-offset-4"
                      >
                        Visit project <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      "Not available yet"
                    )}
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <Button href="/portfolio" variant="outline" size="md">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Back to Our Work
                </Button>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <p className="text-base leading-relaxed text-muted">
                  This page is structured to hold a complete, verified case study. Once the project
                  details are confirmed, each section below will describe the actual challenge,
                  approach, solution, and outcome.
                </p>
              </AnimatedSection>

              <div className="mt-8 border-t border-navy/8">
                {caseSections.map((section) => (
                  <AnimatedSection key={section.key}>
                    <div className="grid gap-4 border-b border-navy/8 py-7 sm:grid-cols-[3rem_1fr]">
                      <span className="font-display text-xs font-bold tracking-[0.16em] text-navy/25">
                        {section.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-navy">
                          {section.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {project[section.key]}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>More work</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.035em] text-navy sm:text-3xl">
                  Continue exploring.
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-navy/60 transition-colors hover:text-navy"
              >
                View all projects <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PortfolioCard key={item.slug} project={item} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="Your project next"
        title="Have a Similar Project in Mind?"
        description="Tell us what you're planning. We'll help you shape a practical digital project around your goals, audience, and budget."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
