import { motion } from "framer-motion";
import React from "react";

interface EducationEntry {
  type: string;
  title: string;
  subtitle?: string;
  years: string;
  cgpa?: string;
  highlight?: string;
  details: string;
  icon: React.ReactNode;
}

const educationData: EducationEntry[] = [
  {
    type: "BACHELOR OF SCIENCE",
    title: "Software Engineering",
    subtitle: undefined,
    years: "2022-2026",
    cgpa: "3.81/4.0",
    highlight: "Bronze Medal",
    details: "Graduated with highest honors. Strong foundation in algorithms, data structures, software engineering, and cybersecurity principles",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="#833d0f" strokeWidth="1.5">
        <circle cx="12" cy="10" r="6" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v5M9 21l3-2 3 2" />
      </svg>
    )
  },
  {
    type: "INTERMEDIATE",
    title: "Computer Science",
    subtitle: undefined,
    years: "2020-2022",
    cgpa: "77%",
    highlight: undefined,
    details: "Completed intermediate education with a focus on mathematics, physics, and computer science. Developed strong analytical and problem-solving skills.",
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="#22d3ee" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M8 16l4-8 4 8" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.18 + 0.2 }
  })
};

const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="w-full max-w-6xl mx-auto mt-20 mb-16 px-4">
      <div className="relative rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_40px_8px_rgba(34,211,238,0.15)] p-6 md:p-10 bg-gradient-to-br from-cyan-900/10 via-cyan-900/5 to-emerald-900/10">
        <div className="w-full flex justify-center mb-5">
          <span className="px-6 py-2 rounded-full bg-cyan-900/20 border border-cyan-900/30 text-cyan-300 font-semibold tracking-widest text-sm md:text-md shadow-sm flex items-center gap-3 whitespace-nowrap" style={{ letterSpacing: '0.08em' }}>
            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative flex-shrink-0">
              <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
              <span className="w-2 h-2 rounded-full bg-cyan-300 block"></span>
            </span>
            EDUCATION
          </span>
        </div>
        <h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
          style={{ textShadow: '0 0 32px #22d3eecc', letterSpacing: '-0.03em' }}
        >
          Academic Foundation
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {educationData.map((entry, i) => (
            <motion.div
              key={entry.title}
              className="relative flex-1 min-w-[320px] max-w-xl bg-[#1a1f2e] rounded-2xl p-8 shadow-xl border border-zinc-800/60 transition-all duration-300 group hover:border-l-4 hover:border-cyan-400 hover:shadow-[-16px_0_32px_-8px_rgba(34,211,238,0.3)]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Icon and Type */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-zinc-800/40 border border-cyan-500/80 rounded-lg p-3 flex items-center justify-center">
                  {entry.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-500/80 mb-2">{entry.type}</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">{entry.title}</h3>
                </div>
              </div>
              {/* CGPA and Years */}
              <div className="flex flex-wrap items-center gap-1 mb-3 text-sm">
                {entry.highlight && (
                  <>
                    <span className="text-[#833d0f] font-bold ">{entry.highlight}</span>
                    <span className="text-zinc-600 mx-1">•</span>
                  </>
                )}
                {entry.cgpa && (
                  <>
                    <span className="text-cyan-400 font-bold">CGPA: {entry.cgpa}</span>
                    <span className="text-zinc-600 mx-1">•</span>
                  </>
                )}
                <span className="text-zinc-400 font-semibold">{entry.years}</span>
              </div>
              {/* Details */}
              <p className="text-zinc-300 text-[15px] leading-relaxed">{entry.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
