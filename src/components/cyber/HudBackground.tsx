"use client";

const FEED = [
  "STATUS: ALL SYSTEMS NOMINAL",
  "IDS: 0 ACTIVE INTRUSIONS",
  "FIREWALL: ENFORCING",
  "THREAT LEVEL: LOW",
  "LAST SCAN: PASSED",
  "ENCRYPTION: AES-256 ACTIVE",
  "UPTIME: 99.99%",
  "MONITORING: 24/7 SOC",
];

/**
 * Mission-control / SOC dashboard backdrop: scanning grid, a slow radar
 * sweep, a top status strip and a scrolling threat-feed ticker.
 * All fixed + pointer-none so it sits behind page content.
 */
export default function HudBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% -10%, #081226 0%, #050b18 65%)",
        }}
      />
      {/* scanning grid */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 85%)",
        }}
      />
      {/* radar in the corner */}
      <div
        aria-hidden="true"
        className="fixed -z-10 hidden md:block"
        style={{ right: "-160px", top: "8%", width: "520px", height: "520px", opacity: 0.25 }}
      >
        <div className="absolute inset-0 rounded-full border border-[var(--line-strong)]" />
        <div className="absolute inset-[18%] rounded-full border border-[var(--line)]" />
        <div className="absolute inset-[40%] rounded-full border border-[var(--line)]" />
        <div className="radar-sweep" />
      </div>

      <div className="cyber-vignette" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      {/* bottom threat-feed ticker */}
      <div
        aria-hidden="true"
        className="fixed bottom-0 left-0 right-0 z-[55] overflow-hidden border-t border-[var(--line)] bg-black/50 backdrop-blur-sm py-1.5"
      >
        <div className="flex w-max animate-ticker font-mono text-[11px] tracking-wider text-[var(--accent)]/70">
          {[...FEED, ...FEED].map((item, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">
              <span className="text-[var(--accent-alt)]">▸</span> {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
