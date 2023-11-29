"use client";

import { Moon } from "lucide-react";
import React from "react";

export default function DarkModeToggleButton() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };
  return (
    <button onClick={toggleDarkMode}>
      <Moon className="w-6 h-6" />
    </button>
  );
}
