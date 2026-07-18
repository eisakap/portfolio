import type { Metadata } from "next";

import { LooprContent } from "@/components/loopr-content";

export const metadata: Metadata = {
  title: "Loopr",
  description:
    "Loopr is a Windows 11 desktop app that publishes live camera video, freeze frames, recorded loops, imported media, still images, and privacy cards through a stable virtual camera.",
};

export default function LooprPage() {
  return <LooprContent />;
}
