import { motion } from "framer-motion";
import React, { useState } from "react";

export interface WhatIBuildCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}

const borderColors = [
  "#22d3ee", // cyan
  "#38bdf8", // blue
  "#0ea5e9", // light blue
  "#22d3ee" // loop
];

const WhatIBuildCard: React.FC<WhatIBuildCardProps> = ({
  title,
  desc,
  tags,
  icon,
}) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="relative min-w-75 max-w-85 h-100 mx-auto cursor-pointer"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
        
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          zIndex: 1,
          background: "radial-gradient(circle at 50% -20%, rgba(34,211,238,0.4), transparent 60%)",
          filter: "blur(24px)",
        }}
        animate={{ x: [ -20, 20, -20 ] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl p-0"
        style={{
          background: "rgba(20,30,40,0.92)",
          boxSizing: 'border-box',
          zIndex: 3,
          boxShadow: flipped
            ? "0 16px 40px 0 #22d3ee66"
            : "0 4px 16px 0 #0008",
          transformStyle: "preserve-3d"
        }}
        animate={{
          rotateY: flipped ? 180 : 0,
          scale: flipped ? 1.045 : 1,
          y: flipped ? -6 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7, velocity: 0.2 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: 4,
          }}
        >
          <div className="mb-6 flex items-center justify-center">{icon}</div>
          <h3
            className="text-xl md:text-2xl font-extrabold text-center font-mono tracking-tight mb-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
            style={{ textShadow: '0 0 16px #22d3eecc', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: 5,
          }}
        >
          <h3
            className="text-xl md:text-2xl font-extrabold text-center font-mono tracking-tight mb-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
            style={{ textShadow: '0 0 16px #22d3eecc', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
          <p className="text-zinc-200 text-center mb-4 text-base font-medium max-w-md">{desc}</p>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-700 text-cyan-200 text-xs font-semibold shadow-sm"
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

export default WhatIBuildCard;
