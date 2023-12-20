"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  function toggleTheme() {
    isDarkMode ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="fixed bottom-0 right-0 px-4 py-4 justify-end sm:sticky sm:px-0 xl:fixed xl:px-4 flex">
      <button
        className={`rounded-full w-fit shadow-xl backdrop-blur-sm ${
          isDarkMode
            ? "bg-primary/50 sm:hover:bg-accent/50"
            : "bg-accent/50 sm:hover:bg-primary/50"
        }`}
        onClick={toggleTheme}
        aria-label="toggle dark mode"
      >
        <div className="p-4 text-2xl text-background/75 sm:hover:rotate-45">
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </button>
    </div>
  );
}

export default ThemeModeToggle;
