"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
};

export function Marquee({
  items,
  className,
  speed = 28,
  direction = "left",
}: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const doubled = [...items, ...items];

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-center gap-x-10 gap-y-2 px-6 py-4",
          className,
        )}
        role="list"
        aria-label="Technologies"
      >
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#141414]/35"
            role="listitem"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden py-5", className)}
      role="presentation"
      aria-hidden
    >
      <motion.div
        className="flex w-max gap-14 pr-14"
        animate={{
          x:
            direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.28em] text-[#141414]/30"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

