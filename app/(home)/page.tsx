import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import Pills from "@/components/Pills";
import Slider from "@/components/Slider";
// import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@radix-ui/react-separator";
import {
  Book,
  Check,
  Dumbbell,
  Github,
  HandCoins,
  Instagram,
  Languages,
  Linkedin,
  Logs,
  Settings,
  Twitter,
} from "lucide-react";
import { Plus_Jakarta_Sans, Roboto, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin-ext"],
});
const skills = ["Data Engineer", "Data Architect", "Software Enignner"];
const textSkill = ["Data Architect", "Software Enignner"];
const testimonial_count = [
  {
    count: "96",
    text: (
      <p>
        Completed
        <br /> Projects
      </p>
    ),
  },
  {
    count: "8",
    text: (
      <p>
        Years <br /> of Experience
      </p>
    ),
  },
  {
    count: "10+",
    text: <p>Awards Winning</p>,
  },
];
const technologies = [
  {
    text: "Python",
    progress: 96,
  },
  {
    text: "PostgressSQL",
    progress: 85,
  },
  {
    text: "DBeaver",
    progress: 20,
  },
  {
    text: "Cloud: AWS",
    progress: 75,
  },
];
const languages = [
  {
    flag: "/spain_flag.png",
    language: "English",
    progress: 90,
  },
  {
    flag: "/spain_flag.png",
    language: "Spanish",
    progress: 60,
  },
  {
    flag: "/spain_flag.png",
    language: "Italian",
    progress: 30,
  },
  {
    flag: "/spain_flag.png",
    language: "French",
    progress: 70,
  },
];
const icons = [
  { id: "1", icon: <Linkedin className="h-4 w-4" /> },
  { id: "2", icon: <Github className="h-4 w-4" /> },
  { id: "3", icon: <Instagram className="h-4 w-4" /> },
  { id: "4", icon: <Twitter className="h-4 w-4" /> },
];

