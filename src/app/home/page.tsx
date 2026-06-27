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
import TypeWriter from "../../components/cyber/TypeWriter";
import DecryptText from "../../components/cyber/DecryptText";

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
              index={i}
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
    <div className="relative min-h-screen font-sans text-zinc-100 overflow-hidden">
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 pt-0">
        <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-20 mb-8">
          <motion.span
            className="mb-6 px-4 py-2 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 font-mono font-semibold tracking-widest text-xs md:text-sm shadow-sm flex items-center gap-3 relative"
            style={{ letterSpacing: '0.08em', minWidth: 'fit-content' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative">
              <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 block"></span>
            </span>
            <span className="z-10">SYSTEM ONLINE — OPEN TO COLLABORATION</span>
          </motion.span>

          {/* Terminal window */}
          <motion.div
            className="w-full max-w-2xl cyber-panel mb-8 overflow-hidden"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-cyan-500/15 bg-black/30">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-zinc-400 font-mono">usman@cybersec: ~/portfolio</span>
            </div>
            {/* body */}
            <div className="px-5 py-5 font-mono text-sm md:text-base text-left">
              <TypeWriter
                className="text-emerald-300/90 space-y-1 leading-relaxed"
                lines={[
                  "$ whoami",
                  "> Usman Shehzad",
                  "$ cat role.txt",
                  "> Cybersecurity Analyst x Security Engineer",
                ]}
                speed={38}
              />
            </div>
          </motion.div>

          <h1 className="sr-only">Usman Shehzad — Cybersecurity Analyst and Security Engineer</h1>

          <motion.div
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-center mb-4 text-gradient text-glow font-mono"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-hidden="true"
          >
            <DecryptText text="Usman Shehzad" onView={false} speed={45} />
          </motion.div>

          <motion.p
            className="max-w-2xl text-md md:text-lg text-zinc-300 text-center mb-8 font-sans"
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
              href="/Usman_Shehzad.pdf"
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
          <DecryptText
            as="h2"
            text="What I Build"
            className="text-5xl md:text-6xl font-extrabold text-center mb-4 tracking-tight drop-shadow-lg text-gradient text-glow"
          />
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
