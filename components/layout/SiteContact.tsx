"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, site, telHref, whatsappMessageHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteContact({
  variant = "default",
  onNavigate,
}: {
  variant?: "default" | "mobile";
  onNavigate?: () => void;
}) {
  const items = [
    {
      label: "Email",
      value: site.email,
      href: mailtoHref,
      icon: Mail,
    },
    {
      label: "Phone",
      value: site.phoneDisplay,
      href: telHref,
      icon: Phone,
    },
    {
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: whatsappMessageHref(),
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Location",
      value: site.location,
      href: undefined,
      icon: MapPin,
    },
  ];

  const isMobile = variant === "mobile";

  return (
    <ul className={cn("grid gap-2", isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <span
              className={cn(
                "inline-flex size-9 shrink-0 items-center justify-center",
                isMobile ? "bg-paper/10 text-paper" : "bg-ink/5 text-forest",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block text-[0.5625rem] font-semibold uppercase tracking-[0.18em]",
                  isMobile ? "text-paper/40" : "text-muted",
                )}
              >
                {item.label}
              </span>
              <span
                className={cn(
                  "block break-words text-sm font-medium",
                  isMobile ? "text-paper" : "text-forest",
                )}
              >
                {item.value}
              </span>
            </span>
          </>
        );

        const shell = cn(
          "flex items-center gap-3 border p-3 transition-colors",
          isMobile
            ? "border-paper/12 hover:border-paper/30"
            : "border-ink/10 bg-paper-deep/30 hover:border-teal/40",
        );

        return (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={onNavigate}
                className={shell}
              >
                {content}
              </a>
            ) : (
              <div className={shell}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
