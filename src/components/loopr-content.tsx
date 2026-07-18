"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  FolderOpen,
  Github,
  Repeat,
  Snowflake,
  Webcam,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { cn } from "@/lib/utils";

const DOWNLOAD_URL =
  "https://github.com/eisakap/loopr-releases/releases/latest/download/Loopr-Setup.exe";
const RELEASES_URL = "https://github.com/eisakap/loopr-releases";

const FEATURES = [
  {
    icon: Snowflake,
    title: "Immutable freeze frames",
    blurb: "Lock the current frame and hold it steady until you decide to move on.",
  },
  {
    icon: Repeat,
    title: "Recorded loops",
    blurb: "Capture a clip and loop it seamlessly on the output.",
  },
  {
    icon: FolderOpen,
    title: "Imported media",
    blurb: "Drop in your own video files and route them to the camera.",
  },
] as const;

const CORAL = "from-[#ff8163] to-[#ed3a29]";

// playhtml touches `document` at import time, so load the shared download
// counter browser-only. The fallback is a plain working download button so
// downloads always work even before playhtml has loaded.
const LooprDownloadButton = dynamic(
  () =>
    import("@/components/playhtml-download-counter").then(
      (m) => m.LooprDownload,
    ),
  {
    ssr: false,
    loading: () => (
      <a
        href={DOWNLOAD_URL}
        className={cn(
          "group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-br px-8 text-base font-semibold tracking-tight text-white shadow-[0_18px_50px_-16px_rgba(237,58,41,0.6)] transition active:scale-[0.98]",
          CORAL,
        )}
      >
        <Download className="size-5" aria-hidden />
        Download for Windows
      </a>
    ),
  },
);

export function LooprContent() {
  const reduce = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-24 pt-8 sm:px-8">
      {/* warm coral glow, echoing the app icon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(255,126,95,0.20), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20,20,20,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20,20,20,0.05) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#141414]/12 bg-white/50 px-4 py-2 text-xs font-medium tracking-tight text-[#141414]/70 backdrop-blur-md transition hover:border-[#141414]/22 hover:bg-white/75 hover:text-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Eisa Kapadia
        </Link>

        {/* hero */}
        <section className="mt-14 flex flex-col items-center text-center sm:mt-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-28 sm:w-32"
          >
            <motion.img
              src="/loopr_3_filmloop.svg"
              alt="Loopr"
              draggable={false}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-[26%] shadow-[0_24px_70px_-30px_rgba(244,81,30,0.5)]"
            />
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-[family-name:var(--font-display)] text-6xl font-semibold tracking-tight text-[#141414] sm:text-7xl"
          >
            Loopr
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b6560] sm:text-xl"
          >
            Loopr publishes live camera video, freeze frames, recorded loops,
            imported media, still images, and privacy cards through one stable
            virtual camera, in any app that uses your webcam.
          </motion.p>

          {/* download + shared counter */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-10"
          >
            <LooprDownloadButton href={DOWNLOAD_URL} />
          </motion.div>
        </section>

        {/* virtual-camera highlight */}
        <section className="mt-20 sm:mt-28">
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-[#ed3a29]/15 bg-gradient-to-br from-[#fdeee3]/80 to-white/50 p-8 backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-10">
            <span
              className={cn(
                "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm",
                CORAL,
              )}
            >
              <Webcam className="size-6" aria-hidden />
            </span>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#141414]">
                One stable virtual camera
              </h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#6b6560]">
                Loopr exposes a single virtual camera device, so whatever you
                choose to publish shows up instantly in Zoom, Teams, OBS,
                Discord, or any app that reads a webcam. No reconnecting, no
                fiddling.
              </p>
            </div>
          </div>
        </section>

        {/* features */}
        <section className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, blurb }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[#141414]/10 bg-white/45 p-6 shadow-[0_22px_70px_-48px_rgba(20,20,20,0.5)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_32px_90px_-52px_rgba(237,58,41,0.4)]"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff8163]/20 to-transparent opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className={cn(
                    "relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm",
                    CORAL,
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="relative mt-5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#141414]">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#6b6560]">
                  {blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="mt-24 flex flex-col items-center gap-4 border-t border-[#141414]/10 pt-10 text-center">
          {/* live shared download counter renders here via portal */}
          <div id="loopr-count-slot" className="min-h-5" />
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#141414]/14 bg-white/50 px-5 py-2.5 text-sm font-medium tracking-tight text-[#141414] backdrop-blur-md transition hover:border-[#ed3a29]/35 hover:bg-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3a29]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f2]"
          >
            <Github className="size-4" aria-hidden />
            Stay up to date with all future releases
          </a>
          <p className="text-xs text-[#141414]/45">
            © {new Date().getFullYear()} Eisa Kapadia
          </p>
        </footer>
      </div>
    </main>
  );
}
