"use client";

import { useDarkMode } from "@/contexts/darkMode";

const BgVideo = () => {
  const { isDarkMode } = useDarkMode();
  return isDarkMode ? (
    <video
      key={"dark"}
      autoPlay
      muted
      playsInline
      loop
      className="w-full h-full object-cover fixed top-0"
    >
      <source src={"/bg-dark.mp4"} type="video/mp4" />
    </video>
  ) : (
    <video
      autoPlay
      muted
      playsInline
      loop
      key={"light"}
      className="w-full h-full object-cover fixed top-0"
    >
      <source src={"/bg-light.mp4"} type="video/mp4" />
    </video>
  );
};
export default BgVideo;
