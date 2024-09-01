import { plus_jakarta_sans } from "@/lib/fonts";
import { ChildP } from "../IconBtn";
import Pills from "../Pills";

interface SkillP extends ChildP {
  pillIcon: React.ReactNode;
  pillText: string;
  title?: string;
}
const SkillBox = ({ children, pillIcon, pillText, title }: SkillP) => {
  return (
    <div className="flex flex-col">
      <Pills text={pillText.toUpperCase()}>{pillIcon}</Pills>
      {title && (
        <h2
          className={`text-[23px] font-normal ${plus_jakarta_sans.className} leading-8`}
        >
          {title.toUpperCase()}
        </h2>
      )}
      <div
        className={`${title ? "mt-[20px]" : "mt-[4px]"} flex flex-col gap-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default SkillBox;
