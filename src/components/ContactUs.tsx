import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const YOUR_EMAIL = "usmanshehzad617@gmail.com";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setStatus("Sending...");
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    try {
      // Get form data
      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      // Send to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    {
      name: "EMAIL",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      value: YOUR_EMAIL,
      href: `mailto:${YOUR_EMAIL}`,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "GITHUB",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      value: "@Usman-Shehzad",
      href: "https://github.com/Usman-Shehzad",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "LINKEDIN",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      value: "Usman Shehzad",
      href: "https://www.linkedin.com/in/usman-shehzad-106481268 ",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto mt-20 mb-10 px-4 py-16 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
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
            GET IN TOUCH
          </motion.span>
        </div>
        <motion.h2
          className="text-5xl md:text-6xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
          style={{ textShadow: '0 0 32px #22d3eecc', letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let's Work Together
        </motion.h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Drop me a message and I'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 relative z-10">
        {/* Form Section - Takes 3 columns */}
        <motion.div
          className="md:col-span-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-black/60 via-zinc-900/50 to-black/60 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 shadow-2xl"
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-cyan-300 font-semibold mb-2 text-sm tracking-wide">
                  YOUR NAME
                </label>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border-2 border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:border-cyan-400 focus:bg-black/70 outline-none transition-all duration-300 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyan-300 font-semibold mb-2 text-sm tracking-wide">
                  EMAIL ADDRESS
                </label>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border-2 border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:border-cyan-400 focus:bg-black/70 outline-none transition-all duration-300 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyan-300 font-semibold mb-2 text-sm tracking-wide">
                  SUBJECT
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border-2 border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:border-cyan-400 focus:bg-black/70 outline-none transition-all duration-300 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-cyan-300 font-semibold mb-2 text-sm tracking-wide">
                  MESSAGE
                </label>
                <motion.textarea
                  name="message"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  required
                  rows={6}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border-2 border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:border-cyan-400 focus:bg-black/70 outline-none transition-all duration-300 font-medium resize-none"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_100%] text-white font-bold text-lg shadow-xl relative overflow-hidden group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                variants={itemVariants}
                whileHover={!isSubmitting ? {
                  scale: 1.02,
                  backgroundPosition: "100% 0",
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Wait for Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </motion.button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center py-3 px-4 rounded-xl ${
                    status.includes("success")
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : status.includes("Failed") || status.includes("error")
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  }`}
                >
                  {status}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Sidebar Section - Takes 2 columns */}
        <motion.div
          className="md:col-span-2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Social Links Card */}
          <motion.div
            className="bg-gradient-to-br from-black/60 via-zinc-900/50 to-black/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 shadow-2xl"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "EMAIL" ? "_blank" : undefined}
                  rel={link.name !== "EMAIL" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-zinc-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(0, 0, 0, 0.6)"
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {link.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-400 font-semibold tracking-wider">{link.name}</p>
                    <p className="text-sm text-cyan-300 font-medium truncate group-hover:text-cyan-200 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability Status Card */}
          <motion.div
            className="bg-gradient-to-br from-black/60 via-zinc-900/50 to-black/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                className="relative w-4 h-4 rounded-full bg-green-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
              </motion.span>
              <span className="text-green-400 font-bold text-lg">Available for Work</span>
            </div>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              Currently open to exciting opportunities in cybersecurity, consulting projects, and collaborative research initiatives.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Response time: 24 hours
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                {["Full-time", "Contract", "Consulting"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-300 font-semibold text-xs border border-cyan-700/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.5)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
