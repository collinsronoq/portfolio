"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme =
      stored === "dark" || stored === "light" ? stored : "light";

    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  // const buttonLabel = theme === "dark" ? "Light" : "Dark";
  // const ariaLabel =
  //   theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    // <button
    //   type="button"
    //   onClick={handleToggle}
    //   aria-label={ariaLabel}
    //   aria-pressed={theme === "dark"}
    //   className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 font-mono hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700"
    // >
    //   {buttonLabel}
    // </button>
    <button
      type="button"
      onClick={handleToggle}
      className="px-2 py-2 text-gray-600 dark:text-gray-300"
    >
      {theme == "light" ? (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-icon lucide-sun  w-4 h-4 md:w-6 md:h-6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
          </svg>
        </div>):
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon w-4 h-4 md:w-6 md:h-6"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
        </div>
      }
    </button>
  );
}
