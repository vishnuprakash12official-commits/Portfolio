"use client";
import Image from "next/image";
import { memo } from "react";
import Marquee from "react-fast-marquee";

const ShowcaseRow = memo(function ShowcaseRow({
  skills,
  reverse,
}: {
  skills: { name: string; img: string }[];
  reverse: boolean;
}) {
  return (
    <div className="relative h-[200px] flex items-center overflow-hidden w-full">
      <Marquee
        gradient={false}
        direction={reverse ? "right" : "left"}
        speed={40}
        pauseOnHover={true}
        className="w-full"
      >
        {skills.map((skill: { name: string; img: string }, index: number) => (
          <div
            key={index}
            className="mx-4 flex flex-col items-center justify-center h-[220px] w-[150px] md:w-[250px] rounded-lg border shadow-md"
            style={{ boxShadow: "0 10px 24px -20px #61cc9c" }}
          >
            <div className="relative h-[180px] w-full">
              <Image
                src={skill.img}
                alt={`${skill.name} logo`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 150px, 250px"
              />
            </div>
            <h1 className="absolute z-10 text-center mt-2 font-semibold text-base md:text-lg">
              {skill.name}
            </h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
});

export default ShowcaseRow;
