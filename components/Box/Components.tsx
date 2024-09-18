"use client";
import Pills from "@/components/Pills";
import { useCursor } from "@/contexts/cursor";
import Image from "next/image";

type aspect_value = "video" | "auto";

const ImageComponent = ({
  imgSrc,
  aspect,
}: {
  imgSrc: string;
  // aspect: "video" | string;
  aspect: aspect_value;
}) => {
  const { setBig, setSmall } = useCursor();
  return (
    <>
      <div
        className="h-fit w-fit overflow-hidden rounded-2xl relative"
        onMouseEnter={setBig}
        onMouseLeave={setSmall}
      >
        <Image
          src={imgSrc || "/project-photo.png"}
          alt="project-photo"
          width={700}
          height={700}
          className={`rounded-2xl w-full ${aspect === "video" ? "aspect-video" : "aspect-auto"} object-cover hover:scale-105 transition-all `}
          style={{
            transitionDuration: "0.5s",
          }}
        />
      </div>
    </>
  );
};
export default ImageComponent;

export const CardPill = ({ children }: { children: React.ReactNode }) => {
  const { isBig } = useCursor();
  return (
    <Pills
      className={` border-none  py-2  transition-all duration-500 ${isBig ? "bg-primary_green font-semibold" : "bg-[#64646422]"}`}
    >
      {/* Python */}
      {children}
    </Pills>
  );
};
