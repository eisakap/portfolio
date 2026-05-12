"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = ComponentPropsWithoutRef<typeof motion.button> & {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 0.22,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

