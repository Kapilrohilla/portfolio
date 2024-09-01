import { poppins } from "@/lib/fonts";
import { Poppins } from "next/font/google";
import Image from "next/image";

type CheckListItemP = {
  check: boolean;
  text: string;
  gap?: "gap-3" | "gap-2";
  className?: string;
};
const CheckListItem = ({
  check,
  text,
  gap = "gap-3",
  className = "",
}: CheckListItemP) => {
  return (
    <div
      className={`flex flex-row ${gap} items-center text-sm ${poppins.className} ${className} `}
    >
      {/* <Check className={`w-4 h-4 text-primary_green font-bold`} /> */}
      <Image src="/tick_icon.svg" alt="tick" width={20} height={20} />
      <p className={`text-primary_body ${!check && "line-through"} `}>{text}</p>
    </div>
  );
};
export default CheckListItem;
