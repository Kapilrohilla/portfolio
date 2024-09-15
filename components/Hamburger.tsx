"use client";

import { useCursor } from "@/contexts/cursor";
import { useState } from "react";

const Hamburger = () => {
  const [hovered, setHovered] = useState(false);
  const { isBig, setBig, setSmall } = useCursor();
  return (
    <div
      className="h-[62px] w-[66px] rounded-full bg-background flex items-center justify-center"
      onMouseEnter={() => {
        setHovered(true);
        setBig();
      }}
      onMouseLeave={() => {
        setHovered(false);
        setSmall();
      }}
    >
      {/* hamburger */}
      <div className="flex flex-col gap-1">
        <div
          className={`${hovered ? "w-5" : "w-4"} bg-[#7a7a7a]  dark:bg-heading h-[2px] duration-500`}
        ></div>
        <div className="w-5 bg-[#7a7a7a] dark:bg-heading h-[2px]"></div>
        <div
          className={`${hovered ? "w-5" : "w-3"} bg-[#7a7a7a] dark:bg-heading h-[2px] transition-['width'] duration-500`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
