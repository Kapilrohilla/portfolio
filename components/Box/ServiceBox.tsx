import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
type ServiceBoxP = {
  img: string;
  small_title: string;
  title: string;
  body: string;
  linkText: string;
  clasName?: string;
};
const ServiceBox = ({
  img,
  small_title,
  title,
  body,
  linkText,
  clasName,
}: ServiceBoxP) => {
  return (
    <div
      className={`border light:border-gray-200 dark:border-[rgba(255,255,255,0.06)] h-[262px] rounded-xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] text-primary_body py-7 px-5 gap-4 flex flex-col ${poppins.className} justify-between first-of-type:mt-6 md:first-of-type:mt-auto ${clasName}`}
      style={{
        background:
          "linear-gradient(120deg,rgba(255,255,255,.08),rgba(255,255,255,0)) !important",
      }}
    >
      <div className="flex flex-row gap-5 h-[50px] w-full ">
        <Image
          src={img}
          alt="service"
          width={50}
          height={50}
          className="aspect-video object-contain h-full"
        />
        <div className="flex flex-col justify-center">
          <p
            className={`text-sm font-extralight  text-[#9c9c9c] ${poppins.className}`}
          >
            {small_title}
          </p>
          <h4 className={`font-medium text-primary ${poppins.className}`}>
            {title}
          </h4>
        </div>
      </div>
      <p
        className={`text-sm text-[#9c9c9c] ${poppins.className} dark:text-[#EAEAEA]`}
      >
        {body}
      </p>
      <Link
        className="underline uppercase text-sm  text-thin tracking-widest"
        href={"/"}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default ServiceBox;
