"use client";

import dynamic from "next/dynamic";

import { AmbientBackground } from "@/components/ambient-background";
import { Contact } from "@/components/contact";
// import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PageSkeleton } from "@/components/page-skeleton";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

// playhtml touches `document` at import time, so load browser-only.
const PlayhtmlMagnet = dynamic(
  () => import("@/components/playhtml-magnet").then((m) => m.PlayhtmlMagnet),
  { ssr: false },
);

export function PortfolioShell() {
  return (
    <PageSkeleton>
      <AmbientBackground />
      {/* playhtml draggable magnet — roams the whole page; position synced across visitors */}
      <PlayhtmlMagnet className="absolute left-4 top-[78vh] z-30 w-16 sm:left-8 sm:w-20" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />
          <Projects />
          <TechStack />
          {/* <Experience /> — Path section; uncomment when ready */}
          <Contact />
        </main>
        <Footer />
      </div>
    </PageSkeleton>
  );
}

