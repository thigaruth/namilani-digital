import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "teal"
  | "orange"
  | "navy"
  | "outline"
  | "outline-light"
  | "white"
  | "ghost";

type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-ink hover:bg-coral-strong shadow-[0_14px_35px_-18px_rgba(249,126,145,0.9)]",
  teal:
    "bg-teal text-ink hover:bg-teal-strong shadow-[0_14px_35px_-18px_rgba(23,177,154,0.9)]",
  orange:
    "bg-orange text-ink hover:bg-orange-strong shadow-[0_14px_35px_-18px_rgba(255,110,66,0.9)]",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline:
    "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
  "outline-light":
    "border border-white/25 bg-white/5 text-white hover:border-white hover:bg-white hover:text-navy",
  white: "bg-white text-navy hover:bg-mist",
  ghost: "bg-transparent text-navy hover:bg-navy/5",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-[0.8125rem]",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-7 text-[0.9375rem]",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  arrowClassName?: string;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  onClick?: () => void;
};

function content(children: ReactNode, arrow: boolean, arrowClassName?: string) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            arrowClassName,
          )}
          strokeWidth={2}
        />
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps | LinkProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    arrow = false,
    arrowClassName,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const isExternal =
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={props.href}
          target={props.target}
          rel={props.rel ?? (props.target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classes}
        >
          {content(children, arrow, arrowClassName)}
        </a>
      );
    }

    return (
      <Link
        href={props.href}
        prefetch={props.prefetch}
        onClick={props.onClick}
        className={classes}
      >
        {content(children, arrow, arrowClassName)}
      </Link>
    );
  }

  const rest = { ...(props as ButtonProps) } as Record<string, unknown>;
  delete rest.children;
  delete rest.variant;
  delete rest.size;
  delete rest.className;
  delete rest.arrow;
  delete rest.arrowClassName;

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content(children, arrow, arrowClassName)}
    </button>
  );
}
