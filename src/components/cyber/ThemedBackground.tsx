"use client";
import { useTheme } from "./ThemeContext";
import CyberBackground from "./CyberBackground";
import HudBackground from "./HudBackground";

/** Renders the backdrop matching the active theme. */
export default function ThemedBackground() {
  const { theme } = useTheme();
  return theme === "hud" ? <HudBackground /> : <CyberBackground />;
}
