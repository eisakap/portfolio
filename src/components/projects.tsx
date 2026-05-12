"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatedSection,
  Stagger,
  StaggerItem,
} from "@/components/animated-section";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Project One — Placeholder",
    description:
      "A cinematic case study placeholder. Describe the problem, your constraints, and the outcome in two sentences.",
    tags: ["Next.js", "TypeScript", "Motion", "Design"],
    href: "#",
    repo: "https://github.com/yourusername",
    image: "/placeholder-project.svg",
  },
  {
    title: "Project Two — Placeholder",
    description:
      "Another flagship build — hardware, ML, or full-stack. Keep the tone editorial and confident.",
    tags: ["Python", "CUDA", "Systems", "Research"],
    href: "#",
    repo: "https://github.com/yourusername",
    image: "/placeholder-project.svg",
  },
  {
    title: "Project Three — Placeholder",
    description:
      "Product-minded engineering: prototypes, polish, and performance budgets that feel invisible.",
    tags: ["React", "Node", "Postgres", "AWS"],
    href: "#",
    repo: "https://github.com/yourusername",
    image: "/placeholder-project.svg",
  },
  {
    title: "Project Four — Placeholder",
    description:
      "A tools or platform story — something you would proudly show in a design-forward portfolio.",
    tags: ["Rust", "CLI", "DX", "Open Source"],
    href: "#",
    repo: "https://github.com/yourusername",
    image: "/placeholder-project.svg",
  },
] as const;

function ProjectCard({
  project,
  reverse,
  index,
}: {
  project: (typeof PROJECTS)[number];
  reverse: boolean;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <StaggerItem>
      <motion.article
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-[#141414]/10 bg-white/35 shadow-[0_28px_100px_-60px_rgba(20,20,20,0.55)] backdrop-blur-xl transition-[box-shadow,border-color] duration-500",
          "hover:border-[#141414]/16 hover:shadow-[0_40px_120px_-55px_rgba(20,20,20,0.6)]",
        )}
        whileHover={
          reduce
            ? undefined
            : {
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 26 },
              }
        }
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          el.style.setProperty(
            "--gx",
            `${((e.clientX - r.left) / r.width) * 100}%`,
          );
          el.style.setProperty(
            "--gy",
            `${((e.clientY - r.top) / r.height) * 100}%`,
          );
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(520px circle at var(--gx,50%) var(--gy,45%), rgba(214,206,196,0.45), transparent 60%)",
          }}
        />
        <div
          className={cn(
            "relative grid gap-0 lg:grid-cols-2",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
            <motion.div
              className="relative h-full w-full"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                unoptimized
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#141414]/10 via-transparent to-transparent opacity-60 mix-blend-multiply" />
          </div>

          <div className="relative flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#141414]/10 bg-[#141414]/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#141414]/55"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#141414] sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-[#6b6560]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={project.href}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#141414] px-6 text-sm font-medium tracking-tight text-[#f7f5f2] shadow-sm transition hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
              >
                View Project
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#141414]/14 bg-white/40 px-6 text-sm font-medium tracking-tight text-[#141414] backdrop-blur-md transition hover:border-[#141414]/22 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
              >
                <Github className="size-4" aria-hidden />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40">
            Selected work
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#141414] sm:text-5xl lg:text-6xl">
            Featured projects
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
            Placeholder copy — this section is intentionally large. Swap
            imagery, titles, and links when your case studies are ready.
          </p>
        </div>

        <Stagger className="mt-16 flex flex-col gap-14 lg:mt-20 lg:gap-20">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={i % 2 === 1}
              index={i}
            />
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

