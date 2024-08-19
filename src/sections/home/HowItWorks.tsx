"use client";
import React from "react";
import Button from "@/components/Button";
import { FaChartBar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagnifyingGlass } from "react-icons/gi";
import { TbChartDots3 } from "react-icons/tb";
import { PiProjectorScreenChart } from "react-icons/pi";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ItemProps = {
  Icon: any;
  title: string;
  description: string;
};

const Item = ({ Icon, title, description }: ItemProps) => (
  <div className="flex  bg-neutral-600 py-4 md:py-6 px-4 md:px-8 rounded-lg gap-x-4">
    <Icon size={24} color="white" />
    <div className="text-white">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="md:w-3/5 text-sm mt-2">{description}</p>
    </div>
  </div>
);

const StepData = [
  {
    id: 1,
    icon: FaPeopleGroup,
    title: "Competitive Analysis",
    description:
      "Discover how our competitive analysis can give your brand the edge it needs to outperform the competition.",
  },
  {
    id: 2,
    icon: GiMagnifyingGlass,
    title: "Market Research",
    description:
      "Unlock invaluable insights with our market research to understand your customers and stay ahead of trends.",
  },
  {
    id: 3,
    icon: TbChartDots3,
    title: "Marketing and Advertising",
    description:
      "Learn how our targeted marketing and advertising strategies can drive your brand's growth and visibility.",
  },
  {
    id: 4,
    icon: FaChartBar,
    title: "Reporting",
    description:
      "See how our detailed reporting keeps you informed and helps you make data-driven decisions for success.",
  },
  {
    id: 5,
    icon: PiProjectorScreenChart,
    title: "Forecasting",
    description:
      "Explore how our precise forecasting can help you plan effectively and maximize your sales potential.",
  },
];

const HowItWorks = () => {
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
    <section className="rounded-t-xl mt-[-100px] z-1000 relative bg-[#F1F1E8] py-24 lg:py-48 pb-36 md:pb-72">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="justify-between flex-col lg:flex-row flex "
      >
        <div className="flex flex-1 flex-col lg:pl-[10vw] px-8 lg:p-0 lg:mx-auto justify-between">
          <h2 className="text-neutral-800 w-[13ch]">
            Marketing Experts{" "}
            <span className="text-neutral-500">To Guide You.</span>
          </h2>
          <div className="flex flex-col items-start">
            <h3 className="text-neutral-800 mt-6 mb-4 lg:mb-6">
              In-House Marketing Advice{" "}
            </h3>
            <p className="text-neutral-600 md:w-[50ch] mb-6 lg:mb-8">
              Benefit from our expert guidance tailored to your in-house
              marketing efforts. We provide actionable advice and insights to
              enhance your strategies and achieve better results.
            </p>
            <Link href="/how-it-works">
              <Button dark>How It Works</Button>
            </Link>

            <div className="bg-black/30 h-[1px] w-full lg:w-[65%] mt-8"></div>
          </div>
        </div>
        <div className="h-auto flex flex-col mt-12 lg:mt-0 gap-4 py-16 px-4 md:px-8 lg:p-16 md:rounded-s-xl bg-[radial-gradient(#666666,#222222,#666666)]">
          {StepData.map((item) => (
            <div key={item.id}>
              <Item
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
