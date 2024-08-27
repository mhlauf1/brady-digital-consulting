"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <section className="relative pt-20 md:pt-24 md:h-[60vh] md:mx-4 md:rounded-xl overflow-hidden h-[70vh]">
      <Image
        src="/about-hero.png"
        alt="About Page Brady Digital"
        fill
        className="-z-20 md:rounded-xl"
        objectFit="cover"
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="flex px-8 flex-col relative text-white items-center"
      >
        <span className="border border-white/20 bg-white/10 py-1 text-sm text-neutral-300 px-4 rounded-full">
          About Us
        </span>
        <h1 className="capitalize md:w-[16ch] my-12 text-center">
          We Are In Business To Help You Grow
        </h1>
        <p className="text-white/70 md:w-[72ch] leading-[160%] text-sm md:text-lg text-center">
          Discover our family-owned legacy and industry leadership in delivering
          comprehensive Amazon and ecommerce solutions that drive growth and
          success.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
