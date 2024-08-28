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
    <section className="relative pt-20 md:pt-24 md:mx-2 bg-[#0D0D12] overflow-hidden  md:rounded-xl h-[90vh]">
      <Image
        src="/services-hero.png"
        alt="About Page Brady Digital"
        fill
        className=" opacity-60 md:rounded-xl"
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
          Services
        </span>
        <h1 className="capitalize md:w-[25ch] my-12  text-center">
          Comprehensive Portfolio of Amazon Services
        </h1>
        <p className="text-white/70 md:w-[44ch] leading-[160%] text-sm md:text-lg text-center">
          Unlock Your Brand&apos;s Potential with Our Full-Spectrum Ecommerce
          Solutions{" "}
        </p>
        <div className="h-auto mt-20 md:mt-12 w-[80vw] md:w-[50vw]">
          <Image
            src="/services-sub.png"
            alt="Brady Services"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
