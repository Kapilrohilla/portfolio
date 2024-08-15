import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  ChevronLast,
  Github,
  Instagram,
  Link,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        {/* intro image */}
        <div className="min-h-[560px] max-h-[620px] min-w-[] max-w-[] p-10 border border-black">
          <img
            src="https://ryancv.bslthemes.com/dataops/wp-content/uploads/sites/20/2024/05/profile.jpg"
            alt="something"
            className="bg-cover object-cover aspect-[4/3] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"
          />
          <div className="flex flex-col items-center mt-7 gap-4">
            <div className="overflow-hidden h-6 leading-6">
              <div className="overflow-ellipsis flex flex-col animate-text-auto-scroll text-center">
                <p className="font-normal text-primary_green">Data Engineer</p>
                <p className="font-normal text-primary_green">Data Architect</p>
                <p className="font-normal text-primary_green">
                  Software Enignner
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold">Andrew Ryan</h2>
            <div className="flex flex-row gap-3">
              <IconBtn>
                <Linkedin className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <Instagram className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <Twitter className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <Github className="h-4 w-4" />
              </IconBtn>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}

const IconBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant={"outline"} size={"icon"} className="rounded-lg">
      {children}
    </Button>
  );
};
