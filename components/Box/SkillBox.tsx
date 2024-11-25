import { plus_jakarta_sans } from "@/lib/fonts";
import { ChildP } from "../IconBtn";
import Pills from "../Pills";

interface SkillP extends ChildP {
  pillIcon: React.ReactNode;
  pillText: string;
  title?: string;
  className?: string;
  innerClassName?: string;
}
const SkillBox = ({
  children,
  pillIcon,
  pillText,
  title,
  className,
  innerClassName,
}: SkillP) => {
  return (
    <div
      className={`flex flex-col md:gap-[10px] ${className} bg-none bg-transparent`}
      style={
        {
          // backgroundImage:
          //   "linear-gradient(120deg,rgba(255,255,255,.08),rgba(255,255,255,0)) !important",
        }
      }
    >
      <Pills text={pillText.toUpperCase()}>{pillIcon}</Pills>
      {title && (
        <h2
          className={`text-[22px] md:text-[32px] font-medium ${plus_jakarta_sans.className} leading-8 text-heading`}
        >
          {title}
        </h2>
      )}
      <div
        className={`${title ? "mt-[20px]" : "mt-[4px]"} flex flex-col gap-4 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SkillBox;
