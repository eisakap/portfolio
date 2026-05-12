"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function PageSkeleton({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!ready && (
          <motion.div
            key="shell"
            className={cn(
              "fixed inset-0 z-[100] flex items-center justify-center bg-[#f7f5f2]",
            )}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-busy="true"
            aria-label="Loading portfolio"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="h-1 w-40 overflow-hidden rounded-full bg-[#141414]/10"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="h-full w-1/3 rounded-full bg-[#141414]/35"
                  animate={{ x: [0, 120, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#141414]/35">
                Loading
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}

