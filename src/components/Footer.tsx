import React from "react";

const EMAIL = "usmanshehzad617@gmail.com";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-black/30">
      <div className="mx-auto w-full max-w-7xl px-2 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-100">Usman Shehzad</h3>
            <p className="mt-3 text-sm text-zinc-300">
              Cybersecurity analyst and security engineer focused on building
              secure, resilient systems at the intersection of defense and
              engineering.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/Usman-Shehzad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/usman-shehzad-106481268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="ml-40">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-200">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><a className="transition hover:text-cyan-300" href="/home">Home</a></li>
              <li><a className="transition hover:text-cyan-300" href="/skills">Skills</a></li>
              <li><a className="transition hover:text-cyan-300" href="/projects">Projects</a></li>
              <li><a className="transition hover:text-cyan-300" href="/certifications">Certifications</a></li>
              <li><a className="transition hover:text-cyan-300" href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-200">Get In Touch</h4>
            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {EMAIL}
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-400">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <span>© 2026 Usman Shehzad. All rights reserved.</span>
            <span>Designed and built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
