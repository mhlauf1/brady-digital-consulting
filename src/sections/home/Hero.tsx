"use client";
import React from "react";
import { FaRocket, FaChartLine } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import HeroButtons from "@/components/HeroButtons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="-z-100 overflow-x-hidden max-w-screen relative bg-cover md:mb-2 md:mx-2 md:rounded-xl bg-center h-[90vh]"
      style={{ backgroundImage: "url('/hero-buildings.png')" }}
    >
      <div className="bg-black/70 absolute md:rounded-xl top-0  left-0 h-full right-0 bottom-0"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        }}
        className="relative  flex flex-col items-center pt-10vh md:pt-[15vh]  text-center h-full text-white px-4"
      >
        <div className="flex flex-col h-full px-4 md:px-20 items-center">
          <Link
            href="/about"
            className="relative rounded-full transition px-3 py-1 text-xs md:text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20"
          >
            Leading the Way in Ecommerce Excellence.{" "}
            <a href="#" className="font-semibold text-white">
              <span aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>

          <h1 className="lg:w-[16ch] home-heading font-instrument my-12">
            Amazon Partners. Redefined.
          </h1>
          <HeroButtons />
          <div className="md:pt-4 flex items-center justify-center mt-8 md:mt-12 w-full text-neutral-200">
            <p>
              Partnership-focused digital consulting services with proven
              results.
            </p>
          </div>
        </div>
        <div className="h-[1px] mb-16 max-w-screen-2xl w-full bg-white/50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
