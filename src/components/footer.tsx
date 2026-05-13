"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { scrollToSection } from "@/lib/smooth-scroll";

const SCROLL_TEXT =
  " · ";

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
              © {new Date().getFullYear()} Eisa Kapadia
            </span>
          </p>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() =>
              scrollToSection("hero", {
                behavior: reduce ? "auto" : "smooth",
                block: "start",
              })
            }
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#141414]/12 bg-white/50 px-4 py-2.5 text-[#141414] backdrop-blur-md transition hover:border-[#141414]/22 hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
          >
            <ArrowUp className="size-3.5 shrink-0 opacity-70" aria-hidden />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]">
              Back to top
            </span>
          </button>
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
