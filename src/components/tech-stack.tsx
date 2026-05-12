"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Layers, Server, Sparkles, Terminal } from "lucide-react";

import {
  AnimatedSection,
  Stagger,
  StaggerItem,
} from "@/components/animated-section";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    name: "Frontend",
    blurb: "Placeholder — interfaces, motion, and design systems.",
    icon: Layers,
    items: ["React", "Next.js", "Tailwind", "Motion"],
  },
  {
    name: "Backend",
    blurb: "Placeholder — APIs, data modeling, and reliability.",
    icon: Server,
    items: ["Node", "Postgres", "REST", "Edge"],
  },
  {
    name: "Hardware",
    blurb: "Placeholder — boards, sensors, and embedded workflows.",
    icon: Cpu,
    items: ["C/C++", "RTOS", "PCB", "Instrumentation"],
  },
  {
    name: "AI / ML",
    blurb: "Placeholder — training, evaluation, and product integration.",
    icon: Sparkles,
    items: ["PyTorch", "NumPy", "Pipelines", "Evals"],
  },
  {
    name: "Dev Tools",
    blurb: "Placeholder — the small things that compound.",
    icon: Terminal,
    items: ["Git", "Docker", "CI", "Observability"],
  },
] as const;

function FloatingIcon({
  Icon,
  delay,
}: {
  Icon: (typeof CATEGORIES)[number]["icon"];
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex size-14 items-center justify-center rounded-2xl border border-[#141414]/10 bg-white/45 shadow-[0_16px_50px_-40px_rgba(20,20,20,0.55)] backdrop-blur-md"
      animate={
        reduce
          ? undefined
          : { y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }
      }
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon className="size-6 text-[#141414]/70" aria-hidden />
    </motion.div>
  );
}

export function TechStack() {
  return (
    <AnimatedSection
      id="stack"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40">
            Capabilities
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#141414] sm:text-5xl">
            Tools & territories
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
            Placeholder taxonomy — adjust categories to match how you actually
            work. Icons float; cards stay calm.
          </p>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <StaggerItem key={cat.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
                className={cn(
                  "relative h-full overflow-hidden rounded-3xl border border-[#141414]/10 bg-white/40 p-6 shadow-[0_22px_70px_-48px_rgba(20,20,20,0.55)] backdrop-blur-md transition-shadow duration-500",
                  "hover:border-[#141414]/16 hover:shadow-[0_32px_90px_-52px_rgba(20,20,20,0.6)]",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#141414]">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b6560]">
                      {cat.blurb}
                    </p>
                  </div>
                  <FloatingIcon Icon={cat.icon} delay={i * 0.35} />
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-full border border-[#141414]/10 bg-[#141414]/[0.035] px-3 py-1 text-xs font-medium text-[#141414]/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

