"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Stats = () => {
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
    <section className="bg-white md:bg-[#F6F7F7] py-0 border md:border-0 border-neutral-100 md:py-36">
      <div className="max-w-screen-2xl md:px-4 lg:px-8 pb-24 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className="bg-white flex flex-col items-start md:rounded-xl py-16 px-4 md:px-8 lg:p-20"
        >
          <div className="relative rounded-full transition px-3 py-1 text-sm leading-6 text-neutral-400 ring-1 ring-black/10 hover:ring-black/20">
            Strategic Online Growth.{" "}
            <Link
              href="/how-it-works"
              className="font-semibold text-neutral-500"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Learn how <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 gap-4 md:gap-6 justify-between">
            <h2 className="lg:w-[24ch]">
              Executing best in class Amazon and ecommerce practices for{" "}
              <span className="text-neutral-400">brands across the world.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base lg:w-[30%]">
              Maximize your brand&apos;s potential with our comprehensive Amazon
              and ecommerce solutions. Experience significant growth and
              outstanding results with our expert guidance.
            </p>
          </div>
          <div className="grid mt-12 lg:mt-36 gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col  items-center justify-center">
              <span className="stat font-instrument">20%</span>
              <p className="text-xs mb-4 tracking-wide uppercase text-neutral-400">
                Increase in Roi
              </p>
              <p className="text-center  leading-6 text-neutral-500 text-sm w-[95%] md:w-[75%]">
                Boost your return on investment with our strategic solutions and
                expert management.
              </p>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <span className="stat font-instrument">50%</span>
              <p className="text-xs  mb-4 tracking-wide uppercase text-neutral-400">
                Faster inventory turnover
              </p>
              <p className="text-center  leading-6 text-neutral-500 text-sm w-[95%] md:w-[75%]">
                Optimize your stock levels and reduce storage costs with our
                efficient inventory management.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="stat font-instrument">30%</span>
              <p className="text-xs  mb-4 uppercase tracking-wide text-neutral-400">
                sales boost
              </p>
              <p className="text-center leading-6 text-neutral-500 text-sm w-[95%] md:w-[75%]">
                Drive targeted traffic and increase sales with our tailored PPC
                and marketing campaigns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
