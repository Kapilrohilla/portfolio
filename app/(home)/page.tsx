import Form from "@/components/form/MessageForm";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import {
  Book,
  Dumbbell,
  HandCoins,
  Languages,
  Logs,
  Send,
  Settings,
} from "lucide-react";
import Image from "next/image";
import IconBtn from "@/components/IconBtn";
import { plus_jakarta_sans, poppins, roboto } from "@/lib/fonts";
import CheckListItem from "@/components/Lists/CheckListItem";
import PricingBox from "@/components/Box/PricingBox";
import SkillBox from "@/components/Box/SkillBox";
import TechnologiesProgress from "@/components/TechProgress";
import FlagListItem from "@/components/Lists/FlagListItem";
import ServiceBox from "@/components/Box/ServiceBox";
import data from "@/lib/data";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import EmblaCarousel from "@/components/Carousel";
import Cursor from "@/components/Cursor";

export default function Home() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Cursor />
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
          <div className="absolute top-0 flex gap-5 flex-col left-1/2 -translate-x-1/2 w-full">
            <div className="flex flex-gap flex-col md:flex-row md:max-w-[1320px] md:m-auto gap-5">
              {/* about */}
              <div
                className="min-h-[560px] max-h-[750px] max-w-[] px-7 pt-11 flex flex-col bg-white md:rounded-l-3xl md:rounded-br-3xl md:h-[500px] md:w-[300px] lg:w-[320px]"
                id="about"
              >
                <div className="h-fit glitch aspect-[4/3] md:aspect-auto rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px]">
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
                  <Slider texts={data.skills} text_center={true} />
                  <h2 className="text-3xl font-medium">Andrew Ryan</h2>
                  <div className="flex flex-row gap-4 mt-2">
                    {data.icons.map((obj) => (
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
              <div className="md:gap-5 md:flex md:flex-col">
                {/* counter section */}
                <Card className="md:h-[620px] md:py-[80px] gap-4 md:rounded-r-3xl">
                  <div className="flex flex-row tracking-wider text-[18px] font-extralight sm:mb-2 gap-1">
                    <p className="font-normal tracking-wider md:text-2xl ">
                      {"Hello, I'm "}
                    </p>
                    <Slider
                      texts={data.textSkill}
                      textClass={"font-normal tracking-wider"}
                    />
                  </div>
                  <h2
                    className={`font-medium text-[26px] md:text-[52px] md:leading-[1.3] leading-[1.4] ${plus_jakarta_sans.className}`}
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
                    Have worked in a variety of positions, including key
                    developer, solution designer, and data architect. Strong
                    engineering background combined with closely working with
                    business customers.
                  </p>
                  <div className="flex flex-row md:flex-row flex-wrap mt-2">
                    {data.testimonial_count.map((obj, index) => {
                      return (
                        <div
                          className="w-1/2 md:w-1/3 flex flex-row items-center gap-2 md:gap-3 mb-3"
                          key={index}
                        >
                          <span
                            className={`inline-block text-4xl text-[52px] font-normal ${plus_jakarta_sans.className}`}
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
                </Card>
                <Card id="skills" className="gap-16">
                  <SkillBox
                    pillIcon={<Dumbbell className="h-4 w-4" />}
                    pillText="technincal skills"
                    title="technologies"
                    innerClassName="md:flex-row flex-wrap md:gap-6"
                  >
                    {data.technologies.map((tech, index) => (
                      <TechnologiesProgress
                        key={index}
                        text={tech.text}
                        className={"md:w-[48%] "}
                        progress={tech.progress}
                      />
                    ))}
                  </SkillBox>
                  {/* langauges*/}
                  <div className="flex flex-col md:flex-row gap-16 md:gap-[4%]">
                    <SkillBox
                      className="md:w-[48%]"
                      pillIcon={<Languages className="h-4 w-4" />}
                      pillText="languages"
                    >
                      {data.languages.map((language_details, index) => (
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
                      className="md:w-[48%]"
                    >
                      {data.engineering_practices.map((obj, index) => (
                        <CheckListItem
                          check={obj.check}
                          text={obj.text}
                          key={index}
                        />
                      ))}
                    </SkillBox>
                  </div>
                </Card>
                {/* services */}
                <Card className="flex-row flex-wrap">
                  <SkillBox
                    // className="md:flex-wrap w-full"
                    innerClassName="md:flex-wrap md:flex-row"
                    title="What Service i provide ?"
                    pillText="Services"
                    pillIcon={<Settings className="h-4 w-4" />}
                  >
                    {data.service_data.map((service) => (
                      <ServiceBox
                        clasName="md:w-[48%]"
                        key={service.title}
                        img={service.img}
                        body={service.body}
                        linkText={service.link_text}
                        small_title={service.small_title}
                        title={service.title}
                      />
                    ))}
                  </SkillBox>
                </Card>
                {/* pricing */}
                <Card>
                  <SkillBox
                    title="Amazing Pricing For Your Projects"
                    pillText="Pricing"
                    pillIcon={<HandCoins className="h-4 w-4" />}
                  >
                    {data.pricings.map((pricing) => {
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
                </Card>
                <Card>
                  <SkillBox
                    pillText="Projects"
                    title="Explore Portfolio By Technology"
                    pillIcon={<Book className="h-4 w-4" />}
                  >
                    <Nav navs={["all", "python", "js", "node", "bash"]}>
                      <></>
                    </Nav>
                  </SkillBox>
                </Card>
                <Card>
                  <SkillBox
                    pillText="Resume"
                    pillIcon={<Book className="h-4 w-4" />}
                  ></SkillBox>
                </Card>
                <Card>
                  <SkillBox
                    pillText="Courses"
                    pillIcon={<Book className="h-4 w-4" />}
                  ></SkillBox>
                </Card>
                <Card>
                  <SkillBox
                    pillText="TestimonialS"
                    pillIcon={<Book className="h-4 w-4" />}
                    title="Here what my client say"
                  >
                    <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
                    <div className="py-5 px-10 rounded-full border border-gray-200 text-sm font-light leading-5 text-center mt-10 mb-2">
                      More than{" "}
                      <span className="text-primary_green font-normal">
                        200+ companies
                      </span>
                      trust us worldwide
                    </div>
                    <div className="flex flex-row flex-wrap ">
                      {[
                        { imgSrc: "b1" },
                        { imgSrc: "b2" },
                        { imgSrc: "b1" },
                        { imgSrc: "b1" },
                        { imgSrc: "b2" },
                        { imgSrc: "b2" },
                      ].map((_, idx) => {
                        return (
                          <img
                            key={idx}
                            src={`/brands/${_.imgSrc}.png`}
                            width={100}
                            height={100}
                            className="object-contain w-1/2"
                            alt=";"
                          />
                        );
                      })}
                    </div>
                  </SkillBox>
                </Card>
                <Card>
                  <SkillBox
                    pillText="My Blogs"
                    title="Exploring Our Blogs"
                    pillIcon={<Book className="h-4 w-4" />}
                  >
                    <Nav
                      navs={["all", "music", "design", "code"]}
                      blog={true}
                      showMore={true}
                    ></Nav>
                  </SkillBox>
                </Card>
                <Card className="rounded-b-[30px]">
                  <SkillBox
                    pillText="Contact"
                    pillIcon={<Send className="h-4 w-4" />}
                  >
                    <h3
                      className={`font-medium text-2xl ${plus_jakarta_sans.className}`}
                    >
                      Lets get in touch!
                    </h3>
                    {[
                      {
                        title: "Phone",
                        details: "+91 828 784 2425",
                        link: "/icons/phone.svg",
                      },
                      {
                        title: "Email",
                        details: "kapilrohilla2002@gmail.com",
                        link: "/icons/phone.svg",
                      },
                      {
                        title: "Github",
                        details: "https://github.com/kapilrohilla",
                        link: "/icons/phone.svg",
                      },
                    ].map((val, idx) => (
                      <div
                        className="border border-gray-300 rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] p-5"
                        key={idx}
                      >
                        {/* first row */}
                        <div className="flex flex-row gap-4 items-center mb-2">
                          <Image
                            src={"/icons/phone.svg"}
                            alt={"phone icon"}
                            width={34}
                            height={34}
                          />
                          <span className="text-primary_body text-sm">
                            {val.title}
                          </span>
                        </div>
                        <p className="text-primary_body tracking-wider text-sm">
                          {val.details}
                        </p>
                      </div>
                    ))}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.4332587423414!2d77.02054324677752!3d28.482494009192973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19002e2eb101%3A0xf4258d3b7fe80aff!2sS.S.%20Tuition%20Classes!5e0!3m2!1sen!2sin!4v1725161632653!5m2!1sen!2sin"
                      className="aspect-square w-full mt-10 mb-5"
                      loading="lazy"
                    ></iframe>
                    <h3
                      className={`text-[23px] font-medium ${poppins.className} mt-10 mb-5`}
                    >
                      Lets make your project brilliant
                    </h3>
                    <Form className="mb-20" />
                  </SkillBox>
                </Card>
                <Card className="py-2">
                  <p className={`text-sm text-[#7a7a7a] ${roboto.className}`}>
                    © 2024 theme is proudly created by{" "}
                    <span className="text-primary_green">@kapilrohilla</span>{" "}
                  </p>
                </Card>
              </div>
            </div>

            {/* skills */}
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
}
