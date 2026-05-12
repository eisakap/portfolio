"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  AnimatedSection,
  Stagger,
  StaggerItem,
} from "@/components/animated-section";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    title: "Internships",
    body: "Placeholder — Company A, Company B. Summarize impact in one calm line.",
    meta: "2023 — Present",
  },
  {
    title: "Leadership",
    body: "Placeholder — club president, team lead, or program organizer.",
    meta: "Roles",
  },
  {
    title: "Clubs",
    body: "Placeholder — robotics, design collective, competitive programming.",
    meta: "Community",
  },
  {
    title: "Research",
    body: "Placeholder — lab, publication, or independent study focus area.",
    meta: "Focus",
  },
] as const;

export function About() {
  const reduce = useReducedMotion();

  return (
    <AnimatedSection
      id="about"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Stagger className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <StaggerItem className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40">
              About
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#141414] sm:text-5xl">
              Quietly obsessive about craft.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#6b6560]">
              Placeholder bio — two or three sentences about how you think, what
              you optimize for, and the through-line between engineering and
              design. Keep it human, specific, and calm.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6b6560]/90">
              Second short paragraph optional: tools you reach for, what you are
              learning next, or a principle you design around.
            </p>
          </StaggerItem>

          <StaggerItem className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {HIGHLIGHTS.map((card) => (
              <motion.article
                key={card.title}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        },
                      }
                }
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width) * 100;
                  const y = ((e.clientY - r.top) / r.height) * 100;
                  e.currentTarget.style.setProperty("--mx", `${x}%`);
                  e.currentTarget.style.setProperty("--my", `${y}%`);
                }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-[#141414]/10 bg-white/40 p-6 shadow-[0_18px_60px_-44px_rgba(20,20,20,0.45)] backdrop-blur-md transition-[box-shadow] duration-500",
                  "hover:border-[#141414]/18 hover:shadow-[0_28px_90px_-50px_rgba(20,20,20,0.55),0_0_0_1px_rgba(20,20,20,0.04)]",
                )}
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at var(--mx,50%) var(--my,40%), rgba(214,206,196,0.55), transparent 55%)",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#141414]/35">
                    {card.meta}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#141414]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b6560]">
                    {card.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

