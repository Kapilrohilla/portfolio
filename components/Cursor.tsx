"use client";
import { useCursor } from "@/contexts/cursor";
import React, { useEffect } from "react";

const Cursor = () => {
  const { isBig } = useCursor();
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let eventListener: any;
    if (cursor) {
      eventListener = document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
          "style",
          `top: ${e.clientY}px; left: ${e.clientX}px;`
        );
      });
    }
    () => {
      if (cursor) {
        removeEventListener("mousemove", eventListener);
      }
    };
  }, []);
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (isBig) {
      cursor?.classList.add("cursor_big");
    } else {
      cursor?.classList.remove("cursor_big");
    }
  }, [isBig]);
  return <div className="cursor"></div>;
};

export default Cursor;
