"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import TechnicalSkills from "../../components/TechnicalSkills";
import WhatIBuildCard from "../../components/WhatIBuildCard";
import EducationTimeline from "../../components/EducationTimeline";
import Projects from "../../components/Projects";
import Certifications from "../../components/Certifications";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function Home() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  function WhatIBuildCards() {
    const cards = [
      {
        title: "Cybersecurity",
        desc: "Building robust security architectures, implementing threat detection systems, and designing secure backend infrastructures for enterprise applications",
        tags: ["Security Audits", "Threat Detection"],
        icon: (
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path fill="#22d3ee" d="M12 2l8 4v6c0 5.25-3.75 10-8 10S4 17.25 4 12V6l8-4zm0 2.18L6 6.09v5.91c0 4.25 2.94 8.19 6 8.91 3.06-.72 6-4.66 6-8.91V6.09l-6-1.91zM12 8a2 2 0 110 4 2 2 0 010-4z"/></svg>
        )
      },
      {
        title: "Scripting / Automation",
        desc: "Automating security tasks, infrastructure, and workflows using Python, Bash, and PowerShell. Building scripts and tools for monitoring, reporting, and DevSecOps.",
        tags: ["Python/Bash", "DevSecOps"],
        icon: (
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path fill="#38bdf8" d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2zm12 0h4v2h-4v-2zm0-4h4v2h-4v-2z"/></svg>
        )
      },
      {
        title: "Vulnerability Assessment",
        desc: "Identifying, analyzing, and prioritizing security vulnerabilities in systems and applications. Skilled in penetration testing, risk analysis, and remediation strategies.",
        tags: ["Penetration Testing", "Risk Analysis"],
        icon: (
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        )
      },
      {
        title: "Compliance & Governance",
        desc: "Ensuring systems and networks adhere to regulatory standards and internal policies. Experienced with operating system and network device compliance audits.",
        tags: ["Regulatory Audits", "Policy Enforcement"],
        icon: (
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path fill="#22d3ee" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2v-6h2v6zm0 8h-2v-2h2v2z"/></svg>
        )
      },
    ];
    return (
      <motion.div
        className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18
            }
          }
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.18 + 0.2 }}
          >
            <WhatIBuildCard
              title={card.title}
              desc={card.desc}
              tags={card.tags}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow if technical expertise section is about to enter viewport
      if (expertiseRef.current) {
        const rect = expertiseRef.current.getBoundingClientRect();
        // Hide arrow if top of expertise section is within 120px of viewport top
        setShowArrow(rect.top > 120);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function SpecializationCards() {
    const [active, setActive] = useState<string | null>(null);
    const cards = [
      {
        key: "analyst",
        title: "Cybersecurity Analyst",
        desc: "Expert in threat detection, SIEM, incident response, and monitoring. Skilled at analyzing security events and defending against cyber threats.",
        color: "from-cyan-700 to-cyan-400"
      },
      {
        key: "engineer",
        title: "Security Engineer",
        desc: "Designs and implements secure systems, cloud security, DevSecOps, and automation. Focused on building robust, scalable security architectures.",
        color: "from-blue-700 to-cyan-500"
      }
    ];
    return (
      <section className="w-full max-w-2xl mx-auto mt-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-cyan-300 mb-6">Specialization</h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          {cards.map(card => (
            <motion.div
              key={card.key}
              className={`flex-1 min-w-55 cursor-pointer bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-xl transition-transform duration-300 hover:scale-105 relative overflow-hidden`}
              onClick={() => setActive(active === card.key ? null : card.key)}
              animate={active === card.key ? { scale: 1.08, rotate: 2 } : { scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow">{card.title}</h3>
              <motion.p
                className="text-zinc-100 text-sm md:text-base font-medium"
                initial={false}
                animate={active === card.key ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                {card.desc}
              </motion.p>
              {active === card.key && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0f2027] to-[#2c5364] font-mono text-zinc-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 72%)" }}
          animate={{
            x: [0, 140, -40, 0],
            y: [0, 80, 160, 0],
            scale: [1, 1.2, 0.95, 1],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(60deg)",
              "hue-rotate(120deg)",
              "hue-rotate(0deg)"
            ]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-32 right-10 h-80 w-80 rounded-full blur-3xl opacity-35"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 74%)" }}
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 140, -40, 0],
            scale: [1, 0.9, 1.15, 1],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(90deg)",
              "hue-rotate(180deg)",
              "hue-rotate(0deg)"
            ]
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 74%)" }}
          animate={{
            x: [0, -90, 70, 0],
            y: [0, -60, 110, 0],
            scale: [1, 1.15, 0.9, 1],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(80deg)",
              "hue-rotate(160deg)",
              "hue-rotate(0deg)"
            ]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full blur-[90px] opacity-30"
          style={{ background: "radial-gradient(circle, #1e3a8a 0%, transparent 72%)" }}
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -120, 40, 0],
            scale: [1, 1.1, 0.9, 1],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(70deg)",
              "hue-rotate(140deg)",
              "hue-rotate(0deg)"
            ]
          }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 pt-0">
        <section className="flex flex-col items-center  justify-center w-full max-w-4xl mx-auto mt-20 mb-8">
          <motion.span
            className="mb-5 px-4 py-4 rounded-full bg-cyan-900/20 border border-cyan-900/30 text-cyan-300 font-semibold tracking-widest text-sm md:text-md shadow-sm flex items-center gap-3 relative"
            style={{ letterSpacing: '0.08em', minWidth: 'fit-content' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Left animated circle */}
            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative">
              <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
              <span className="w-2 h-2 rounded-full bg-cyan-300 block"></span>
            </span>
            <span className="z-10">Open to Collaboration</span>
            {/* Right clock icon */}
            <svg className=" w-5 h-5 text-cyan-300 opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold tracking-tight text-center mb-4 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              backgroundImage: [
                "linear-gradient(90deg, #22d3ee 0%, #34d399 25%, #3b82f6 50%, #22d3ee 75%, #34d399 100%)",
                "linear-gradient(180deg, #34d399 0%, #3b82f6 25%, #22d3ee 50%, #34d399 75%, #3b82f6 100%)",
                "linear-gradient(270deg, #3b82f6 0%, #22d3ee 25%, #34d399 50%, #3b82f6 75%, #22d3ee 100%)",
                "linear-gradient(360deg, #22d3ee 0%, #3b82f6 25%, #34d399 50%, #22d3ee 75%, #3b82f6 100%)",
                "linear-gradient(90deg, #22d3ee 0%, #34d399 25%, #3b82f6 50%, #22d3ee 75%, #34d399 100%)"
              ]
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              backgroundImage: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              backgroundSize: "200% 200%",
              filter: "drop-shadow(0 0 30px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 60px rgba(34, 211, 238, 0.4)) drop-shadow(0 0 90px rgba(34, 211, 238, 0.2))"
            }}
          >
            Usman Shehzad
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-cyan-400 text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Cybersecurity Analyst x Security Engineer
          </motion.h2>
          <motion.p
            className="max-w-2xl text-md md:text-lg text-zinc-300 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Passionate about defending digital assets and building secure, innovative solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-cyan-400 font-bold shadow-lg hover:scale-105 transition text-center border-2 border-cyan-500 bg-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-700 hover:text-white"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold shadow-lg hover:scale-105 transition text-center"
            >
              Explore Projects
            </a>
          </motion.div>
          
        </section>

        <AnimatePresence>
          {showArrow && (
            <motion.div
              key="down-arrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
              className="flex flex-col items-center justify-center w-full mb-2 mt-8 z-30"
              style={{ pointerEvents: 'none' }}
            >
              <span className="text-zinc-300 font-semibold mb-1 text-base">Scroll to explore</span>
              <motion.svg
                width="32" height="32" viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <motion.path
                  d="M16 8V24M16 24L8 16M16 24L24 16"
                  stroke="#22d3ee"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technical Expertise Section (styled as in image) */}
        <section ref={expertiseRef} className="w-full flex mt-40 flex-col items-center justify-center mb-12">
          {/* Skill tags with animation */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {['Cybersecurity', 'Python', 'Javascript', 'Linux', 'Backend'].map((skill, i) => (
              <motion.span
                key={skill}
                className="px-6 py-2 rounded-full bg-black/40 border border-zinc-600 text-zinc-100 font-semibold text-base shadow-sm hover:bg-cyan-900/40 hover:text-cyan-300 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          {/* Stats card with animation */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-4xl bg-black/40 border border-cyan-800/40 rounded-2xl flex flex-col sm:flex-row justify-between items-center px-8 py-8 shadow-lg backdrop-blur-md">
              {/* Years */}
              <div className="flex-1 flex flex-col items-center px-6 py-4">
                <span className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-1">2+</span>
                <span className="text-zinc-400 font-semibold text-base">Years Experience</span>
              </div>
              {/* Divider */}
              <div className="hidden sm:block h-16 border-l border-cyan-900/40 mx-2"></div>
              {/* Projects */}
              <div className="flex-1 flex flex-col items-center px-6 py-4">
                <span className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-1">15+</span>
                <span className="text-zinc-400 font-semibold text-base">Projects</span>
              </div>
              {/* Divider */}
              <div className="hidden sm:block h-16 border-l border-cyan-900/40 mx-2"></div>
              {/* Degree */}
              <div className="flex-1 flex flex-col items-center px-6 py-4">
                <span className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-1">BS</span>
                <span className="text-zinc-200 font-semibold text-base tracking-wide">Software Engineering</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* What I Build Section - Redesigned */}
        <section id="what-i-build" className="mt-10 w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <span className="mb-5 px-6 py-2 rounded-full bg-cyan-900/20 border border-cyan-900/30 text-cyan-300 font-semibold tracking-widest text-sm md:text-md shadow-sm flex items-center gap-3 whitespace-nowrap" style={{ letterSpacing: '0.08em' }}>
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative flex-shrink-0">
                <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
                <span className="w-2 h-2 rounded-full bg-cyan-300 block"></span>
              </span>
              CORE CAPABILITIES
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-center mb-4 tracking-tight drop-shadow-lg bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 24px #22d3eecc', letterSpacing: '-0.03em' }}
          >
            What I Build
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 text-center mb-12 max-w-2xl">Specialized expertise across security, scripting/automation, and modern application development</p>
          <WhatIBuildCards />
           {/* education timeline inserted */}
          <EducationTimeline />
          <TechnicalSkills />
        </section>
       
        <Projects />
        <Certifications />
        
        <ContactUs />
        <Footer />
      </main>
      {/* Tailwind handles all navbar styling now */}
    </div>
  );
}
