"use client";
import React, { createContext, useContext, useState } from "react";

interface CursorContext {
  isBig: boolean;
  setBig: () => void;
  setSmall: () => void;
}
const cursorContext = createContext<CursorContext>({
  isBig: false,
  setBig: () => {},
  setSmall: () => {},
});

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBig, setIsBig] = useState(false);
  const handleBigCursor = () => {
    setIsBig(true);
  };
  const handleSmallCursor = () => {
    setIsBig(false);
  };
  return (
    <cursorContext.Provider
      value={{ isBig, setBig: handleBigCursor, setSmall: handleSmallCursor }}
    >
      {children}
    </cursorContext.Provider>
  );
};

export const useCursor = () => useContext(cursorContext);
export default CursorProvider;
