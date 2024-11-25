import Image from "next/image";
import React from "react";
import Pills from "../../Pills";
import ImageComponent, { CardPill } from "../Components";

type BlogBoxP = {
  className?: string;
  imgSrc?: string;
};
const BlogBox = ({ className, imgSrc }: BlogBoxP) => {
  return (
    <div>
      <div
        className={`w-full border border-gray-200 dark:border-[rgba(255,255,255,0.06)] rounded-2xl p-3 bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] ${className}`}
      >
        {/* <Image
          src={imgSrc || "/project-photo.png"}
          alt="project-photo"
          width={700}
          height={700}
          className="rounded-2xl w-full aspect-video min-h-[220px] object-cover"
        /> */}
        <ImageComponent
          imgSrc={imgSrc || "/project-photo.png"}
          aspect={"video"}
        />
        <div className="flex flex-col pt-5 py-3 px-2 text-[17px]">
          <div className="">
            <CardPill>{new Date().toDateString()}</CardPill>
          </div>
          <p className="leading-7 text-heading">Music Player Design</p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
