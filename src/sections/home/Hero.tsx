import React from "react";
import Image from "next/image";
import { FaRocket, FaChartLine } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        className="-z-10 bg-cover bg-center h-[95vh]"
        style={{ backgroundImage: "url('/hero-buildings.png')" }}
      >
        <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="relative z-50 flex flex-col items-center pt-36 text-center h-full text-white px-4">
          <div className="flex flex-col h-full px-8 items-center">
            <div className="relative rounded-full transition px-3 py-1 text-xs md:text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20">
              Leading the Way in E-commerce Excellence.{" "}
              <a href="#" className="font-semibold text-white">
                <span aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <h1 className="w-[16ch] home-heading font-instrument mt-12 mb-16 ">
              Amazon Partners. Redefined.
            </h1>
            <div className="flex flex-wrap relative z-100 items-center gap-6 mb-12">
              <Link href="/how-it-works">
                <Button>How It Works</Button>
              </Link>
              <Link href="/contact">
                <Button dark>Contact Us</Button>
              </Link>
            </div>
            <div className="pt-12 pb-8 md:pt-6 flex justify-center space-x-6 w-full md:space-x-12 text-white/70 text-sm">
              <div className="flex flex-col md:flex-row md:w-full w-[14ch] items-center gap-3">
                <FaRocket /> <span>Online Sales Growth</span>
              </div>
              <div className="flex flex-col md:flex-row md:w-full w-[14ch] items-center gap-3">
                <FaChartBar /> <span>40% Conversion Rate Boost</span>
              </div>
              <div className="flex flex-col  md:flex-row md:w-full w-[14ch] items-center gap-3">
                <FaChartLine /> <span>278% Session Growth</span>
              </div>
            </div>
          </div>
          <div className="h-[1px] mb-24 max-w-screen-2xl w-full bg-white/50"></div>
        </div>
      </section>
      <div className="relative  text-white px-8 pb-72 pt-48">
        <Image src="/hero-bg-color.png" className="-z-10" alt="Color Bg" fill />
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-1 gap-6 md:gap-10 items-start flex-col">
            <h2>Why Us?</h2>
            <Link href="/about">
              <Button>About Us</Button>
            </Link>
          </div>
          <div className="flex flex-1 mt-12 md:mt-0 gap-8 md:gap-20 flex-col">
            <p className="md:w-[85%]">
              At Brady Digital Consulting, we are dedicated to transforming your
              brand&apos;s Amazon and e-commerce presence. Our team of seasoned
              experts combines industry knowledge with innovative strategies to
              deliver unparalleled results.
            </p>
            <p className="md:w-[85%]">
              Founded as a family-owned business, Brady Digital Consulting has
              grown into a trusted name in the Amazon and e-commerce consulting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
