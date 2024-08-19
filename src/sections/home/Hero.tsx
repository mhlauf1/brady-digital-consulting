"use client";
import React from "react";
import { FaRocket, FaChartLine } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import HeroButtons from "@/components/HeroButtons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="-z-100 overflow-x-hidden max-w-screen relative bg-cover md:mx-4 md:rounded-xl bg-center h-[100vh]"
      style={{ backgroundImage: "url('/hero-buildings.png')" }}
    >
      <div className="bg-black/70 absolute md:rounded-xl top-0 left-0 h-full right-0 bottom-0"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="relative z-50 flex flex-col items-center pt-24 text-center h-full text-white px-4"
      >
        <div className="flex flex-col h-full px-20 items-center">
          <div className="relative rounded-full transition px-3 py-1 text-xs md:text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20">
            Leading the Way in E-commerce Excellence.{" "}
            <a href="#" className="font-semibold text-white">
              <span aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <h1 className="lg:w-[16ch] home-heading font-instrument mt-12 mb-16">
            Amazon Partners. Redefined.
          </h1>
          <HeroButtons />
          <div className="pb-8 md:pt-6 md:grid flex items-center justify-center md:grid-cols-3 space-x-6 w-full md:space-x-12 text-white/70">
            <div className="flex flex-col md:flex-row md:w-full w-[12ch] items-center gap-3">
              <FaRocket />{" "}
              <span className="text-xs md:text-sm">Online Sales Growth</span>
            </div>
            <div className="flex flex-col md:flex-row md:w-full w-[12ch] items-center gap-3">
              <FaChartBar />{" "}
              <span className="text-xs md:text-sm">
                40% Conversion Rate Boost
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:w-full w-[12ch] items-center gap-3">
              <FaChartLine />{" "}
              <span className="text-xs md:text-sm">278% Session Growth</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] mb-32 max-w-screen-2xl w-full bg-white/50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
