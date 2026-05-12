"use client";

import {
  AnimatedSection,
  Stagger,
  StaggerItem,
} from "@/components/animated-section";

const ENTRIES = [
  {
    period: "20XX — Present",
    title: "Role Title — Placeholder Org",
    body: "What you shipped, how you collaborated, and the metric or feeling you improved.",
  },
  {
    period: "20XX — 20XX",
    title: "Earlier Role — Placeholder",
    body: "A second chapter: constraints, stack, and a crisp outcome statement.",
  },
  {
    period: "20XX — 20XX",
    title: "Foundational Experience",
    body: "Internship, research, or early project that shaped how you build today.",
  },
] as const;

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40">
            Experience
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#141414] sm:text-5xl">
            A vertical through-line
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
            Placeholder timeline — swap titles, dates, and copy. Motion stays
            restrained so the typography can breathe.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-[#141414]/0 via-[#141414]/15 to-[#141414]/0 sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden
          />
          <Stagger className="relative flex flex-col gap-12 lg:gap-16">
            {ENTRIES.map((entry, i) => (
              <StaggerItem key={entry.title}>
                <div className="relative grid gap-6 sm:grid-cols-2 sm:gap-10">
                  <div
                    className={`relative pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:order-2 sm:pl-16 sm:text-left"}`}
                  >
                    <span
                      className="absolute left-0 top-1.5 flex size-[22px] items-center justify-center rounded-full border border-[#141414]/12 bg-[#f7f5f2] shadow-[0_0_0_6px_rgba(247,245,242,0.85)] sm:left-1/2 sm:-translate-x-1/2"
                      aria-hidden
                    >
                      <span className="size-2 rounded-full bg-[#141414]/35" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#141414]/40">
                      {entry.period}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#141414]">
                      {entry.title}
                    </h3>
                  </div>
                  <div
                    className={
                      i % 2 === 0
                        ? "sm:pl-16"
                        : "sm:order-1 sm:pr-16 sm:text-right"
                    }
                  >
                    <p className="text-base leading-relaxed text-[#6b6560]">
                      {entry.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </AnimatedSection>
  );
}

