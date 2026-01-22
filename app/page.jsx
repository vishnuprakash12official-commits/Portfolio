import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Hero from "@/components/Hero";
import PatternBackground from "@/components/ui/PatternBackground";
import SplineScene from "@/components/SplineScene";
import About from "@/components/About";
import Biography from "@/components/Biography";
import Projects from "@/components/Projects";
// import ShowcaseMarque from "@/components/Showcase";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "@/components/Skills";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar />
      <PatternBackground />
      <Spotlight className="-top-8 -left-12 h-[500px] md:h-[700px] md:left-40 lg:left-64" />
      <Spotlight
        className="top-16 -left-16 h-[450px] md:h-[600px] md:-left-8"
        fill="#61CC9C"
      />
      <ScrollIndicator />
      <Hero />
      <SplineScene />
      <About />
      <Biography />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
