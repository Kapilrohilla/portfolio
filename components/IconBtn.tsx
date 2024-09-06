"use client";
import { useCursor } from "@/contexts/cursor";

export interface ChildP {
  children?: React.ReactNode;
  className?: string;
}
const IconBtn = ({ children }: ChildP) => {
  const { isBig, setBig, setSmall } = useCursor();
  return (
    <a
      className="h-[50px] w-[50px] border  flex items-center justify-center rounded-2xl"
      onMouseEnter={() => {
        setBig();
      }}
      onMouseLeave={() => {
        setSmall();
      }}
    >
      {children}
    </a>
  );
};

export default IconBtn;
