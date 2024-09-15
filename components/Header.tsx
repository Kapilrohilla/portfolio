"use client";

import {
  Dumbbell,
  EllipsisVertical,
  Mail,
  Menu,
  Moon,
  Sun,
  UserPen,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Slider from "./Slider";
import Link from "next/link";
import { useDarkMode } from "@/contexts/darkMode";

const navItems = [
  {
    id: "1",
    icon: <UserPen className="h-4 w-4 " />,
    active_icon: <UserPen className="h-4 w-4 text-primary_green" />,
    text: "About",
    link: "#about",
  },
  {
    id: "2",
    icon: <Dumbbell className="h-4 w-4 " />,
    active_icon: <Dumbbell className="h-4 w-4 text-primary_green" />,
    text: "SKILLS",
    link: "#skills",
  },
  {
    id: "3",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "SERVICES",
    link: "/",
  },
  {
    id: "4",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "PROJECTS",
    link: "/",
  },
  {
    id: "5",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "RESUME",
    link: "/",
  },
  {
    id: "6",
    icon: <Mail className="h-4 w-4" />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "ARTICLES",
    link: "/",
  },
  {
    id: "7",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "CONTACT",
    link: "/",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active_nav, set_active_nav] = useState(navItems[0].text);
  const skills = ["Data Engineer", "Data Architect", "Software Enignner"];
  return (
    <header className="fixed top-0 w-full md:opacity-0 bg-background  z-40">
      <div className="h-16 py-2.5 px-4">
        {/* left */}
        <div className="flex flex-row  justify-between text-sm items-center">
          <div>
            <h1 className="font-medium mb-1 text-heading">Andrew Ryan</h1>
            <Slider texts={skills} />
          </div>
          {/* right */}
          <div className="flex flex-row gap-3">
            <LightMode />

            <EllipsisVertical className="h-6 w-6 text-primary_body" />
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <X className="h-6 w-6 text-primary_body" />
              ) : (
                <Menu className="h-6 w-6 text-primary_body" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* list  */}
      <div
        className={`absolute bg-background overflow-hidden w-full px-3 transition-all ${
          open ? "animate-slide-open-smooth" : "animate-slide-close-smooth"
        }`}
      >
        <div className="flex flex-col gap-0 h-full">
          {navItems.map((item) => (
            <Link
              onClick={() => {
                set_active_nav(item.text);
                setOpen(false);
              }}
              href={item.link}
              className="flex flex-row items-center py-1 gap-2 border-t-[0.5px] border-[rgb(221 221 221 / var(--tw-bg-opacity))] text-xs font-medium text-heading h-[58px]"
              key={item.id}
            >
              <div
                className="h-10 w-10 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.02)]"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,rgba(255,255,255,.08),rgba(255,255,255,0)) !important",
                }}
              >
                {active_nav === item.text ? item.active_icon : item.icon}
              </div>
              {item.text.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

const LightMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const dom_to_load = isDarkMode ? (
    <Sun className="h-6 w-6 text-primary_body" onClick={toggleDarkMode} />
  ) : (
    <Moon className="h-6 w-6 text-primary_body" onClick={toggleDarkMode} />
  );
  return dom_to_load;
};

export default Header;
