import { motion } from "framer-motion";
import React, { useState } from "react";

export interface WhatIBuildCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  index?: number;
}

const WhatIBuildCard: React.FC<WhatIBuildCardProps> = ({
  title,
  desc,
  tags,
  icon,
  index = 0,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative min-w-75 max-w-85 h-100 mx-auto cursor-pointer group"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      {/* glow halo */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 65%)",
          filter: "blur(22px)",
        }}
        animate={{ opacity: flipped ? 0.9 : 0.35 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          transformStyle: "preserve-3d",
          zIndex: 3,
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7 }}
      >
        {/* ---------- FRONT ---------- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-8 overflow-hidden cyber-panel"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: 4,
          }}
        >
          {/* corner brackets */}
          <Corners />
          {/* top accent line */}
          <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />

          {/* index tag */}
          <span className="absolute top-4 left-4 font-mono text-xs text-[var(--text-faint)] tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute top-4 right-4 font-mono text-[10px] text-[var(--accent)]/60 tracking-widest">
            //MODULE
          </span>

          <div className="mb-6 flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--line-strong)] bg-black/30">
              <span className="absolute inset-0 rounded-2xl bg-[var(--accent)]/10 blur-md" />
              <span className="relative drop-shadow-neon">{icon}</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-center font-mono tracking-tight text-gradient text-glow">
            {title}
          </h3>

          <span className="mt-5 font-mono text-[11px] tracking-widest text-[var(--text-faint)] opacity-0 group-hover:opacity-100 transition-opacity">
            ▸ hover to decrypt
          </span>
        </div>

        {/* ---------- BACK ---------- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-7 overflow-hidden cyber-panel"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: 5,
          }}
        >
          <Corners />
          <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent-alt)] to-transparent opacity-70" />

          <h3 className="text-lg md:text-xl font-extrabold text-center font-mono tracking-tight text-gradient mb-3">
            {title}
          </h3>
          <p className="text-[var(--text-dim)] text-center mb-5 text-sm leading-relaxed font-sans max-w-md">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[var(--accent)]/10 border border-[var(--line-strong)] text-[var(--accent)] text-xs font-mono font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** Decorative HUD corner brackets. */
function Corners() {
  const base =
    "absolute w-4 h-4 border-[var(--accent)] pointer-events-none opacity-80";
  return (
    <>
      <span className={`${base} top-2 left-2 border-t-2 border-l-2`} />
      <span className={`${base} top-2 right-2 border-t-2 border-r-2`} />
      <span className={`${base} bottom-2 left-2 border-b-2 border-l-2`} />
      <span className={`${base} bottom-2 right-2 border-b-2 border-r-2`} />
    </>
  );
}

export default WhatIBuildCard;
