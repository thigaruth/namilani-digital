"use client";

import { m, useReducedMotion } from "motion/react";

export function TextReveal({
  text,
  className,
  delay = 0,
  mode = "load",
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  mode?: "load" | "view";
  once?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.06em] align-bottom"
        >
          <m.span
            className="inline-block"
            initial={{ y: "115%" }}
            {...(mode === "load"
              ? { animate: { y: 0 } }
              : {
                  whileInView: { y: 0 },
                  viewport: { once, amount: 0.4 },
                })}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </m.span>
        </span>
      ))}
    </span>
  );
}
