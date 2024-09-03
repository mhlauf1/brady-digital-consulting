"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefits = () => {
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
    <section className="z-1000 relative bg-[#FFFEFF] py-24 md:py-48">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        }}
        className="max-w-screen-2xl px-4 md:px-12 justify-between flex flex-col lg:flex-row mx-auto"
      >
        <div className="flex flex-1 flex-col md:h-[70vh]  justify-between">
          <h2 className="md:w-[65%] lg:w-[12ch]">
            Manage Your Online Growth{" "}
            <span className="text-neutral-400">Like Experts Do.</span>
          </h2>
          <div className="flex mt-4 md:mt-8 lg:mt-0 flex-col items-start">
            <h3 className="text-neutral-700 mb-4 md:mb-6">
              Empowering Success with Proven Results{" "}
            </h3>
            <p className="md:w-[50ch] text-sm md:text-base text-neutral-500 mb-8">
              At Brady Digital Consulting, our results speak for themselves. We
              are committed to driving growth and enhancing profitability for
              our clients through our expert strategies and data-driven
              insights.
            </p>
            <Link href="/benefits">
              <Button dark>Explore Benefits</Button>
            </Link>

            <div className="bg-black/30 h-[1px] w-full lg:w-[65%] mt-12"></div>
          </div>
        </div>
        <div className="h-auto mt-16 lg:mt-0 lg:w-[46%]">
          <Image
            src="/Benefits-image.png"
            alt="Brady Services"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
