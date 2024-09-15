import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

const Pills = ({ children, text, className, handleClick }: PillsP) => {
  return (
    <span
      className={`mb-[15px] uppercase inline-flex flex-row gap-2 ${poppins.className} font-light text-[12px] border border-gray-300 dark:border-[rgba(255,255,255,0.09)] py-[2px] px-3 rounded-full w-fit justify-center items-center tracking-widest text-[#646464] dark:text-heading ${className}`}
      onClick={handleClick}
    >
      {children}
      {text}
    </span>
  );
};

export default Pills;
type PillsP = {
  children: React.ReactNode;
  text?: string;
  className?: string;
  handleClick?: () => any;
};
