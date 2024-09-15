"use client";
import { useDarkMode } from "@/contexts/darkMode";
import { poppins } from "@/lib/fonts";
import Image from "next/image";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularProgressBarWrapper = ({ imgSrc }: { imgSrc?: string }) => {
  const percentage = 66;
  const { isDarkMode } = useDarkMode();
  if (imgSrc) {
    return (
      <div className="w-[161px] h-[161px] p-5 border border-gray-300 dark:border-[rgba(255,255,255,0.06)] rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] relative">
        <CircularProgressbarWithChildren
          value={66}
          className="h-[100px] w-[100px]"
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "#4CAF50",
            textColor: "#4CAF50",
            trailColor: isDarkMode ? "rgba(50,50,50, 1)" : "rgba(0,0,0,0.1)",
          })}
        >
          <Image
            style={{ marginTop: "34px" }}
            width={40}
            height={40}
            src={"/python.png"}
            alt="doge"
          />
          <div style={{ fontSize: 12 }}>
            <strong className={`${poppins.className} text-heading`}>66%</strong>
          </div>
        </CircularProgressbarWithChildren>
        <span
          className={`text-sm text-primary_body absolute left-1/2 translate-x-[-50%] mt-2 ${poppins.className} text-heading`}
        >
          Dbeaver
        </span>
      </div>
    );
  }

  return (
    <div className="min-w-[161px] h-[171px] p-5 border border-gray-300 rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] relative  max-w-[171px] w-full">
      <CircularProgressbar
        value={73}
        className="h-[100px] w-[100px]"
        text="73%"
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#4CAF50",
          textColor: isDarkMode ? "#ffffff" : "#000000aa",
          textSize: "14px",
          trailColor: isDarkMode ? "rgba(50,50,50, 1)" : "rgba(0,0,0,0.1)",
        })}
      />
      <span
        className={`text-sm text-primary_body absolute left-1/2 translate-x-[-50%] mt-2 ${poppins.className} text-heading`}
      >
        Dbeaver
      </span>
    </div>
  );
};

export default CircularProgressBarWrapper;
