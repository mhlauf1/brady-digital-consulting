"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative text-white px-8 pb-72 pt-48">
      <Image src="/hero-bg-color.png" className="-z-10" alt="Color Bg" fill />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between"
      >
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
      </motion.div>
    </div>
  );
};

export default WhyUs;