const engineering_practices = [
  {
    check: true,
    text: "Data Analytics Engineering",
  },
  {
    check: true,
    text: "Oracle SQL",
  },
  {
    check: false,
    text: "Data Integration",
  },
  {
    check: false,
    text: "Data Generation",
  },
  {
    check: false,
    text: "Data Analytics Engineering",
  },
];
const service_data = [
  {
    img: "/service_icon.png",
    small_title: "2 Developers",
    title: "ETL Design",
    body: "Data models in SAP PowerDesigner ETL process design & implementation: Apache Airflow / AWS / Python.",
    link_text: "get started",
  },
  {
    img: "/service_icon.png",
    small_title: "5 Developers",
    title: "ETL Development",
    body: "ETL pipelines according to the DWH design and architecture (Azure Synapse, Databricks, Azure DevOps).",
    link_text: "get started",
  },
  {
    img: "/service_icon.png",
    small_title: "5 Developers",
    title: "ETL Development",
    body: "ETL pipelines according to the DWH design and architecture (Azure Synapse, Databricks, Azure DevOps).",
    link_text: "get started",
  },
];
const pricings = [
  {
    amount: 29,
    duration: "Hour",
    available: [
      "Create data models in SAP PowerDesigner",
      "Preparation and participation in POCs and demos",
    ],
    unavailable: [
      "Development and implementation of ETL pipelines",
      "Extended Support 6 months",
    ],
  },
  {
    amount: 119,
    duration: "Day",
    available: [
      "Create data models in SAP PowerDesigner",
      "Preparation and participation in POCs and demos",
      "Development and implementation of ETL pipelines",
      "Extended Support 6 months",
    ],
    unavailable: [],
  },
];
const timelineData = [
  {
    id: 1,
    title: "First event",
    date: "2022-01-01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
  },
  {
    id: 2,
    title: "Second event",
    date: "2022-02-01",
    description:
      "Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
  },
  {
    id: 3,
    title: "Third event",
    date: "2022-03-01",
    description:
      "Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full  min-h-screen mt-14">
        <div className="relative h-screen flex gap-10">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover fixed top-0"
          >
            <source src="/bg-light.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 flex gap-5 flex-col max-w-[480px] left-1/2 -translate-x-1/2 w-full">
            {/* about */}
            <div
              className="min-h-[560px] max-h-[750px] min-w-[] max-w-[] px-7 pt-11 flex flex-col bg-white"
              id="about"
            >
              <div className="h-fit w-fit glitch max-h-[279px] min-h-full aspect-[4/3] rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px]">
                <img
                  src="profile.jpg"
                  alt="something"
                  className="object-cover w-full h-full "
                />
                <div className="glitch__layers">
                  <div className="glitch__layer"></div>
                  {/* <div className="glitch__layer"></div> */}
                </div>
              </div>
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
                    className="h-full justify-center items-center w-full tracking-wide font-medium text-[14px] hover:no-underline active:bg-slate-300"
                  >
                    Download CV
                  </Button>
                  <div className="block h-full w-[1px] bg-[#ddd]"></div>
                  <Button
                    className="h-full justify-center items-center w-full tracking-wide font-medium text-[14px] hover:no-underline"
                    type={"button"}
                    variant={"link"}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col  h-full w-full py-10 bg-white px-7 leading-5 ">
              <div className="flex flex-row tracking-wider text-[18px] font-extralight mb-2 gap-1">
                <p className="font-normal tracking-wider ">{"Hello, I'm "}</p>
                <Slider
                  texts={textSkill}
                  textClass={"font-normal tracking-wider"}
                />
              </div>
              <h2
                className={`font-medium text-[26px] leading-[1.4] ${plus_jakarta_sans.className}`}
              >
                Senior Data Engineer and{"        "}
                <span className="px-[10px] inline-block bg-primary_green rounded-2xl rotate-[-2deg]">
                  Data Scientist
                </span>
                {"        "}
                Based in California, Los Angles
              </h2>
              <p
                className={`mt-[30px] text-primary_body text-sm leading-[1.7] ${poppins.className}`}
              >
                Have worked in a variety of positions, including key developer,
                solution designer, and data architect. Strong engineering
                background combined with closely working with business
                customers.
              </p>
              <div className="flex flex-row flex-wrap mt-2">
                {testimonial_count.map((obj, index) => {
                  return (
                    <div
                      className="w-1/2 flex flex-row items-center gap-2 mb-3"
                      key={index}
                    >
                      <span
                        className={`inline-block text-4xl font-normal ${plus_jakarta_sans.className}`}
                      >
                        {obj.count}
                      </span>
                      <span
                        className={`inline-block text-[14px] leading-[1.7] text-primary_body ${roboto.className}`}
                      >
                        {obj.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* skills */}
            <div
              className="flex flex-col h-full w-full pt-10 pb-20 bg-white px-7 leading-5 gap-16"
              id="skills"
            >
              <SkillBox
                pillIcon={<Dumbbell className="h-4 w-4" />}
                pillText="technincal skills"
                title="technologies"
              >
                {technologies.map((tech, index) => (
                  <TechnologiesProgress
                    key={index}
                    text={tech.text}
                    progress={tech.progress}
                  />
                ))}
              </SkillBox>
              {/* langauges*/}
              <SkillBox
                pillIcon={<Languages className="h-4 w-4" />}
                pillText="languages"
              >
                {languages.map((language_details, index) => (
                  <FlagListItem
                    key={index}
                    language={language_details.language}
                    percent={language_details.progress}
                    flag_alt={language_details.language}
                    flag_link={language_details.flag}
                  />
                ))}
              </SkillBox>
              {/* enginnering practices */}
              <SkillBox
                pillIcon={<Logs className="w-4 h-4" />}
                pillText="Engineering Practices"
              >
                {engineering_practices.map((obj, index) => (
                  <CheckListItem
                    check={obj.check}
                    text={obj.text}
                    key={index}
                  />
                ))}
              </SkillBox>
            </div>
            {/* services */}
            <div className="flex flex-col h-full w-full py-10 bg-white px-7 leading-5">
              <SkillBox
                title="What Service i provide ?"
                pillText="Services"
                pillIcon={<Settings className="h-4 w-4" />}
              >
                {service_data.map((service) => (
                  <ServiceBox
                    key={service.title}
                    img={service.img}
                    body={service.body}
                    linkText={service.link_text}
                    small_title={service.small_title}
                    title={service.title}
                  />
                ))}
              </SkillBox>
            </div>
            {/* pricing */}
            <div className="flex flex-col h-full w-full py-10 bg-white px-7 leading-5">
              <SkillBox
                title="Amazing Pricing For Your Projects"
                pillText="Pricing"
                pillIcon={<HandCoins className="h-4 w-4" />}
              >
                {pricings.map((pricing) => {
                  return (
                    <PricingBox
                      amount={pricing.amount}
                      duration={pricing.duration}
                      key={pricing.amount}
                      available_content={pricing.available}
                      unavailable_content={pricing.unavailable}
                    />
                  );
                })}
              </SkillBox>
            </div>
            <div className="flex flex-col h-full w-full py-10 bg-white px-7 leading-5">
              <SkillBox
                pillText="Education"
                pillIcon={<Book className="h-4 w-4" />}
              >
                {/* {
                  // timelineData.map((obj)=>{
                  //   return (
                  <TimelineLayout key={"som"} items={timelineData} />
                  // )
                  // })
                } */}
              </SkillBox>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

interface ChildP {
  children?: React.ReactNode;
}
const IconBtn = ({ children }: ChildP) => {
  return (
    <a className="h-[50px] w-[50px] border  flex items-center justify-center rounded-2xl">
      {children}
    </a>
  );
};

type TechProgressP = {
  text: string;
  progress: number;
};
const TechnologiesProgress = ({ text, progress }: TechProgressP) => {
  return (
    <div className="px-5 pt-5 border border-gray-300 bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] rounded-2xl">
      <div
        className={`flex flex-row justify-between ${poppins.className} mb-5`}
      >
        <div className="flex flex-row gap-2 items-center text-sm">
          <Image width={42} height={42} src="/python.png" alt="python" />
          <p className="text-[#646464]">{text}</p>
        </div>
        <span
          className={`text-primary_body py-1 px-2 border border-gray-300 rounded-full h-fit text-xs `}
        >
          {progress}%
        </span>
      </div>
      <Progress value={progress} className="h-[3px] w-full bg-[#0000001f]" />
    </div>
  );
};
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
type ServiceBoxP = {
  img: string;
  small_title: string;
  title: string;
  body: string;
  linkText: string;
};
const ServiceBox = ({
  img,
  small_title,
  title,
  body,
  linkText,
}: ServiceBoxP) => {
  return (
    <div
      className={`border border-gray-200 h-[262px] rounded-xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] text-primary_body py-7 px-5 gap-4 flex flex-col ${poppins.className} justify-between first-of-type:mt-6`}
    >
      <div className="flex flex-row gap-4 h-[50px] w-full ">
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
      <p className={`text-xs text-[#9c9c9c] ${poppins.className} `}>{body}</p>
      <Link
        className="underline uppercase text-xs  text-thin tracking-widest"
        href={"/"}
      >
        {linkText}
      </Link>
    </div>
  );
};
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
