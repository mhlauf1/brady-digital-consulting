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
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative text-neutral-700 bg-neutral-50 px-4 md:px-8 pt-32 pb-56 md:pb-72 md:pt-48">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        }}
        className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between"
      >
        <div className="flex flex-1 gap-6 md:gap-10 items-start flex-col">
          <h2>Why Us?</h2>
          <Link href="/about">
            <Button dark>About Us</Button>
          </Link>
        </div>
        <div className="flex flex-1 mt-10 md:mt-0 gap-6 text-neutral-600 text-sm md:text-base md:gap-20 flex-col">
          <p className="md:w-[85%]">
            At Brady Digital Consulting, we are dedicated to transforming your
            brand&apos;s Amazon and ecommerce presence. Our team of seasoned
            experts combines industry knowledge with innovative strategies to
            deliver unparalleled results.
          </p>
          <p className="md:w-[85%]">
            Founded as a family-owned business, Brady Digital Consulting has
            grown into a trusted name in the Amazon and ecommerce consulting
            industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
