"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { AnimatedSection, Stagger, StaggerItem } from "@/components/animated-section";
import { cn } from "@/lib/utils";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:you@example.com",
    icon: Mail,
    external: true,
  },
  {
    label: "Resume",
    href: "https://example.com/your-resume.pdf",
    icon: FileText,
    external: true,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/yourusername",
    icon: ArrowUpRight,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#141414]/10 bg-white/35 p-10 shadow-[0_30px_120px_-70px_rgba(20,20,20,0.65)] backdrop-blur-xl sm:p-14 lg:p-16">
          <Stagger className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <StaggerItem className="lg:col-span-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#141414]/40">
                Contact
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#141414] sm:text-5xl">
                Let&apos;s build something quiet and excellent.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[#6b6560]">
                Placeholder invitation — one paragraph about the collaborations
                you want, how to reach you, and what a great first message
                includes.
              </p>
            </StaggerItem>

            <StaggerItem className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {LINKS.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                      <Link
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={cn(
                          "group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-[#141414]/10 bg-[#141414]/[0.03] px-5 py-4 text-sm font-medium tracking-tight text-[#141414] transition-colors",
                          "hover:border-[#141414]/18 hover:bg-[#141414]/[0.05]",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]",
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex size-9 items-center justify-center rounded-xl border border-[#141414]/10 bg-white/50 text-[#141414]/70">
                            <Icon className="size-4" aria-hidden />
                          </span>
                          {label}
                        </span>
                        <ArrowUpRight
                          className="size-4 text-[#141414]/35 transition group-hover:text-[#141414]/70"
                          aria-hidden
                        />
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(280px circle at 80% 20%, rgba(214,206,196,0.55), transparent 65%)",
                          }}
                          aria-hidden
                        />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#141414]/35">
                Replace hrefs · add real resume file in /public
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </AnimatedSection>
  );
}

