"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const valueData = [
  {
    id: 1,
    icon: "/about-icon-1.png",
    title: "Excellence",
    description:
      "We are committed to excellence in every project, delivering top-tier services that create lasting impact and drive remarkable results.",
  },
  {
    id: 2,
    icon: "/about-icon-2.png",
    title: "Collaboration",
    description:
      "We believe in the power of teamwork. Our collaborative approach ensures that we leverage diverse expertise to achieve the best outcomes.",
  },
  {
    id: 3,
    icon: "/about-icon-3.png",
    title: "Adaptability",
    description:
      "In the fast-paced world of e-commerce, adaptability is key. We stay flexible and responsive to changing market conditions to ensure sustained success.",
  },
  {
    id: 4,
    icon: "/about-icon-4.png",
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We strive to understand their unique needs and deliver tailored solutions that exceed expectations.",
  },
  {
    id: 5,
    icon: "/about-icon-5.png",
    title: "Innovation",
    description:
      "We continuously seek innovative solutions to stay ahead in the ever-evolving digital landscape, driving growth and success for our clients.",
  },
  {
    id: 6,
    icon: "/about-icon-6.png",
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all our actions, ensuring transparency and honesty in every interaction.",
  },
];

type ValueProps = {
  title: string;
  description: string;
  icon: string;
};

const Value = ({ title, description, icon }: ValueProps) => (
  <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col gap-2 md:gap-3">
    <div className="h-[32px] w-[32px]">
      <Image
        src={icon}
        alt="Value Icon"
        layout="responsive"
        width={24}
        height={24}
        objectFit="cover"
      />
    </div>
    <h3 className="font-instrument text-3xl mt-4">{title}</h3>
    <p className="text-sm text-neutral-500 leading-[160%] md:w-[95%]">
      {description}
    </p>
  </div>
);
const Values = () => {
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
    <div className="bg-[#F6F7F7] rounded-t-xl">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="max-w-screen-2xl px-4 md:px-8 flex-col gap-12 py-24 md:py-36 mx-auto flex justify-between"
      >
        <h2>Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueData.map((value) => (
            <div key={value.id}>
              <Value
                title={value.title}
                icon={value.icon}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Values;
