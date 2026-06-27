"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#01ﾊﾐABCDEF";

interface DecryptTextProps {
  text: string;
  className?: string;
  /** ms between scramble frames */
  speed?: number;
  /** start when scrolled into view (default) vs immediately */
  onView?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Reveals text with a "decrypting" scramble effect. Each character locks
 * into place left-to-right while the rest keep scrambling.
 */
export default function DecryptText({
  text,
  className = "",
  speed = 35,
  onView = true,
  as = "span",
}: DecryptTextProps) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const total = text.length;
      timer = setInterval(() => {
        const revealed = Math.floor(frame / 2);
        const next = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return text[i];
            return CHARS[(Math.random() * CHARS.length) | 0];
          })
          .join("");
        setDisplay(next);
        frame++;
        if (revealed >= total && timer) {
          clearInterval(timer);
          setDisplay(text);
        }
      }, speed);
    };

    if (!onView) {
      run();
    } else {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(el);
      return () => {
        io.disconnect();
        if (timer) clearInterval(timer);
      };
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [text, speed, onView]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
