import Image from "next/image";
import React from "react";
import Pills from "../Pills";
import { ArrowRight } from "lucide-react";

const ProjectBox = ({ className, imgSrc }: ProjectP) => {
  return (
    <div
      className={`w-full border h-fit border-gray-200 dark:border-[rgba(255,255,255,0.06)] rounded-2xl p-3 bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] overflow-hidden ${className}`}
    >
      <div className="h-fit w-fit overflow-hidden rounded-2xl relative">
        i
        <Image
          src={imgSrc || "/project-photo.png"}
          alt="project-photo"
          width={700}
          height={700}
          className="rounded-2xl w-full aspect-auto object-cover hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col pt-5 py-3 px-2 text-[17px] gap-2 ">
        <p className="leading-7 pr-[70px] text-heading">
          {"The App Market on Google Play"}
        </p>
        <div className="relative">
          <Pills className="bg-[#64646422] border-none  py-2">Python</Pills>
          <div className="absolute bottom-2 h-[45px] aspect-square bg-black dark:bg-[rgba(255,255,255,0.03)] rounded-full flex justify-center items-center right-0 -rotate-45">
            <ArrowRight strokeWidth={1.3} className="text-white h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
type ProjectP = {
  className?: string;
  imgSrc?: string;
};
