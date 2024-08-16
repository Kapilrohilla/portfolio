"use client";

import {
  Dumbbell,
  EllipsisVertical,
  Mail,
  Menu,
  Moon,
  UserPen,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Slider from "./Slider";

const navItems = [
  {
    id: "1",
    icon: <UserPen className="h-4 w-4 " />,
    active_icon: <UserPen className="h-4 w-4 text-primary_green" />,
    text: "About",
  },
  {
    id: "2",
    icon: <Dumbbell className="h-4 w-4 " />,
    active_icon: <Dumbbell className="h-4 w-4 text-primary_green" />,
    text: "SKILLS",
  },
  {
    id: "3",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "SERVICES",
  },
  {
    id: "4",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "PROJECTS",
  },
  {
    id: "5",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "RESUME",
  },
  {
    id: "6",
    icon: <Mail className="h-4 w-4" />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "ARTICLES",
  },
  {
    id: "7",
    icon: <Mail className="h-4 w-4 " />,
    active_icon: <Mail className="h-4 w-4 text-primary_green" />,
    text: "CONTACT",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active_nav, set_active_nav] = useState(navItems[0].text);
  const skills = ["Data Engineer", "Data Architect", "Software Enignner"];
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="h-16 py-2.5 px-4">
        {/* left */}
        <div className="flex flex-row  justify-between text-sm items-center">
          <div>
            <h1 className="font-medium mb-1">Andrew Ryan</h1>
            <Slider texts={skills} />
          </div>
          {/* right */}
          <div className="flex flex-row gap-3">
            <Moon className="h-6 w-6 text-primary_body" />
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
        className={`absolute bg-white overflow-hidden w-full px-3 transition-all ${
          open ? "animate-slide-open-smooth" : "animate-slide-close-smooth"
        }`}
      >
        <div className="flex flex-col gap-0 h-full">
          {navItems.map((item) => (
            <button
              onClick={() => set_active_nav(item.text)}
              className="flex flex-row items-center py-1 gap-2 border-t border-t-gray-100 text-xs font-medium"
              key={item.id}
            >
              <div
                className="h-10 w-10 rounded-full flex justify-center items-center"
                style={{
                  backgroundColor: "rgba(0,0,0,0.02)",
                }}
              >
                {active_nav === item.text ? item.active_icon : item.icon}
              </div>
              {item.text.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
