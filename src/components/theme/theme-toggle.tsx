"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

const getActiveTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getActiveTheme());

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithDevice = () => {
      if (localStorage.getItem("theme")) return;
      document.documentElement.classList.toggle("dark", media.matches);
      document.documentElement.style.colorScheme = media.matches ? "dark" : "light";
      setTheme(media.matches ? "dark" : "light");
    };

    media.addEventListener("change", syncWithDevice);
    return () => media.removeEventListener("change", syncWithDevice);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = getActiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
