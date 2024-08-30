import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

const Pills = ({ children, text }: PillsP) => {
  //   return <div>Pills</div>;
  return (
    <span
      className={`mb-[15px] uppercase inline-flex flex-row gap-2 ${poppins.className} font-light text-[12px] border border-gray-300 py-[2px] px-3 rounded-full w-fit justify-center items-center tracking-widest text-[#646464]`}
    >
      {children}
      {text}
    </span>
  );
};

export default Pills;
type PillsP = {
  children: React.ReactNode;
  text: string;
};
