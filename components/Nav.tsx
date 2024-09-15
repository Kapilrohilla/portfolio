"use client";
import React, { useState } from "react";
import Pills from "./Pills";
import ProjectBox from "./Box/ProjectBox";
import { Button } from "./ui/button";
import { poppins, roboto } from "@/lib/fonts";
import BlogBox from "./Box/BlogBox";
const navs = ["all", "python", "js", "node", "bash"];
type NavP = {
  navs: string[];
  children?: React.ReactNode;
  showMore?: boolean;
  blog?: boolean;
};
const Nav = ({ navs, showMore = false, blog = false }: NavP) => {
  const [active_nav, set_active_nav] = useState("all");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 my-3 items-baseline w-full">
        {navs.map((nav, idx) => {
          return (
            <Pills
              key={idx}
              className={`${active_nav === nav ? "bg-primary_green text-black" : "bg-[#64646411] dark:bg-[rgba(255, 255, 255, 0.03)]"} border-none px-3`}
              handleClick={() => set_active_nav(nav)}
            >
              {nav}
            </Pills>
          );
        })}
      </div>
      <div className="flex flex-col gap-6">
        {[
          {
            id: 1,
            imgSrc: "/project-photo-2.png",
          },
          {
            id: 2,
            imgSrc: "/projects-photo.png",
          },
        ].map((obj) => {
          return blog ? (
            <BlogBox key={obj.id} imgSrc={obj.imgSrc} />
          ) : (
            <ProjectBox imgSrc={obj.imgSrc} key={obj.id} />
          );
        })}
      </div>
      {showMore && (
        <Button
          className={`bg-[#eee] text-black text-sm ${roboto.className} h-[50px] uppercase  min-w-70 gap-2 rounded-full active:bg-[#eee] active:text-primary_green focus:bg-[#eee] w-fit px-6 mt-5 font-extrabold dark:bg-transparent text-heading`}
        >
          LOAD MORE
        </Button>
      )}
    </div>
  );
};

export default Nav;
