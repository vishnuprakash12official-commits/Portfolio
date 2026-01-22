"use client";

import { projects } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      id="projects"
      className="relative w-full py-20 bg-black text-white px-4 md:px-10"
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#61cc9c]">
          Work
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Recent Projects
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#61cc9c]/50 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Tech Stack Overlay on Image */}
        {/* <div className="absolute bottom-4 left-4 flex gap-2">
          {project.techs.slice(0, 4).map((tech: string, i: number) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 p-1.5"
            >
              <img src={tech} alt="tech" className="w-full h-full object-contain" />
            </div>
          ))}
        </div> */}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#61cc9c] transition-colors">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-6 flex-grow">{project.description}</p>

        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300"
        >
          View Project <FaArrowRight className="text-[#61cc9c]" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
