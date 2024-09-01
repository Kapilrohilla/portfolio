import Image from "next/image";

const FlagListItem = ({
  percent,
  language,
  flag_alt,
  flag_link,
}: {
  percent: number;
  language: string;
  flag_alt: string;
  flag_link: string;
}) => {
  const totalCircle = 10;
  const filledCircle = Math.ceil(percent / totalCircle);
  const unfilledCicle = totalCircle - filledCircle;
  return (
    <div className="flex flex-row gap-3 items-center text-primary_body">
      <div className="flex flex-col justify-center items-center bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] aspect-square w-[58px] p-3 rounded-2xl border border-gray-300">
        <Image
          src={flag_link}
          className="h-full w-full object-contain"
          width={100}
          height={100}
          alt={flag_alt}
        />
      </div>
      <div className="w-full">
        <p className="mb-2 text-sm">{language}</p>
        <div className="flex flex-row gap-2 justify-between w-full items-center">
          <div className="flex flex-row gap-2">
            {[...new Array(filledCircle)].map((_, index) => (
              <div
                className="h-[14px] w-[14px] rounded-full bg-primary_green"
                key={index}
              ></div>
            ))}
            {[...new Array(unfilledCicle)].map((_, idx) => (
              <div
                className="h-[14px] w-[14px] rounded-full bg-[#eee]"
                key={idx}
              ></div>
            ))}
          </div>
          <span className="text-sm">{percent}%</span>
        </div>
      </div>
    </div>
  );
};
export default FlagListItem;
