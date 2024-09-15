import Image from "next/image";
import { Progress } from "./ui/progress";
import { poppins } from "@/lib/fonts";

type TechProgressP = {
  text: string;
  progress: number;
  className?: string;
};
const TechnologiesProgress = ({ text, progress, className }: TechProgressP) => {
  return (
    <div
      className={`px-5 pt-5 border border-gray-300 dark:border-[rgba(255,255,255,0.06)] bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] rounded-2xl ${className}`}
    >
      <div
        className={`flex flex-row justify-between ${poppins.className} mb-5`}
      >
        <div className="flex flex-row gap-2 items-center text-sm">
          <Image width={42} height={42} src="/python.png" alt="python" />
          <p className="text-[#646464] dark:text-heading">{text}</p>
        </div>
        <span
          className={`text-primary_body py-1 px-2 border border-gray-300 dark:border-[rgba(255,255,255,0.29)] rounded-full h-fit text-xs `}
        >
          {progress}%
        </span>
      </div>
      <Progress value={progress} className="h-[3px] w-full bg-[#0000001f]" />
    </div>
  );
};

export default TechnologiesProgress;
