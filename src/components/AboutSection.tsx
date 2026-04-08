"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mt-20 w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-wide"
        style={{
          color: '#22d3ee',
          textShadow: '0 4px 32px #22d3ee99, 0 1px 0 #155e75',
          letterSpacing: '0.05em',
        }}
      >
        About
      </h2>
      <motion.div
        className="w-full bg-gradient-to-br from-zinc-900/80 to-cyan-900/40 rounded-3xl p-6 md:p-10 shadow-xl hover:scale-[1.025] transition-transform duration-300 backdrop-blur-xl flex flex-col lg:flex-row gap-8"
        style={{ boxShadow: '0 8px 40px 0 #22d3ee22, 0 1.5px 0 #155e75' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-zinc-100 text-sm md:text-base lg:text-lg leading-relaxed font-normal md:font-medium tracking-wide">
            I am a <span className="text-cyan-300 font-semibold">cybersecurity analyst</span> and <span className="text-cyan-300 font-semibold">security engineer</span> with a passion for building secure systems and defending against modern threats.<br className="hidden md:block" />
            My journey in cybersecurity has equipped me with hands-on experience in <span className="text-cyan-200">threat detection</span>, <span className="text-cyan-200">incident response</span>, and designing robust security architectures.<br className="hidden md:block" />
            I thrive on solving complex security challenges and am dedicated to helping organizations safeguard their digital assets.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
