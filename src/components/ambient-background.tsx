"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 28, damping: 24 });
  const y = useSpring(my, { stiffness: 28, damping: 24 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) * 0.04);
      my.set((e.clientY - cy) * 0.04);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f7f5f2]"
    >
      <motion.div
        style={{ x, y }}
        className="absolute -left-[18%] top-[-22%] h-[58vmin] w-[58vmin] rounded-full bg-[#e8e4dc]/90 blur-[90px]"
      />
      <motion.div
        style={{ x, y }}
        className="absolute -right-[12%] bottom-[-18%] h-[52vmin] w-[52vmin] rounded-full bg-[#ddd6cc]/85 blur-[100px]"
      />
      <div className="absolute left-1/2 top-1/3 h-[42vmin] w-[42vmin] -translate-x-1/2 rounded-full bg-[#f0ebe3]/80 blur-[80px]" />
    </div>
  );
}

