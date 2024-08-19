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
    threshold: 0.3,
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
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="max-w-screen-2xl px-8 justify-between flex flex-col lg:flex-row mx-auto"
      >
        <div className="flex flex-1 flex-col  justify-between">
          <h2 className="w-[65%] lg:w-[12ch]">
            Manage Your Online Growth{" "}
            <span className="text-neutral-400">Like Experts Do.</span>
          </h2>
          <div className="flex mt-4 lg:mt-0 flex-col items-start">
            <h3 className="text-neutral-700 mb-6">
              Empowering Success with Proven Results{" "}
            </h3>
            <p className="md:w-[50ch] text-black/70 mb-8">
              At Brady Digital Consulting, our results speak for themselves. We
              are committed to driving growth and enhancing profitability for
              our clients through our expert strategies and data-driven
              insights.
            </p>
            <Link href="/benefits">
              <Button dark>Explore Benefits</Button>
            </Link>

            <div className="bg-black/30 h-[1px] w-full lg:w-[65%] mt-8"></div>
          </div>
        </div>
        <div className="h-auto mt-8 lg:mt-0 lg:w-[46%]">
          <Image
            src="/Benefits-image.png"
            alt="Brady Services"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
          <p className="lg:mt-48 mt-8 text-sm w-[90%] md:text-md text-neutral-400">
            Our comprehensive suite of benefits is designed to help your brand
            GROW
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
