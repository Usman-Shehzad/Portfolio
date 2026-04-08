import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBug, FaDatabase, FaBook, FaNetworkWired, FaChartBar, FaServer, FaUserShield } from "react-icons/fa";
import { SiFastapi, SiElasticsearch, SiDocker, SiReact, SiNodedotjs, SiMongodb, SiCplusplus, SiPython, SiTailwindcss, SiGithub, SiLinux } from "react-icons/si";

const projects = [
  {
    title: "Cyber Threat Intelligence (CTI) Platform",
    role: "Security Engineer & CTI Analyst",
    icon: <FaShieldAlt className="text-cyan-400" />,
    highlights: [
      "Architected a comprehensive platform to monitor and manage Indicators of Compromise (IOCs) including IPs, Domains, URLs, Hashes, and Emails, as well as tracking threat actors and affected packages.",
      "Integrated and automated the ingestion of multiple open-source threat intelligence feeds with enrichment pipelines to streamline threat detection.",
      "Developed interactive dashboards that provide visual insights into threat trends, vulnerability statistics, and organizational risk scores.",
      "Engineered high-performance backend services using a modern stack and implemented role-based access control (RBAC) for secure company-based user management.",
      "Utilized containerization to ensure the platform remains portable, scalable, and easy to deploy across various environments."
    ],
    stack: [
      { icon: <SiPython className="text-yellow-300" />, name: "Python" },
      { icon: <SiFastapi className="text-emerald-400" />, name: "FastAPI" },
      { icon: <SiElasticsearch className="text-blue-400" />, name: "Elasticsearch" },
      { icon: <FaDatabase className="text-cyan-300" />, name: "SQLite3" },
      { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-emerald-300" />, name: "TailwindCSS" }
    ]
  },
  {
    title: "Network Vulnerability Scanning Tool",
    role: "Security Engineer & Researcher",
    icon: <FaBug className="text-pink-400" />,
    highlights: [
      "Designed a standalone, agentless scanning solution specifically for high-security environments where software installation and local agent persistence are prohibited.",
      "Developed remote execution modules and network-based fingerprinting techniques to accurately identify OS versions, running services, open ports, and installed packages.",
      "Automated the mapping of identified software versions against the National Vulnerability Database (NVD) to identify known CVEs.",
      "Implemented advanced scoring logic by calculating CVSSv4 scores and integrating EPSS (Exploit Prediction Scoring System) to prioritize remediation based on actual exploit probability.",
      "Built a reporting engine capable of generating JSON and TXT exports for offline analysis and professional security audits."
    ],
    stack: [
      { icon: <SiPython className="text-yellow-300" />, name: "Python" },
      { icon: <SiLinux className="text-emerald-400" />, name: "Linux/Shell" },
      { icon: <FaNetworkWired className="text-cyan-400" />, name: "Network" },
      { icon: <FaChartBar className="text-yellow-300" />, name: "CVSSv4" },
      { icon: <FaBug className="text-pink-400" />, name: "EPSS" }
    ]
  },
  {
    title: "Gym Management System (SaaS)",
    role: "Backend Developer",
    icon: <FaServer className="text-blue-400" />,
    highlights: [
      "Built a full-scale multi-tenant CRM SaaS from the ground up, managing everything from frontend UI to complex database schemas.",
      "Implemented dynamic role-based management to handle different user permissions and secured the attendee experience with real-time methods.",
      "Developed features for inventory management, such as protein sales, while maintaining strict version control and best practices."
    ],
    stack: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNodedotjs className="text-green-400" />, name: "Node.js" },
      { icon: <SiMongodb className="text-emerald-400" />, name: "MongoDB" },
      { icon: <SiGithub className="text-zinc-200" />, name: "Git" }
    ]
  },
  {
    title: "Library Management System",
    role: "Software Engineer",
    icon: <FaBook className="text-emerald-400" />,
    highlights: [
      "Engineered a high-efficiency console-based application to process historical sensor data and manage book/client records.",
      "Optimized data storage and retrieval processes to ensure the system could handle years of data logs without performance degradation."
    ],
    stack: [
      { icon: <SiCplusplus className="text-blue-400" />, name: "C++" }
    ]
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

export default function Projects() {
  const [activeIcon, setActiveIcon] = useState<{ projIdx: number; iconIdx: number } | null>(null);

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto mt-24 mb-20 px-4">
      <div className="w-full flex justify-center mb-4">
        <motion.span
          className="px-6 py-2 rounded-full bg-cyan-900/20 border border-cyan-900/30 text-cyan-300 font-semibold tracking-widest text-sm flex items-center gap-3 whitespace-nowrap"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative flex-shrink-0">
            <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
            <span className="w-2 h-2 rounded-full bg-cyan-300 block"></span>
          </span>
          Featured Work
        </motion.span>
      </div>
      <motion.h2
        className="text-5xl md:text-6xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        style={{ textShadow: '0 0 32px #22d3eecc', letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="relative rounded-3xl p-8 bg-gradient-to-br from-zinc-900/80 via-zinc-800/70 to-zinc-900/90 border border-cyan-400/20 shadow-2xl flex flex-col gap-4 transition-all duration-300 group overflow-hidden w-full"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl md:text-5xl drop-shadow-lg">{proj.icon}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent tracking-tight mb-1">
                  {proj.title}
                </h3>
                <span className="text-cyan-300 font-semibold text-base md:text-lg">{proj.role}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-zinc-200 text-base md:text-sm font-mono space-y-2 mb-2 pl-2">
              {proj.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-5 mt-2">
              {proj.stack.map((item, idx) => {
                const isActive = activeIcon && activeIcon.projIdx === i && activeIcon.iconIdx === idx;
                return (
                  <span
                    key={idx}
                    className="text-2xl md:text-3xl bg-zinc-800/60 rounded-xl px-3 py-1 shadow border border-cyan-400/10 relative cursor-pointer"
                    onClick={() => setActiveIcon(isActive ? null : { projIdx: i, iconIdx: idx })}
                  >
                    {item.icon}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-zinc-900 text-cyan-300 text-xs font-bold opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg border border-cyan-400/20 whitespace-nowrap z-20">
                        {item.name}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
