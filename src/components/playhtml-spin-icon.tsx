"use client";

import { CanSpinElement } from "@playhtml/react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A tech-stack category icon that visitors can grab and spin. Powered by
 * playhtml's `can-spin`; the rotation is shared + persisted across visitors
 * (stable `id` + `shared`). Loaded browser-only since @playhtml/react touches
 * `document` at import time.
 */
export function PlayhtmlSpinIcon({
  id,
  Icon,
  wrapClassName,
  iconClassName,
}: {
  id: string;
  Icon: LucideIcon;
  wrapClassName?: string;
  iconClassName?: string;
}) {
  return (
    <CanSpinElement shared>
      <div
        id={id}
        title="spin me!"
        style={{ touchAction: "none" }}
        className={cn(
          "flex size-14 cursor-grab items-center justify-center rounded-2xl border shadow-[0_16px_50px_-40px_rgba(20,20,20,0.45)] backdrop-blur-md transition-transform active:cursor-grabbing",
          wrapClassName,
        )}
      >
        <Icon className={cn("size-6", iconClassName)} aria-hidden />
      </div>
    </CanSpinElement>
  );
}
