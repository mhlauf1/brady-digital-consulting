"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const processData = [
  {
    id: "01",
    image: "/hiw-1.png",
    title: "Competitive Analysis",
    description:
      "We begin with an in-depth competitive analysis to identify opportunities and threats within your market. By understanding your competitors' strengths and weaknesses, we can craft strategies that position your brand for success.",
  },
  {
    id: "02",
    image: "/hiw-2.png",
    title: "Market Research",
    reserve: true,
    description:
      "Next, we conduct comprehensive market research to gain insights into consumer behavior, market trends, and potential growth areas. This enables us to tailor our approach to meet the specific needs of your target audience.",
  },
  {
    id: "03",
    image: "/hiw-3.png",
    title: "Strategic Planning",
    description:
      "Based on our analysis and research, we develop a strategic plan that outlines clear goals and actionable steps. Our plans are designed to drive growth, enhance profitability, and ensure long-term success. ",
  },
  {
    id: "04",
    image: "/hiw-4.png",
    title: "Marketing and Advertising",
    reserve: true,
    description:
      "We execute targeted marketing and advertising campaigns that maximize your brand's visibility and engagement. Our expertise in PPC, social media, and other digital marketing channels ensures your message reaches the right audience at the right time.",
  },
  {
    id: "05",
    image: "/hiw-5.png",
    title: "Reporting",
    description: `Our comprehensive reports include metrics, insights, analyses, and forecasts, allowing you to track progress, measure success, and plan out inventory with confidence.`,
  },
];

type ProcessProps = {
  title: string;
  description: string;
  image: string;
  id: string;
};

const Process = ({ title, description, image, id }: ProcessProps) => (
  <div
    className={`p-8  rounded-xl max-w-screen-2xl flex flex-col items-center gap-3 shadow-lg bg-gradient-to-r from-neutral-700 to-neutral-600`}
  >
    <div className="flex items-center gap-3 flex-1">
      <div className="h-auto w-full md:w-[25vw]">
        <Image
          src={image}
          alt="Value image"
          layout="responsive"
          width={24}
          height={24}
          objectFit="cover"
        />
      </div>
    </div>
    <div className="flex flex-1 flex-col items-start">
      <p className="text-neutral-300 px-2 py-1 border rounded-lg border-neutral-600 font-instrument mb-3">
        {id}
      </p>
      <h2 className="text-white mb-6">{title}</h2>
      <p className="text-sm md:text-base text-neutral-400 leading-[160%] md:w-[90%]">
        {description}
      </p>
    </div>
  </div>
);

const ProcessOutline = () => {
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
    <section className="bg-neutral-500 mt-12 rounded-xl py-24 md:py-36">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="max-w-screen-2xl px-4 md:px-12 relative mx-auto flex flex-col md:flex-row gap-4"
      >
        <div className="flex flex-col gap-2 flex-1 md:max-w-[70%]">
          <div className="sticky space-y-6 text-white top-24">
            <span className="border  border-white/10 py-1 text-sm text-neutral-300 px-4 rounded-full">
              Our Process
            </span>
            <h2>
              We do things <br /> with a{" "}
              <span className="italic"> purpose</span>{" "}
            </h2>
            <p className="text-neutral-200 text-sm md:text-base w-[90%] leading-[160%]">
              Our aim is to be the kind of partner we&apos;d choose to work
              with.
            </p>
          </div>
        </div>
        <div className="flex mt-12 md:mt-0 flex-col gap-10 flex-1">
          {processData.map((item) => (
            <div key={item.id}>
              <Process
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessOutline;
