"use client";
import { Moon, Sun, UserPenIcon } from "lucide-react";
import React from "react";
import Hamburger from "@/components/Hamburger";
import { useDarkMode } from "@/contexts/darkMode";
import { useCursor } from "@/contexts/cursor";

const DesktopNav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { setBig, setSmall } = useCursor();
  return (
    <div
      className="h-fit order md:flex flex-col gap-2 hidden "
      style={{ position: "sticky", top: "10px" }}
    >
      <Hamburger />
      <CenterCircle>
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-heading" onClick={toggleDarkMode} />
        ) : (
          <Moon className="stroke-[1] text-heading " onClick={toggleDarkMode} />
        )}
      </CenterCircle>
      <div
        className="flex flex-col
      //  bg-background
       rounded-full items-center py-4 gap-4"
      >
        {[
          {
            content: <UserPenIcon className=" w-4 h-4 text-heading" />,
            id: "icon",
          },
          {
            content: <UserPenIcon className=" w-4 h-4 text-heading" />,
            id: "icon",
          },
          {
            content: <UserPenIcon className=" w-4 h-4 text-heading" />,
            id: "icon",
          },
          {
            content: <UserPenIcon className=" w-4 h-4 text-heading" />,
            id: "icon",
          },
          {
            content: <UserPenIcon className=" w-4 h-4 text-heading" />,
            id: "icon",
          },
        ].map((obj) => (
          <div
            key={obj.id}
            className="h-12 w-12 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.02)]"
            onMouseEnter={setBig}
            onMouseLeave={setSmall}
          >
            {obj.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;

const CenterCircle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[62px] w-[62px] rounded-full bg-background flex justify-center items-center">
      {children}
    </div>
  );
};
