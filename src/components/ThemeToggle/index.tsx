"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";

    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-sm font-medium w-full
      text-slate-700 dark:text-slate-300
      hover:bg-slate-200 dark:hover:bg-slate-800
      hover:text-slate-900 dark:hover:text-white"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
    </button>
  );
}
