"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/marquee";
import { MagneticButton } from "@/components/magnetic-button";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/eisakap",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eisa-kapadia/",
    icon: Linkedin,
  },
] as const;

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
      className="relative isolate min-h-[calc(100dvh-8rem)] scroll-mt-28 px-5 pb-8 pt-32 sm:min-h-[calc(100dvh-6.5rem)] sm:px-8 sm:pb-10 sm:pt-36"
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

      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-3xl space-y-10">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            
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
              nice to meet you, i'm eisa.
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
              i design and build digital products, systems, and software that are scalable, impactful, and efficient. 
              <br />
              <br />
              based in toronto.
              <br />
              <br />
              currently exploring manufacturing software and control systems
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
            <span className="relative inline-flex">
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500/35 via-fuchsia-500/35 to-amber-400/35 blur-2xl"
                  animate={{
                    opacity: [0.45, 0.9, 0.45],
                    scale: [0.92, 1.08, 0.92],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              <MagneticButton
                type="button"
                onClick={() => scrollToSection("contact")}
                whileHover={
                  reduce ? undefined : { scale: 1.04, y: -1 }
                }
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className={cn(
                  "relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold tracking-tight text-white shadow-[0_12px_40px_-14px_rgba(124,58,237,0.55)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]",
                  reduce
                    ? "border border-[#141414]/14 bg-white/35 font-medium text-[#141414] shadow-none backdrop-blur-md hover:bg-white/55"
                    : "border-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500 hover:shadow-[0_16px_48px_-12px_rgba(236,72,153,0.45)]",
                )}
              >
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-120%" }}
                    animate={{ x: "120%" }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                )}
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute -right-1 -top-1 size-16 rounded-full bg-cyan-300/35 blur-xl"
                    animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.85, 1.1, 0.85] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <span className="relative z-[1] flex items-center gap-2">
                  Contact Me
                  <motion.span
                    animate={
                      reduce
                        ? undefined
                        : { rotate: [0, 12, -8, 0], scale: [1, 1.12, 1] }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles
                      className="size-4 text-amber-100 drop-shadow-sm"
                      aria-hidden
                    />
                  </motion.span>
                </span>
              </MagneticButton>
            </span>
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
                Eisa Kapadia
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#6b6560]">
                {" "}
                <span className="font-mono text-[10px]"></span>
              </p>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#141414]/35">
            
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center gap-3 sm:mt-6"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border border-[#141414]/12 bg-white/50 px-4 text-xs font-medium tracking-tight text-[#141414] backdrop-blur-md transition",
              "hover:border-[#141414]/22 hover:bg-white/75 hover:shadow-[0_8px_28px_-16px_rgba(20,20,20,0.2)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]",
            )}
          >
            <Icon className="size-4 text-[#141414]/70" aria-hidden />
            {label}
          </Link>
        ))}
      </motion.div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-[#141414]/10 sm:mt-5">
        <Marquee items={MARQUEE_ITEMS} speed={25} />
      </div>
    </section>
  );
}
