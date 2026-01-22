"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

// Tailwind-safe hover color map
const hoverBgMap: Record<
    "indigo" | "pink" | "emerald" | "cyan" | "yellow",
    string
> = {
    indigo: "hover:bg-indigo-400",
    pink: "hover:bg-pink-400",
    emerald: "hover:bg-emerald-400",
    cyan: "hover:bg-cyan-400",
    yellow: "hover:bg-yellow-400",
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            sectionRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-20 px-4 md:px-12 bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Skills & Technologies
            </h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Programming Languages */}
                <div
                    ref={(el) => {
                        sectionRefs.current[0] = el;
                    }}
                    className="rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
                        Programming Languages
                    </h3>
                    <SkillGrid
                        skills={["C", "C++", "Java", "Python", "JavaScript"]}
                        color="indigo"
                    />
                </div>

                {/* Frontend */}
                <div
                    ref={(el) => {
                        sectionRefs.current[1] = el;
                    }}
                    className="rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-pink-500/10 to-rose-500/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-pink-400">
                        Frontend Technologies
                    </h3>
                    <SkillGrid
                        skills={[
                            "HTML",
                            "CSS",
                            "React.js",
                            "Tailwind CSS",
                            "Bootstrap",
                        ]}
                        color="pink"
                    />
                </div>

                {/* Backend */}
                <div
                    ref={(el) => {
                        sectionRefs.current[2] = el;
                    }}
                    className="rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-emerald-500/10 to-green-500/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                        Backend Technologies
                    </h3>
                    <SkillGrid skills={["Node.js", "Express.js"]} color="emerald" />
                </div>

                {/* Databases */}
                <div
                    ref={(el) => {
                        sectionRefs.current[3] = el;
                    }}
                    className="rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-cyan-500/10 to-sky-500/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                        Databases
                    </h3>
                    <SkillGrid skills={["MySQL", "MongoDB"]} color="cyan" />
                </div>

                {/* Others */}
                <div
                    ref={(el) => {
                        sectionRefs.current[4] = el;
                    }}
                    className="rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                        Others
                    </h3>
                    <SkillGrid skills={["Git", "GitHub", "Linux"]} color="yellow" />
                </div>
            </div>
        </section>
    );
};

export default Skills;

/* ---------- Reusable Skill Grid ---------- */

const SkillGrid = ({
    skills,
    color,
}: {
    skills: string[];
    color: "indigo" | "pink" | "emerald" | "cyan" | "yellow";
}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
                <div
                    key={skill}
                    className={`
            px-4 py-3 text-center rounded-xl border border-white/10
            bg-white/5 backdrop-blur-sm
            hover:scale-110 ${hoverBgMap[color]}
            hover:text-black
            transition-all duration-300
            cursor-default
          `}
                >
                    {skill}
                </div>
            ))}
        </div>
    );
};
