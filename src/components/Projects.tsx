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
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto mt-24 mb-20 px-4">
      <div className="w-full flex justify-center mb-5">
        <motion.span
          className="px-5 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--line-strong)] text-[var(--accent)] font-mono font-semibold tracking-widest text-xs flex items-center gap-3 whitespace-nowrap"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-300 flex items-center justify-center relative flex-shrink-0">
            <span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.6s' }}></span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-200 block"></span>
          </span>
          FEATURED WORK
        </motion.span>
      </div>
      <motion.h2
        className="text-5xl md:text-6xl font-black text-center mb-14 text-gradient text-glow tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-8">
        {projects.map((proj, i) => (
          <motion.article
            key={proj.title}
            className="group relative cyber-panel p-7 md:p-8 flex flex-col gap-5 overflow-hidden"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            {/* corner brackets */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)] opacity-70 pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)] opacity-70 pointer-events-none" />
            {/* top accent line */}
            <span className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
            {/* index watermark */}
            <span className="absolute top-5 right-6 font-mono text-5xl font-black text-[var(--accent)]/5 select-none">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-4">
              <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-black/30 text-3xl text-[var(--accent)] drop-shadow-neon">
                {proj.icon}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold font-mono text-gradient tracking-tight mb-1">
                  {proj.title}
                </h3>
                <span className="font-mono text-xs md:text-sm text-[var(--accent)]/80 tracking-wide">
                  ▸ {proj.role}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5">
              {proj.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[var(--text-dim)] leading-relaxed font-sans">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 border-t border-[var(--line)]/60 mt-1 pt-4">
              {proj.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1.5 rounded-md bg-black/30 border border-[var(--line)] px-2.5 py-1 text-xs font-mono text-[var(--text-dim)] transition hover:border-[var(--line-strong)] hover:text-[var(--accent)]"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
