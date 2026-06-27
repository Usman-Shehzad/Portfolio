"use client";
import MatrixRain from "./MatrixRain";

/**
 * Full-page Cyber Terminal atmosphere: base gradient + matrix rain +
 * perspective grid + radial vignette + a slow scanline sweep.
 * Drop this once near the root of a page (it is all fixed + pointer-none).
 */
export default function CyberBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, #0a1622 0%, #030712 60%)",
        }}
      />
      <MatrixRain />
      <div className="cyber-grid" aria-hidden="true" />
      <div className="cyber-vignette" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
    </>
  );
}
