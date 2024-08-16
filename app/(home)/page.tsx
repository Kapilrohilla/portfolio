/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  const icons = [
    { id: "1", icon: <Linkedin className="h-4 w-4" /> },
    { id: "2", icon: <Github className="h-4 w-4" /> },
    { id: "3", icon: <Instagram className="h-4 w-4" /> },
    { id: "4", icon: <Twitter className="h-4 w-4" /> },
  ];
  const skills = ["Data Engineer", "Data Architect", "Software Enignner"];
  return (
    <>
      <Header />
      <main className="h-full min-h-screen mt-14">
        <div className="relative h-screen flex gap-10">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bg-light.mp4" type="video/mp4" />
          </video>
          {/* intro image */}
          <div className="absolute top-0 flex gap-5 flex-col">
            <div className="min-h-[560px] max-h-[750px] min-w-[] max-w-[] px-7 pt-11 flex flex-col bg-white">
              <img
                src="profile.jpg"
                alt="something"
                className="bg-cover object-cover aspect-[4/3] rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] max-h-[279px] min-h-[279px]"
              />
              <div className="flex flex-col items-center mt-7 gap-4">
                <Slider texts={skills} text_center={true} />
                <h2 className="text-3xl font-medium">Andrew Ryan</h2>
                <div className="flex flex-row gap-4 mt-2">
                  {icons.map((obj) => (
                    <IconBtn key={obj.id}>{obj.icon}</IconBtn>
                  ))}
                </div>
              </div>
              <div className="self-baseline w-full mt-6">
                <Separator className="h-[1px]  bg-radiant_seperator" />
                <div className="flex h-[70px] w-full">
                  <Button
                    type={"button"}
                    variant={"link"}
                    className="h-full justify-center items-center w-full tracking-wide font-medium text-[14px]"
                  >
                    Download CV
                  </Button>
                  <div className="block h-full w-[1px] bg-[#ddd]"></div>
                  <Button
                    className="h-full justify-center items-center w-full tracking-wide font-medium text-[14px]"
                    type={"button"}
                    variant={"link"}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
            <div className="border flex flex-col border-black h-10 w-full py-10 px-4 bg-white">
              <div className="flex flex-row tracking-wider text-base">
                <span>{"Hello, I'm"}</span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const IconBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <a className="h-[50px] w-[50px] border  flex items-center justify-center rounded-2xl">
      {children}
    </a>
  );
};
