"use client";

import { motion, useReducedMotion } from "framer-motion";

const SCROLL_TEXT =
  "Designed with restraint · Built with taste · Placeholder signature line · ";

export function Footer() {
  const reduce = useReducedMotion();
  const doubled = SCROLL_TEXT.repeat(4);

  return (
    <footer className="border-t border-[#141414]/10 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[#6b6560]">
            <span className="font-[family-name:var(--font-display)] text-base font-semibold text-[#141414]">
              Portfolio
            </span>
            <span className="mt-2 block">
              © {new Date().getFullYear()} Your Name. Crafted as a calm,
              typography-first presence.
            </span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#141414]/35">
            Placeholder footer note
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden border-t border-[#141414]/10 pt-8">
          {reduce ? (
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#141414]/30">
              {SCROLL_TEXT}
            </p>
          ) : (
            <motion.div
              className="flex w-max gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 42, ease: "linear", repeat: Infinity }}
              aria-hidden
            >
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.35em] text-[#141414]/28">
                {doubled}
              </span>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.35em] text-[#141414]/28">
                {doubled}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  );
}
