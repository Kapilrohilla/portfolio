"use client";
import { createContext, useContext, useState } from "react";

interface isDarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode?: () => void;
}
const isDarkModeContext = createContext<isDarkModeContext>({
  isDarkMode: false,
});

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <isDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </isDarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(isDarkModeContext);
export default DarkModeProvider;
