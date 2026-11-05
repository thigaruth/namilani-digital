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
  primary: "bg-coral text-ink hover:bg-coral-strong",
  teal: "bg-teal text-paper hover:bg-teal-strong",
  orange: "bg-orange text-paper hover:bg-orange-strong",
  navy: "bg-forest text-paper hover:bg-forest-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-forest",
  white: "bg-paper text-forest hover:bg-sand",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-[0.625rem]",
  md: "min-h-11 px-5 text-[0.6875rem]",
  lg: "min-h-13 px-7 text-xs",
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
            "size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
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
    "group inline-flex items-center justify-center gap-2 rounded-[2px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
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
