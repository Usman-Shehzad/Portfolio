import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaUserShield, FaNetworkWired, FaLaptop, FaUserGraduate } from "react-icons/fa";

type CertItem = {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  desc: string;
  img?: string; // image url
  link?: string; // certificate link
};

const certifications: CertItem[] = [
  {
    title: "Certified Cyber Security Educator Professional (CCEP)",
    subtitle: "Red Team Leader",
    icon: <FaUserShield className="text-cyan-400" />,
    desc: "Demonstrates leadership-level expertise in offensive security and the ability to educate others on cybersecurity principles.",
    img: "/certs/ccep.png",
    link: "https://courses.redteamleaders.com/exam-completion/34888fd6f8b72332" // Replace with actual certificate link
  },
  {
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    subtitle: "Red Team Leader",
    icon: <FaUserShield className="text-emerald-400" />,
    desc: "Validates your skills in managing threat intelligence lifecycles and high-level security governance.",
    img: "/certs/ctiga.png",
    link: "https://courses.redteamleaders.com/exam-completion/866ea0f9b4e1c8b8"
  },
  {
    title: "Introduction to Cyber Security",
    subtitle: "Cisco Networking Academy",
    icon: <FaCertificate className="text-blue-400" />,
    desc: "Covers the foundational principles of protecting data and privacy.",
    img: "/certs/cisco-cyber.png",
    link: "https://www.netacad.com/certificates/?issuanceId=d5ccde40-a4e2-4b4c-9019-3efb47ffcb64"
  },
  {
    title: "Networking Basics",
    subtitle: "Cisco Networking Academy",
    icon: <FaNetworkWired className="text-cyan-300" />,
    desc: "Focuses on the core concepts of how devices communicate within a network, which is essential for your network scanning projects.",
    img: "/certs/cisco-network.png",
    link: "https://www.netacad.com/certificates/?issuanceId=fd338f8c-0941-4d9d-bfdc-cf09fc93921b"
  },
  {
    title: "Computer Hardware Basics",
    subtitle: "Cisco Networking Academy",
    icon: <FaLaptop className="text-emerald-400" />,
    desc: "Provides the fundamental knowledge of physical system components.",
    img: "/certs/cisco-hardware.png",
    link: "https://www.netacad.com/certificates/?issuanceId=a2beab81-c068-4501-b186-dc75332d77a9"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12 + 0.2 }
  })
};

export default function Certifications() {
  return (
    <section id="certifications" className="w-full max-w-7xl mx-auto mt-24 mb-20 px-4">
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
          Professional Credentials
        </motion.span>
      </div>
      <motion.h2
        className="text-5xl md:text-6xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        style={{ textShadow: '0 0 32px #22d3eecc', letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Certifications
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        {certifications.map((item, idx) => (
          <motion.div
            key={item.title}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-zinc-950/50 shadow-xl backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
          >
            <div className="relative">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title + ' certificate'}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30" />
            </div>

            <div className="flex flex-col flex-1 px-6 py-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-extrabold text-white tracking-tight leading-tight">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <span className="inline-block text-sm font-semibold text-cyan-300">
                    ({item.subtitle})
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm md:text-md text-zinc-200 leading-relaxed flex-1">
                {item.desc}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
                >
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
