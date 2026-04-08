import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaCodeBranch, FaServer, FaSitemap, FaLayerGroup, FaBug, FaChartBar, FaSearch, FaEye, FaFileAlt, FaChartPie, FaShieldAlt, FaNetworkWired, FaDocker, FaLinux, FaPython } from "react-icons/fa";
import { SiFastapi, SiReact, SiNodedotjs, SiSharp, SiGithubactions, SiApachekafka, SiApache, SiNginx, SiElasticsearch } from "react-icons/si";


const builderSkills = [
	{
		name: "Automation",
		icon: <FaCogs className="text-cyan-400" />,
		desc: "Built automated security-focused platforms and threat intelligence enrichment pipelines."
	},
	{
		name: "Development",
		icon: <SiFastapi className="text-emerald-400" />,
		desc: "Full-stack experience with Python, FastAPI, React, Node.js, and C#."
	},
	{
		name: "Architecture",
		icon: <FaSitemap className="text-blue-400" />,
		desc: "Designed clean, secure architectures including RBAC and multi-tenant systems."
	},
	{
		name: "Scanning",
		icon: <FaBug className="text-pink-400" />,
		desc: "Developed agentless network vulnerability scanning solutions."
	},
	{
		name: "Prioritization",
		icon: <FaChartBar className="text-yellow-300" />,
		desc: "Integrated EPSS and CVSSv4 to prioritize vulnerabilities by real-world risk."
	},
	{
		name: "Backend",
		icon: <FaServer className="text-cyan-300" />,
		desc: "Engineered backend services using Python, FastAPI, and ASP.NET."
	},
	{
		name: "Scripting",
		icon: <FaPython className="text-yellow-300" />,
		desc: "Expert in Linux/Shell scripting and Bash for security automation."
	},
	{
		name: "Containerization",
		icon: <FaDocker className="text-blue-400" />,
		desc: "Scaled and deployed platforms using Docker."
	},
	{
		name: "Infrastructure",
		icon: <FaLayerGroup className="text-emerald-400" />,
		desc: "Managed NGINX, Apache, and CI/CD pipelines via GitHub Actions."
	},
];

const investigatorSkills = [
	{
		name: "Intelligence",
		icon: <FaShieldAlt className="text-indigo-400" />,
		desc: "Specialized in Cyber Threat Intelligence (CTI) and monitoring IOCs."
	},
	{
		name: "Monitoring",
		icon: <FaEye className="text-cyan-400" />,
		desc: "Tracked threat actors, vulnerabilities, and affected packages."
	},
	{
		name: "Analysis",
		icon: <FaSearch className="text-emerald-400" />,
		desc: "Performed data-driven analysis of threat trends and vulnerability statistics."
	},
	{
		name: "Enrichment",
		icon: <FaCodeBranch className="text-pink-400" />,
		desc: "Automated the enrichment of open-source threat feeds for better detection."
	},
	{
		name: "Detection",
		icon: <FaBug className="text-yellow-300" />,
		desc: "Utilized remote techniques and network analysis to identify CVEs and running services."
	},
	{
		name: "Reporting",
		icon: <FaFileAlt className="text-cyan-300" />,
		desc: "Generated structured JSON and TXT security assessment reports."
	},
	{
		name: "Visualization",
		icon: <FaChartPie className="text-blue-400" />,
		desc: "Built interactive dashboards for threat trends using Elasticsearch."
	},
	{
		name: "Governance",
		icon: <FaLayerGroup className="text-emerald-400" />,
		desc: "Certified in Threat Intelligence & Governance (CTIGA)."
	},
	{
		name: "Identification",
		icon: <FaNetworkWired className="text-cyan-400" />,
		desc: "Identified OS versions, ports, and packages through network-based techniques."
	},
];

const containerVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			staggerChildren: 0.11,
		},
	},
};

const skillVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechnicalSkills() {
	const [modal, setModal] = useState<null | { name: string; icon: any; desc: string }>(null);

	return (
		<motion.section
			className="w-full max-w-5xl mx-auto mt-20 flex flex-col items-center px-4"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="w-full flex flex-row justify-center">
				<motion.span
					className="mb-4 px-6 py-2 rounded-full bg-cyan-900/20 border border-cyan-900/30 text-cyan-300 font-semibold tracking-widest text-sm flex flex-row items-center gap-3 whitespace-nowrap"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 flex items-center justify-center relative flex-shrink-0">
						<span className="absolute w-full h-full rounded-full animate-ping bg-cyan-400/40" style={{ animationDuration: '1.5s' }}></span>
						<span className="w-2 h-2 rounded-full bg-cyan-300 block"></span>
					</span>
					Core Skills
				</motion.span>
			</div>
			<motion.h2
				className="text-5xl md:text-6xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
				style={{ textShadow: '0 0 32px #22d3eecc', letterSpacing: '-0.03em' }}
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				Technical Skills
			</motion.h2>

			{/* Security Engineering (The Builder) */}
			<motion.div className="w-full mb-20">
				<motion.h3
					className="text-3xl md:text-4xl font-black text-center mb-10 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7 }}
				>
					Security Engineering <span className="text-base md:text-lg font-semibold text-cyan-300">(The Builder)</span>
				</motion.h3>
				<div className="flex flex-wrap gap-6 justify-center mb-2">
					{builderSkills.map((skill) => (
						<button
							key={skill.name}
							className="flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-base md:text-lg font-mono tracking-tight shadow-xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl text-zinc-100 hover:bg-cyan-900/30 hover:text-cyan-300 hover:shadow-cyan-400/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-zinc-900"
							style={{ boxShadow: '0 4px 24px 0 #22d3ee22' }}
							onClick={() => setModal(skill)}
							type="button"
						>
							<span className="text-2xl md:text-3xl drop-shadow-lg">{skill.icon}</span>
							<span className="whitespace-nowrap">{skill.name}</span>
						</button>
					))}
				</div>
			</motion.div>

			{/* Divider */}
			<div className="w-full h-0.5 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-blue-500/10 rounded-full mb-16" />

			{/* Cybersecurity Analysis (The Investigator) */}
			<motion.div className="w-full">
				<motion.h3
					className="text-3xl md:text-4xl font-black text-center mb-10 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					Cybersecurity Analysis <span className="text-base md:text-lg font-semibold text-cyan-300">(The Investigator)</span>
				</motion.h3>
				<div className="flex flex-wrap gap-6 justify-center mb-2">
					{investigatorSkills.map((skill) => (
						<button
							key={skill.name}
							className="flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-base md:text-lg font-mono tracking-tight shadow-xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/70 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl text-zinc-100 hover:bg-cyan-900/30 hover:text-cyan-300 hover:shadow-cyan-400/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-zinc-900"
							style={{ boxShadow: '0 4px 24px 0 #22d3ee22' }}
							onClick={() => setModal(skill)}
							type="button"
						>
							<span className="text-2xl md:text-3xl drop-shadow-lg">{skill.icon}</span>
							<span className="whitespace-nowrap">{skill.name}</span>
						</button>
					))}
				</div>
			</motion.div>

			{/* Modal Popup */}
			<AnimatePresence>
				{modal && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className="bg-zinc-900 rounded-3xl shadow-2xl p-10 max-w-md w-full border border-cyan-400/30 relative"
							initial={{ scale: 0.9, opacity: 0, y: 40 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 40 }}
							transition={{ type: 'spring', stiffness: 260, damping: 22 }}
						>
							<button
								className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 text-3xl font-bold focus:outline-none"
								onClick={() => setModal(null)}
								aria-label="Close"
								type="button"
							>
								&times;
							</button>
							<div className="flex flex-col items-center gap-4">
								<span className="text-5xl mb-2 drop-shadow-lg">{modal.icon}</span>
								<h4 className="text-3xl font-black text-center bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2 tracking-tight">
									{modal.name}
								</h4>
								<p className="text-zinc-200 text-center text-lg font-mono leading-relaxed px-2">{modal.desc}</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.section>
	);
}
