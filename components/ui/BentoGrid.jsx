import { montserrat_alternates, poppins } from "@/lib/fonts";
import CardCorners from "./CardCorners";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { FaRegCopy } from "react-icons/fa6";
import { PiFilePdfFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { memo, useMemo } from "react";
import {
  DynamicGame,
  DynamicInteractiveGradientBg,
} from "@/lib/dynamic-imports";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const techStack = {
  primary: [
    "React",
    "Next",
    "C++",
    "Node",
    "Mysql",
    "Git",
    "JavaScript",
    "Python",
    "Java",
    "CSS",
  ],
  secondary: [
    "MongoDB",
    "Express",
    "DSA",
    "Jira",
    "JavaScript",
    "Tailwind",
    "TypeScript",
    "GSAP",
    "Maths",
  ],
};

const BentoGrid = memo(function BentoGrid() {
  const renderTechStack = useMemo(
    () => ({
      primary: techStack.primary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm mx-1">
          {item}
        </div>
      )),
      secondary: techStack.secondary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm mx-1">
          {item}
        </div>
      )),
    }),
    []
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-1 w-full flex-1 gap-4">
      <div className="relative flex flex-col items-center p-4 min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          About
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Full Stack Developer</h1>
          <span className="text-gray-400">Lascade</span>
        </div>
        {/* <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Co-Founder</h1>
          <span className="text-gray-400">FunDesigns</span>
        </div> */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/assets/illustration-alt.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className={`flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2`}
      >
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Education
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className={`text-2xl font-bold text-center`}>
            MCA
          </h1>
          <span className="text-center text-gray-400">
            Lucky Institute of Professional Studies Jodhpur
          </span>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/assets/address-illustration.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start p-4 relative min-h-[250px] border bg-black/[20%] border-white/[25%] col-span-2 gap-8">
        <CardCorners />
        <DynamicInteractiveGradientBg />

        <h1
          className={`relative ${montserrat_alternates.className} whitespace-nowrap font-semibold`}
        >
          Tech Stack
        </h1>
        <span className="relative text-base">
          a result of <i>half-a-decade</i> of continuous learning and
          self-improvements
        </span>

        <div
          className="flex flex-col gap-2 mt-auto w-full overflow-hidden"
          style={{
            maskImage: "radial-gradient(circle, black, transparent)",
          }}
        >
          <Marquee>
            <div className="flex justify-between">
              {renderTechStack.primary}
            </div>
          </Marquee>

          <Marquee speed={60}>
            <div className="flex justify-between items-start gap-2 whitespace-nowrap">
              {renderTechStack.secondary}
            </div>
          </Marquee>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center p-4 min-h-[250px] border bg-black/[20%] border-white/[25%] xl:row-span-2 col-span-3">
        <CardCorners />
        <InteractiveGradientBg />

        <h1
          className={`relative ${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-center`}
        >
          @Spotlight
        </h1>

        <Image
          src="/showcase/top100-prize.png"
          alt="Spotlight"
          width={350}
          height={350}
          className="object-contain z-30 relative mt-6 rounded-lg"
        />

        <p className="relative max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center mt-4">
          Become Certified - Web Developer (Fellow)
        </p>
      </div>

      <div className="flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] xl:row-span-2 col-span-3 xl:col-span-2 bg-black/[20%] backdrop-blur-md">
        <CardCorners />

        <span className="mb-4">
          Let&apos;s play a game of{" "}
          <b className={`text-[#61cc9c]`}>Classic Tic Tac Toe 😎</b>
        </span>

        <div className="relative my-auto w-full flex flex-col items-center">
          <DynamicGame />
        </div>
      </div>

      <div className="flex justify-center md:hidden p-4 xl:flex flex-col relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <span className="text-center mx-auto self-center">
          Connect with <em className="text-[#61cc9c]">me</em>
        </span>
        <div className="flex flex-col gap-3 mt-4">
          <FancyButtonAlt icon={<FaRegCopy />} title="Copy Email" />
          <FancyButtonAlt
            link="https://github.com/vishnuprakash12official-commits"
            icon={<FaGithub />}
            title="Github"
          />
          <FancyButtonAlt
            link="https://www.linkedin.com/in/vishnu-prakash-suthar-3679293a7/"
            icon={<FaLinkedin />}
            title="Linkedin"
          />
        </div>
      </div>

      <div className="justify-center p-4 md:flex flex-col col-span-2 lg:col-span-1 relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <h1 className="mx-auto">Download Resume</h1>
        <div className="flex-1 w-[40%] md:w-[50%] lg:w-[73%] mt-1 mb-0 mx-auto">
          <Image
            src="/assets/res_illustration.png"
            alt="Resume illustration"
            width={300}
            height={150}
            className="mx-auto h-auto max-h-[150px] object-cover object-top"
          />
        </div>

        <Link
          target="_blank"
          href="/resume.pdf"
          download={true}
          className="flex flex-col mt-auto"
        >
          <FancyButtonAlt icon={<PiFilePdfFill />} title="Download" />
        </Link>
      </div>

      <div className="hidden lg:hidden justify-center md:flex p-4 flex-col col-span-4 relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <span className="text-center mx-auto self-center">
          Connect with <em className="text-[#61cc9c]">me</em>
        </span>
        <div className="flex flex-col gap-3 mt-4">
          <FancyButtonAlt icon={<FaRegCopy />} title="Copy Email" />
          <FancyButtonAlt
            link="https://github.com/vishnuprakash12official-commits"
            icon={<FaGithub />}
            title="Github"
          />
          <FancyButtonAlt
            link="https://www.linkedin.com/in/vishnu-prakash-suthar-3679293a7/"
            icon={<FaLinkedin />}
            title="Linkedin"
          />
        </div>
      </div>
    </div>
  );
});

export default BentoGrid;
