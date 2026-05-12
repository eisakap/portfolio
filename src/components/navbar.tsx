"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const NAV_IDS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_IDS.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection([...SECTION_IDS]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="group relative font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]/80"
          aria-label="Back to top"
        >
          <span className="relative z-10">Portfolio</span>
          <span
            className="absolute -inset-x-2 -inset-y-1 -z-0 rounded-full bg-[#141414]/0 transition-colors group-hover:bg-[#141414]/5"
            aria-hidden
          />
        </Link>

        <nav
          className="flex max-w-[52vw] flex-1 items-center gap-1 overflow-x-auto rounded-full border border-[#141414]/10 bg-white/45 px-1.5 py-1.5 shadow-[0_1px_0_rgba(20,20,20,0.04)] backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none md:flex-none [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {NAV_IDS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={cn(
                  "relative shrink-0 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-[#141414]/55 transition-colors hover:text-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20",
                  isActive && "text-[#141414]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#141414]/6 shadow-[inset_0_0_0_1px_rgba(20,20,20,0.06)]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="rounded-full border border-[#141414]/12 bg-[#141414] px-4 py-2 text-xs font-medium tracking-tight text-[#f7f5f2] shadow-sm transition hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
        >
          Let&apos;s talk
        </button>
      </div>
    </header>
  );
}
