"use client";

import { AmbientBackground } from "@/components/ambient-background";
import { Contact } from "@/components/contact";
// import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PageSkeleton } from "@/components/page-skeleton";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export function PortfolioShell() {
  return (
    <PageSkeleton>
      <AmbientBackground />
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

