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

const navItems = [
  {
    id: "1",
    icon: <UserPen className="h-4 w-4 " />,
    text: "About",
  },
  {
    id: "2",
    icon: <Dumbbell className="h-4 w-4 " />,
    text: "SKILLS",
  },
  {
    id: "3",
    icon: <Mail className="h-4 w-4 " />,
    text: "SERVICES",
  },
  {
    id: "4",
    icon: <Mail className="h-4 w-4 " />,
    text: "PROJECTS",
  },
  {
    id: "5",
    icon: <Mail className="h-4 w-4 " />,
    text: "RESUME",
  },
  {
    id: "6",
    icon: <Mail className="h-4 w-4" />,
    text: "ARTICLES",
  },
  {
    id: "7",
    icon: <Mail className="h-4 w-4 " />,
    text: "CONTACT",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="h-16 py-2.5 px-4">
        {/* left */}
        <div className="flex flex-row  justify-between text-sm items-center">
          <div>
            <h1 className="font-medium mb-1">Andrew Ryan</h1>
            <div className="overflow-hidden h-6 leading-6">
              <div className="overflow-ellipsis flex flex-col animate-text-auto-scroll">
                <p className="font-normal text-primary_green">Data Engineer</p>
                <p className="font-normal text-primary_green">Data Architect</p>
                <p className="font-normal text-primary_green">
                  Software Enignner
                </p>
              </div>
            </div>
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
      {open && (
        <div className="bg-white h-0  w-full px-3">
          <div className="flex flex-col gap-0 h-0">
            {navItems.map((item) => (
              <p
                className="flex flex-row items-center py-1 gap-2 border-t border-t-gray-100 text-xs font-medium"
                key={item.id}
              >
                <div
                  className="h-10 w-10 rounded-full flex justify-center items-center"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.02)",
                  }}
                >
                  {item.icon}
                </div>
                {item.text.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
