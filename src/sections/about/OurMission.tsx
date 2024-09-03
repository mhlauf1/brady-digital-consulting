"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurMission = () => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="max-w-screen-2xl gap-8 px-4 md:px-12 py-24 md:py-36 mx-auto flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-1">
        <h2>Our Mission</h2>
      </div>

      <div className="flex leading-[160%] flex-col gap-6 text-neutral-500 text-sm md:text-base flex-1">
        <p>
          Founded as a family-owned business, Brady Digital Consulting has grown
          into a trusted name in the Amazon and ecommerce consulting industry.
          Our journey began with a passion for helping brands navigate the
          complex digital marketplace, and over the years, we have established
          ourselves as leaders through unwavering commitment and exceptional
          service <span className="font-bold">to our clients.</span>
        </p>
        <p>
          Our rich history is a testament to our dedication, expertise, and the
          lasting relationships we&apos;ve built with our clients.
        </p>
        <p>
          We have expanded into an organization known for driving impressive
          results. We pride ourselves on evolving with the ever-changing digital
          landscape and ensuring our clients always stay ahead of the curve.{" "}
        </p>
      </div>
    </motion.section>
  );
};

export default OurMission;
