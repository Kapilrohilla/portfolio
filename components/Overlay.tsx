"use client";
import React, { useEffect, useState } from "react";

const Overlay = () => {
  const [isTimedup, setIsTimedUp] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimedUp(true);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="preloader overflow-hidden h-screen w-screen fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="h-screen w-screen z-[99] fixed top-0 bottom-0 left-0 overflow-hidden right-0 bg-[#c6cfc8]">
        <div className="h-1/2 overflow-hidden">
          <div className="bar w-screen relative ">
            circle
            <div className="circle"></div>
            <p className="text-[#c6cfc8]">Loading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
