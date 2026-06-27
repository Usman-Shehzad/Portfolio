"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight matrix-rain canvas. Draws on a single 2D canvas with a
 * trailing fade, throttled to ~24fps, and pauses when the tab is hidden
 * or the user prefers reduced motion. Sits fixed behind all content.
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs = "01<>/{}[]#$%&*+=ﾊﾐﾋｰｳｼﾅﾉﾈﾀﾇ01ABCDEF";
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((height / fontSize) * Math.random())
      );
    };
    setup();

    let raf = 0;
    let last = 0;
    const interval = 1000 / 24; // throttle

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < interval) return;
      last = now;

      // trailing fade
      ctx.fillStyle = "rgba(3, 7, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px var(--font-geist-mono, monospace)`;

      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[(Math.random() * glyphs.length) | 0];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // brighter "head" glyph, dimmer trail
        if (Math.random() > 0.975) {
          ctx.fillStyle = "rgba(167, 243, 208, 0.9)";
        } else {
          ctx.fillStyle = "rgba(34, 211, 238, 0.45)";
        }
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => setup();
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 opacity-[0.35]"
    />
  );
}
