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

  return (
    <ul className={cn("grid gap-3", variant === "mobile" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy/6 text-navy">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.16em] text-muted">
                {item.label}
              </span>
              <span className="block break-words text-sm font-semibold text-navy">{item.value}</span>
            </span>
          </>
        );

        return (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border border-navy/8 bg-white p-3 transition-colors",
                  variant === "mobile"
                    ? "hover:border-white/30 hover:bg-white/5"
                    : "hover:border-teal/40 hover:bg-teal/5",
                )}
              >
                {content}
              </a>
            ) : (
              <div className="flex items-center gap-3 rounded-2xl border border-navy/8 bg-white p-3">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
