import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: absoluteUrl(item.href) } : {}),
          })),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-paper/45">
          {all.map((item, index) => {
            const last = index === all.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {item.href && !last ? (
                  <Link href={item.href} className="transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                ) : (
                  <span className={last ? "text-paper/80" : undefined} aria-current={last ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
                {!last ? <ChevronRight className="size-3" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
