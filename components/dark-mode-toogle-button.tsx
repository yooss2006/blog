"use client";

import React from "react";

export default function DarkModeToggleButton() {
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };
  return <button onClick={toggleDarkMode}>다크모드</button>;
}
