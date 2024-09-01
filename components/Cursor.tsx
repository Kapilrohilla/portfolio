"use client";
import React, { useEffect } from "react";

const Cursor = () => {
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
  return <div className="cursor"></div>;
};

export default Cursor;
