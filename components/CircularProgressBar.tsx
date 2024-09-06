"use client";
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
  if (imgSrc) {
    return (
      <div className="w-[161px] h-[161px] p-5 border border-gray-300 rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] relative">
        <CircularProgressbarWithChildren
          value={66}
          className="h-[100px] w-[100px]"
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "#4CAF50",
            textColor: "#4CAF50",
            trailColor: "rgba(0,0,0,0.1)",
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
            <strong className={`${poppins.className}`}>66%</strong>
          </div>
        </CircularProgressbarWithChildren>
        <span
          className={`text-sm text-primary_body absolute left-1/2 translate-x-[-50%] mt-2 ${poppins.className}`}
        >
          Dbeaver
        </span>
      </div>
    );
  }

  return (
    <div className="w-[161px] h-[161px] p-5 border border-gray-300 rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] relative">
      <CircularProgressbar
        value={73}
        className="h-[100px] w-[100px]"
        text="73%"
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#4CAF50",
          textColor: "#000000aa",
          textSize: "14px",
          trailColor: "rgba(0,0,0,0.1)",
        })}
      />
      <span
        className={`text-sm text-primary_body absolute left-1/2 translate-x-[-50%] mt-2 ${poppins.className}`}
      >
        Dbeaver
      </span>
    </div>
  );
};

export default CircularProgressBarWrapper;
