"use client";
import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  /** Lines typed in sequence. */
  lines: string[];
  className?: string;
  /** ms per character */
  speed?: number;
  /** ms pause between lines */
  linePause?: number;
  startDelay?: number;
}

/**
 * Terminal-style sequential typing. Renders each completed line on its own
 * row with the active line getting a blinking caret.
 *
 * Runs the typing pass exactly once per mount. The parent typically passes a
 * fresh `lines` array literal on every render, so we keep the latest value in
 * a ref and intentionally use an empty dependency list to avoid re-typing.
 */
export default function TypeWriter({
  lines,
  className = "",
  speed = 45,
  linePause = 450,
  startDelay = 250,
}: TypeWriterProps) {
  const [done, setDone] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [finished, setFinished] = useState(false);

  // keep latest props without retriggering the effect
  const cfg = useRef({ lines, speed, linePause, startDelay });
  cfg.current = { lines, speed, linePause, startDelay };

  useEffect(() => {
    const { lines, speed, linePause, startDelay } = cfg.current;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(lines);
      setFinished(true);
      return;
    }

    let li = 0;
    let ci = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const typeChar = () => {
      if (li >= lines.length) {
        setFinished(true);
        return;
      }
      const line = lines[li];
      if (ci <= line.length) {
        setCurrent(line.slice(0, ci));
        ci++;
        timers.push(setTimeout(typeChar, speed));
      } else {
        setDone((d) => [...d, line]);
        setCurrent("");
        li++;
        ci = 0;
        timers.push(setTimeout(typeChar, linePause));
      }
    };

    timers.push(setTimeout(typeChar, startDelay));
    return () => timers.forEach(clearTimeout);
    // run once on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      {done.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
      {!finished && (
        <div>
          {current}
          <span className="caret">▋</span>
        </div>
      )}
    </div>
  );
}
