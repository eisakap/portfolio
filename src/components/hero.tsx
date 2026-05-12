"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Marquee } from "@/components/marquee";
import { MagneticButton } from "@/components/magnetic-button";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const MARQUEE_ITEMS = [
  "C/C++",
  "Java",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "VHDL",
  "Matlab",
  "System Verilog",
  "Assembly",
  "Javascript",
  "TypeScript",
  "C#",
  "Springboot",
  "FastAPI",
  "Next.js",
  "Node.js",
  "Socket.io",
  "React JS",
  "Angular",
];

function FloatingOrbs() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#141414]/15"
          style={{
            left: `${12 + i * 15}%`,
            top: `${22 + (i % 3) * 18}%`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{
            duration: 5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
          aria-hidden
        />
      ))}
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100dvh] scroll-mt-28 px-5 pb-16 pt-32 sm:px-8 sm:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20,20,20,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20,20,20,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
        }}
        aria-hidden
      />
      <FloatingOrbs />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-3xl space-y-10">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Creative engineer · placeholder location
          </motion.p>

          <div className="space-y-6">
            <motion.h1
              className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-[#141414]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Computer Engineer building thoughtful software experiences.
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-[#6b6560] sm:text-xl"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Placeholder subheading — a calm, precise line about your craft,
              curiosity, and the kind of problems you like to solve.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MagneticButton
              type="button"
              onClick={() => scrollToSection("projects")}
              className={cn(
                "inline-flex h-12 items-center gap-2 rounded-full bg-[#141414] px-7 text-sm font-medium tracking-tight text-[#f7f5f2] shadow-sm transition-colors hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]",
              )}
            >
              View Projects
              <ArrowUpRight className="size-4 opacity-90" aria-hidden />
            </MagneticButton>
            <MagneticButton
              type="button"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "inline-flex h-12 items-center gap-2 rounded-full border border-[#141414]/14 bg-white/35 px-7 text-sm font-medium tracking-tight text-[#141414] backdrop-blur-md transition hover:border-[#141414]/25 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]",
              )}
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full max-w-md shrink-0 lg:max-w-sm"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#141414]/10 bg-gradient-to-br from-[#ebe6df] via-[#f3efe8] to-[#dfd8cf] shadow-[0_24px_80px_-40px_rgba(20,20,20,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.65),transparent_55%)]" />
            <Image
              src="/placeholder-headshot.svg"
              alt="Portrait placeholder — replace with your headshot"
              fill
              className="object-cover mix-blend-multiply opacity-90"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
              unoptimized
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/50 bg-white/35 p-4 text-sm text-[#141414]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md">
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[#141414]">
                Your Name
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#6b6560]">
                Headshot placeholder — swap image in{" "}
                <span className="font-mono text-[10px]">/public</span>
              </p>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#141414]/35">
            Editorial frame · soft glass
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-[#141414]/10">
        <Marquee items={MARQUEE_ITEMS} speed={38} />
      </div>
    </section>
  );
}
