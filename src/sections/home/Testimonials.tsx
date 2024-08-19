"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Brady Digital Consulting changed our approach entirely. They helped us achieve sustainable growth with their expert strategies.",
    name: "John Doe, CEO of XYZ Corp.",
  },
  {
    id: 2,
    quote:
      "Brady Digital Consulting provided invaluable insights that boosted our Amazon presence significantly. Their tailored solutions are second to none.",
    name: "Jane Smith, Founder of ABC Ltd.",
  },
  {
    id: 3,
    quote:
      "The comprehensive services offered by Brady Digital Consulting transformed our ecommerce strategy. The return on investment has been impressive.",
    name: "Michael Brown, Marketing Director at DEF Enterprises",
  },
  {
    id: 4,
    quote:
      "Brady Digital Consulting and their strategic guidance was a game-changer for our brands growth. We trust them completely for all our ecommerce needs.",
    name: "Emily Davis, Operations Manager at GHI Inc.",
  },
  {
    id: 5,
    quote:
      "Brady Digital Consulting has been an outstanding partner. Their commitment to our success led to consistent growth and improved performance.",
    name: "David Wilson, COO of JKL Global",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500); // Match the transition duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { quote, name } = testimonials[currentIndex];

  return (
    <section className="bg-[#D2D8D7] mt-[-100px] rounded-t-xl relative ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="py-20 lg:py-36 max-w-screen-2xl px-8 mx-auto"
      >
        <div className="h-[1px] mb-4 w-full bg-neutral-400"></div>
        <p>Don&apos;t just take our word for it. Take theirs.</p>
        <div className="flex flex-col items-center">
          <div className={`mt-36 fade ${fade ? "in" : "out"}`}>
            <blockquote className=" lg:w-[70%] mx-auto testimonial  text-neutral-600">
              &quot;{quote}&quot;
            </blockquote>
            <p className="mt-12 text-center text-neutral-500">- {name}</p>
          </div>
          <div className="grid mt-36  w-full gap-12 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex text-center flex-col items-center gap-4">
              <p>2023</p>
              <span>USA TODAY</span>
              <p className="w-[20ch]">Best Financial Advisory Firms</p>
            </div>
            <div className="flex text-center flex-col items-center gap-4">
              <p>2023</p>
              <span>USA TODAY</span>
              <p className="w-[20ch]">Best Financial Advisory Firms</p>
            </div>{" "}
            <div className="flex text-center flex-col items-center gap-4">
              <p>2023</p>
              <span>USA TODAY</span>
              <p className="w-[20ch]">Best Financial Advisory Firms</p>
            </div>{" "}
            <div className="flex text-center flex-col items-center gap-4">
              <p>2023</p>
              <span>USA TODAY</span>
              <p className="w-[20ch]">Best Financial Advisory Firms</p>
            </div>
          </div>
          <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row py-16 px-8 lg:p-12 border bg-slate-50 border-neutral-400/50 rounded-xl mt-36  items-center">
            <h2 className="flex leading-[120%] text-center lg:text-start lg:w-[18ch] ">
              How Clients gained ~$5,00,000 With Brady
            </h2>
            <p className="flex text-neutral-600  text-center lg:text-start lg:w-[42ch]">
              For a smarter approach to investing, with products and services
              they can&apos;t get anywhere else, and real humans accessible when
              they need them.
            </p>
            <div className="flex flex-end">
              <Button dark>Get Started</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
