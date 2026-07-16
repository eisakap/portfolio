"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Server, Sparkles, Terminal } from "lucide-react";
import dynamic from "next/dynamic";

import {
  AnimatedSection,
  Stagger,
  StaggerItem,
} from "@/components/animated-section";
import { cn } from "@/lib/utils";

// playhtml touches `document` at import time, so load the spinnable icon
// browser-only. A same-size placeholder reserves its space until it loads.
const PlayhtmlSpinIcon = dynamic(
  () =>
    import("@/components/playhtml-spin-icon").then((m) => m.PlayhtmlSpinIcon),
  { ssr: false, loading: () => <div className="size-14 shrink-0" /> },
);

const CATEGORIES = [
  {
    name: "Frontend",
    blurb:
      "Building responsive interfaces, real-time experiences, and mobile-first applications.",
    icon: Layers,
    accent: {
      glow: "from-sky-400/25 via-indigo-400/12 to-transparent",
      border: "border-sky-500/15",
      borderHover: "hover:border-sky-500/30",
      pill: "border-sky-500/20 bg-sky-500/[0.08] text-sky-950/80",
      iconWrap: "border-sky-400/25 bg-gradient-to-br from-sky-100/90 to-indigo-100/60",
      iconClass: "text-sky-700",
    },
    items: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React",
      "JavaScript",
      "Angular",
    ],
  },
  {
    name: "Backend",
    blurb:
      "Designing APIs, scalable services, databases, and real-time systems.",
    icon: Server,
    accent: {
      glow: "from-emerald-400/22 via-teal-400/12 to-transparent",
      border: "border-emerald-500/14",
      borderHover: "hover:border-emerald-500/28",
      pill: "border-emerald-500/18 bg-emerald-500/[0.07] text-emerald-950/80",
      iconWrap:
        "border-emerald-400/25 bg-gradient-to-br from-emerald-100/90 to-teal-100/55",
      iconClass: "text-emerald-700",
    },
    items: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Socket.IO",
      "REST APIs",
      "Spring Boot",
    ],
  },
  {
    name: "Hardware",
    blurb:
      "Embedded systems, FPGA workflows, sensors, and low-level programming.",
    icon: Cpu,
    accent: {
      glow: "from-amber-400/28 via-orange-400/14 to-transparent",
      border: "border-amber-500/16",
      borderHover: "hover:border-amber-500/32",
      pill: "border-amber-600/20 bg-amber-500/[0.09] text-amber-950/85",
      iconWrap:
        "border-amber-400/30 bg-gradient-to-br from-amber-100/95 to-orange-100/50",
      iconClass: "text-amber-800",
    },
    items: [
      "C/C++",
      "ESP32",
      "ESP32-CAM",
      "VHDL",
      "SystemVerilog",
      "Assembly",
    ],
  },
  {
    name: "AI / ML",
    blurb:
      "Applied machine learning, edge inference, and intelligent system integration.",
    icon: Sparkles,
    accent: {
      glow: "from-violet-400/26 via-fuchsia-400/14 to-transparent",
      border: "border-violet-500/15",
      borderHover: "hover:border-violet-500/30",
      pill: "border-violet-500/20 bg-violet-500/[0.08] text-violet-950/82",
      iconWrap:
        "border-violet-400/28 bg-gradient-to-br from-violet-100/90 to-fuchsia-100/55",
      iconClass: "text-violet-700",
    },
    items: [
      "Python",
      "TensorFlow Lite",
      "OpenAI APIs",
      "RAG Pipelines",
    ],
  },
  {
    name: "Dev Tools",
    blurb:
      "Tooling, deployment pipelines, simulation environments, and workflow optimization.",
    icon: Terminal,
    accent: {
      glow: "from-slate-400/18 via-blue-400/12 to-transparent",
      border: "border-blue-500/12",
      borderHover: "hover:border-blue-500/26",
      pill: "border-blue-500/16 bg-blue-500/[0.06] text-slate-900/78",
      iconWrap:
        "border-blue-400/22 bg-gradient-to-br from-slate-100/95 to-blue-100/60",
      iconClass: "text-blue-800",
    },
    items: [
      "Git",
      "Docker",
      "Jenkins",
      "AWS",
      "ModelSim",
      "Quartus II",
      "Jira",
      ".NET",
    ],
  },
] as const;

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
            Tech Stack
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#141414] via-indigo-800 to-violet-800 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
            languages, frameworks, and tools I've worked with.
          </p>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border bg-white/45 p-6 shadow-[0_22px_70px_-48px_rgba(20,20,20,0.5)] backdrop-blur-md transition-shadow duration-500",
                  cat.accent.border,
                  cat.accent.borderHover,
                  "hover:shadow-[0_32px_90px_-52px_rgba(20,20,20,0.55)]",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                    cat.accent.glow,
                  )}
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-px rounded-[1.4rem] bg-gradient-to-b from-white/50 to-transparent opacity-60" aria-hidden />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#141414]">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b6560]">
                      {cat.blurb}
                    </p>
                  </div>
                  <PlayhtmlSpinIcon
                    id={`spin-${slugify(cat.name)}`}
                    Icon={cat.icon}
                    wrapClassName={cat.accent.iconWrap}
                    iconClassName={cat.accent.iconClass}
                  />
                </div>
                <ul className="relative mt-6 flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 group-hover:border-opacity-80",
                          cat.accent.pill,
                        )}
                      >
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

