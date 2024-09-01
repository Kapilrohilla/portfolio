import { poppins } from "@/lib/fonts";
import { Button } from "../ui/button";
import CheckListItem from "../CheckList/CheckListItem";

type PricingBoxP = {
  duration: string;
  amount: number;
  available_content: string[];
  unavailable_content: string[];
};
const PricingBox = ({
  duration,
  amount,
  available_content,
  unavailable_content,
}: PricingBoxP) => {
  return (
    <div
      className={`border border-gray-200 px-5 py-[40px] relative flex flex-col gap-9 ${poppins.className} rounded-xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))]`}
    >
      <div className="flex flex-row items-center justify-between h-[45px]">
        <span className="text-[45px] text-primary_green font-medium">
          ${amount}
        </span>
        <Button className="bg-primary_green rounded-full text-blac text-xs absolute top-[20px] right-5">
          PER {duration.toUpperCase()}
        </Button>
      </div>
      <Button
        variant={"outline"}
        className="rounded-full w-fit py-[10px] px-[25px] border-[#323232] text-[#323232]"
      >
        ORDER NOW
      </Button>
      <div className="flex flex-col gap-3 leading-7">
        {available_content.map((str) => {
          return (
            <CheckListItem check={true} text={str} key={str} gap="gap-2" />
          );
        })}
        {unavailable_content.map((str) => {
          return (
            <CheckListItem
              check={false}
              text={str}
              key={str}
              gap="gap-2"
              className="text-sm leading-7 tracking-wide"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PricingBox;
