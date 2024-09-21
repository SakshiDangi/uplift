"use client";
import { arrowRight, email, phone, search } from "@/utils/Icons";
import { navLinks } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import hover3d from "../../../../utils/hover"; //hover effect
import { useRef } from "react";
import styled from "styled-components";



function NavSection() {

  const hero = useRef<HTMLDivElement>(null);
  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  const arr = Array(4).fill(0);
  const [navOpen, setNavOpen] = React.useState(false);

  const navX = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <HeaderStyled ref={hero}>
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-[-120px] md:top-0 flex justify-evenly z-[-1]">
        {arr.map((_, i) => {
          return (
            <div key={i} className="relative w-[1px] h-full bg-2">
              <span className="absolute bottom-0 w-2 h-2 bg-colour-2 left-0 translate-x-[-50%] rounded-full"></span>
            </div>
          );
        })}
      </div>

      <nav
        className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadown-none flex items-center justify-between bg-1
        border-b border-colour-1 mq-sections"
      >
        <div className="flex items-center lg:py-0">
          <Image
            src="/thecodedealer--logo-white.png"
            alt="logo"
            width={80}
            height={80}
          />
          <h1>Uplift</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-6 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
              <li key={i}
              className="hover:text-purple-500 transition-all duration-200 ease-in-out">
                <Link href={link.url} className="p-4">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden lg:inline-block py-6 px-10 text-2xl text-gray-400 border-x border-colour-1 hover:bg-2 transition-all duration-200 ease-in-out">
          {search}
        </button>

        {/* Burger Menu for smaller screens */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
          <div className="w-8 h-1 bg-purple-500 rounded-md"></div>
        </div>
      </nav>

      {/* Nav For Smaller Screens */}
      <motion.div
        className="px-8 fixed z-50 flex flex-col gap-8 left-0 top-0 w-[18rem] h-[100vh] bg-2 lg:hidden"
        initial="hidden"
        animate={navOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        variants={navX}
      >
        <div className="flex items-center gap-2 py-5 lg:py-0">
          <Image
            src="/thecodedealer--logo-white.png"
            alt="logo"
            width={60}
            height={60}
          />
          <h1>Uplift</h1>
        </div>
        <nav className="bg-3 px-4 py-4 rounded-md">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    href={link.url}
                    className="inline-block w-full
                  hover:text-purple-500 transition-all duration-200 ease-in-out"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lex flex-col gap-2">
          <p className="flex items-center gap-2 text-gray-300 font-medium">
            {phone}
            +91 123 456 7890
          </p>
          <p className="flex items-center gap-2 text-gray-300 font-medium">
            {email}
            uplift@gmail.com
          </p>
        </div>
      </motion.div>
    </section>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
`;

export default NavSection;