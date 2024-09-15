"use client";
import { useDarkMode } from "@/contexts/darkMode";
import React from "react";

const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useDarkMode();
  return <div className={isDarkMode ? "dark" : ""}>{children}</div>;
};

export default DarkModeWrapper;
