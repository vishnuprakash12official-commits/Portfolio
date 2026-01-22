"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/vishnuprakash12official-commits",
      color: "hover:bg-[#333]",
      text: "Follow on GitHub",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vishnu-prakash-suthar-3679293a7/", // Or personal if updated
      color: "hover:bg-[#0077b5]",
      text: "Connect on LinkedIn",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com/_creative_ambition/",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
      text: "Follow on Instagram",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      href: "https://twitter.com/", // Placeholder, update if user provides
      color: "hover:bg-black border border-white/10",
      text: "Follow on X",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      href: "mailto:vishnuprakash12.official@gmail.com",
      color: "hover:bg-[#EA4335]",
      text: "Send an Email",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 bg-black text-white px-4 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6"
        >
          Let&apos;s work together.
        </h2>
        <p
          ref={textRef}
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto"
        >
          Creating unique digital experiences. Reach out for collaborations or just say hi.
        </p>

        <div
          ref={linksRef}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className={`group relative flex items-center gap-3 px-6 py-4 rounded-full bg-neutral-900 border border-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${link.color}`}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              <span className="font-medium hidden md:block">{link.name}</span>

              {/* Tooltip-like text on hover for mobile could be added, but keeping cleaner */}
            </Link>
          ))}
        </div>
      </div>

      {/* <footer className="absolute bottom-6 text-sm text-neutral-600">
        &copy; {new Date().getFullYear()} Creative Ambition. All rights reserved.
      </footer> */}
    </section>
  );
};

export default Contact;
