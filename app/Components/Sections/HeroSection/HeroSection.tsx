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



function HeroSection() {

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

  return (
    <HeaderStyled ref={hero}>
    <section className="relative h-full w-full">
      <div className="mt-[7rem] md:mt-[7rem] px-[18rem] mq-sections">
        <div className="gradient-purple mb-4 py-2 px-4 rounded-tl-[12px] rounded-br-[12px]">
          <p className="nav-items font-medium text-white">Job Assistance Provider</p>
        </div>
        <h1 className="text-content text-3xl md:text-6xl">
          Elevate Your Future with Expert Guidance & make your dreams true.
        </h1>
        <div className="mt-6 flex flex-col gap-2 lg:flex-row">
        <div className="">
          <div
            className=""
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/image--hero.jpg"
              alt="hero image"
              width={700}
              height={400}
              className="rounded-lg mt-4 object-cover"
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
          <div className="lg:mt-12 flex flex-col justify-between text-gray-300">
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="text-white text-2xl font-semibold">
                Drive Your Job Search Journey Forward!
              </h3>
              <p>
                Our team of experts is here to elevate your skills, prepare for interview or 
                start any startup. We offer
                a comprehensive range of services designed to help your business
                thrive. We provide opportunities for startups to grow.
              </p>
              <div className="relative cta-button self-start">
                <Link href="#" className="flex items-center gap-4">
                  <span>Explore More</span>
                  {arrowRight}
                  <span className="blob"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
              href="/job"
              className="hidden mouse-animation lg:flex justify-center items-center"
            >
              <Image
                src="/arrow--down-long.svg"
                alt="hero image"
                width={10}
                height={10}
                className="rounded-lg"
              />
            </Link>
      </div>
      </div>
    </section>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
`;

export default HeroSection;