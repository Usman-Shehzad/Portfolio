"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaCodeBranch, FaServer, FaSitemap, FaLayerGroup, FaBug, FaChartBar, FaSearch, FaEye, FaFileAlt, FaChartPie, FaShieldAlt, FaNetworkWired, FaDocker, FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

type Skill = { name: string; icon: React.ReactNode; desc: string };

const builderSkills: Skill[] = [
	{ name: "Automation", icon: <FaCogs />, desc: "Built automated security-focused platforms and threat intelligence enrichment pipelines." },
	{ name: "Development", icon: <SiFastapi />, desc: "Full-stack experience with Python, FastAPI, React, Node.js, and C#." },
	{ name: "Architecture", icon: <FaSitemap />, desc: "Designed clean, secure architectures including RBAC and multi-tenant systems." },
	{ name: "Scanning", icon: <FaBug />, desc: "Developed agentless network vulnerability scanning solutions." },
	{ name: "Prioritization", icon: <FaChartBar />, desc: "Integrated EPSS and CVSSv4 to prioritize vulnerabilities by real-world risk." },
	{ name: "Backend", icon: <FaServer />, desc: "Engineered backend services using Python, FastAPI, and ASP.NET." },
	{ name: "Scripting", icon: <FaPython />, desc: "Expert in Linux/Shell scripting and Bash for security automation." },
	{ name: "Containerization", icon: <FaDocker />, desc: "Scaled and deployed platforms using Docker." },
	{ name: "Infrastructure", icon: <FaLayerGroup />, desc: "Managed NGINX, Apache, and CI/CD pipelines via GitHub Actions." },
];

const investigatorSkills: Skill[] = [
	{ name: "Intelligence", icon: <FaShieldAlt />, desc: "Specialized in Cyber Threat Intelligence (CTI) and monitoring IOCs." },
	{ name: "Monitoring", icon: <FaEye />, desc: "Tracked threat actors, vulnerabilities, and affected packages." },
	{ name: "Analysis", icon: <FaSearch />, desc: "Performed data-driven analysis of threat trends and vulnerability statistics." },
	{ name: "Enrichment", icon: <FaCodeBranch />, desc: "Automated the enrichment of open-source threat feeds for better detection." },
	{ name: "Detection", icon: <FaBug />, desc: "Utilized remote techniques and network analysis to identify CVEs and running services." },
	{ name: "Reporting", icon: <FaFileAlt />, desc: "Generated structured JSON and TXT security assessment reports." },
	{ name: "Visualization", icon: <FaChartPie />, desc: "Built interactive dashboards for threat trends using Elasticsearch." },
	{ name: "Governance", icon: <FaLayerGroup />, desc: "Certified in Threat Intelligence & Governance (CTIGA)." },
	{ name: "Identification", icon: <FaNetworkWired />, desc: "Identified OS versions, ports, and packages through network-based techniques." },
];

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<motion.span
			className="mb-5 px-5 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--line-strong)] text-[var(--accent)] font-mono font-semibold tracking-widest text-xs flex items-center gap-3 whitespace-nowrap"
			initial={{ scale: 0.85, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-300 flex items-center justify-center relative">
				<span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: "1.6s" }} />
				<span className="w-1.5 h-1.5 rounded-full bg-cyan-200 block" />
			</span>
			{children}
		</motion.span>
	);
}

function SkillGrid({ skills, onPick }: { skills: Skill[]; onPick: (s: Skill) => void }) {
	return (
		<motion.div
			className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl"
			variants={gridVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
		>
			{skills.map((skill) => (
				<motion.button
					key={skill.name}
					variants={itemVariants}
					whileHover={{ y: -5 }}
					whileTap={{ scale: 0.97 }}
					onClick={() => onPick(skill)}
					type="button"
					className="group relative flex items-center gap-3 px-4 py-4 rounded-xl text-left cyber-panel overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
				>
					{/* hover glow */}
					<span className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
						style={{ background: "radial-gradient(circle at 20% 0%, var(--accent-glow), transparent 70%)", filter: "blur(16px)" }} />
					{/* left accent bar */}
					<span className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />

					<span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--line-strong)] bg-black/30 text-xl text-[var(--accent)] drop-shadow-neon transition-transform group-hover:scale-110">
						{skill.icon}
					</span>
					<span className="relative flex flex-col">
						<span className="font-mono font-bold text-sm md:text-base text-zinc-100 group-hover:text-[var(--accent)] transition-colors">
							{skill.name}
						</span>
						<span className="font-mono text-[10px] tracking-widest text-[var(--text-faint)]">
							▸ details
						</span>
					</span>
				</motion.button>
			))}
		</motion.div>
	);
}

export default function TechnicalSkills() {
	const [modal, setModal] = useState<Skill | null>(null);

	return (
		<motion.section
			className="w-full max-w-5xl mx-auto mt-20 flex flex-col items-center px-4"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<SectionLabel>CORE SKILLS</SectionLabel>
			<motion.h2
				className="text-5xl md:text-6xl font-black text-center mb-16 text-gradient text-glow tracking-tight"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				Technical Skills
			</motion.h2>

			{/* The Builder */}
			<div className="w-full flex flex-col items-center mb-20">
				<motion.h3
					className="text-2xl md:text-3xl font-black text-center mb-8 font-mono tracking-tight text-zinc-100"
					initial={{ opacity: 0, y: -16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
				>
					<span className="text-gradient">Security Engineering</span>{" "}
					<span className="text-sm md:text-base font-semibold text-[var(--text-faint)]">// The Builder</span>
				</motion.h3>
				<SkillGrid skills={builderSkills} onPick={setModal} />
			</div>

			{/* divider */}
			<div className="w-full max-w-2xl flex items-center gap-4 mb-16 opacity-60">
				<span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]" />
				<span className="font-mono text-xs tracking-widest text-[var(--accent)]">◆</span>
				<span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]" />
			</div>

			{/* The Investigator */}
			<div className="w-full flex flex-col items-center">
				<motion.h3
					className="text-2xl md:text-3xl font-black text-center mb-8 font-mono tracking-tight text-zinc-100"
					initial={{ opacity: 0, y: -16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
				>
					<span className="text-gradient">Cybersecurity Analysis</span>{" "}
					<span className="text-sm md:text-base font-semibold text-[var(--text-faint)]">// The Investigator</span>
				</motion.h3>
				<SkillGrid skills={investigatorSkills} onPick={setModal} />
			</div>

			{/* Modal */}
			<AnimatePresence>
				{modal && (
					<motion.div
						className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setModal(null)}
					>
						<motion.div
							className="relative cyber-panel max-w-md w-full p-10"
							initial={{ scale: 0.9, opacity: 0, y: 30 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 30 }}
							transition={{ type: "spring", stiffness: 260, damping: 22 }}
							onClick={(e) => e.stopPropagation()}
						>
							<span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]" />
							<span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]" />
							<button
								className="absolute top-4 right-4 text-[var(--accent)] hover:text-white text-3xl font-bold leading-none focus:outline-none"
								onClick={() => setModal(null)}
								aria-label="Close"
								type="button"
							>
								&times;
							</button>
							<div className="flex flex-col items-center gap-4">
								<span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--line-strong)] bg-black/30 text-4xl text-[var(--accent)] drop-shadow-neon">
									{modal.icon}
								</span>
								<h4 className="text-2xl font-black text-center text-gradient tracking-tight">
									{modal.name}
								</h4>
								<p className="text-[var(--text-dim)] text-center text-base font-sans leading-relaxed">
									{modal.desc}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.section>
	);
}
