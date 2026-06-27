"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  "Initializing secure shell…",
  "Loading cryptographic modules…",
  "Establishing encrypted tunnel…",
  "Running threat assessment…",
  "Mounting portfolio interface…",
  "Access granted ✓",
];

/**
 * Fullscreen boot sequence shown once per page load / refresh.
 * Types through a few "system" lines with a progress bar, then fades out.
 * Honors prefers-reduced-motion by finishing instantly.
 */
export default function BootLoader() {
  const [done, setDone] = useState(false);
  const [line, setLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }

    // lock scroll while booting
    document.body.style.overflow = "hidden";

    const lineTimer = setInterval(() => {
      setLine((l) => Math.min(l + 1, STEPS.length - 1));
    }, 380);

    const progTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 14 + 6, 100));
    }, 160);

    const finish = setTimeout(() => {
      setProgress(100);
      setDone(true);
    }, 2500);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
      clearTimeout(finish);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#030712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            className="relative w-[min(90vw,520px)] font-mono"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-gradient text-glow tracking-tight">
                USMAN SHEHZAD
              </div>
              <div className="mt-1 text-xs tracking-[0.3em] text-cyan-300/70">
                SECURITY • ENGINEERING
              </div>
            </div>

            {/* log lines */}
            <div className="cyber-panel px-5 py-4 text-sm">
              {STEPS.slice(0, line + 1).map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-2 ${
                    i === STEPS.length - 1 ? "text-emerald-300" : "text-cyan-200/80"
                  }`}
                >
                  <span className="text-emerald-400/70">$</span>
                  {s}
                </motion.div>
              ))}

              {/* progress bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-cyan-900/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
              <div className="mt-2 text-right text-xs text-cyan-300/70">
                {Math.floor(progress)}%
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
