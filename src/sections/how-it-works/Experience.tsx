"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const experienceData = [
  {
    id: 1,
    icon: "/about-icon-1.png",
    title: "Reliability",
    description:
      "You can count on us for dependable service and consistent results. Our team is dedicated to delivering high-quality work on time, every time.",
  },
  {
    id: 2,
    icon: "/about-icon-2.png",
    title: "Strong Communication",
    description:
      "Clear, transparent communication is the foundation of our client relationships. We keep you informed every step of the way, ensuring your goals are met.",
  },
  {
    id: 3,
    icon: "/about-icon-3.png",
    title: "Consistency",
    description:
      "We maintain a steadfast commitment to excellence in every project. Our proven processes ensure consistent performance and sustained growth for your brand.",
  },
];

type ExperienceProps = {
  title: string;
  description: string;
  icon: string;
};

const ExperienceItem = ({ title, description, icon }: ExperienceProps) => (
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
    <p className="text-sm text-neutral-500 leading-[160%] md:w-[85%]">
      {description}
    </p>
  </div>
);
const Experience = () => {
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
    <div className="bg-[#F6F7F7]">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="max-w-screen-2xl px-8 flex-col py-24 md:py-36 mx-auto flex justify-between"
      >
        <h2>
          Unmatched Expertise, <br />
          Proven Results
        </h2>
        <p className="text-neutral-500 mb-12 mt-8 lg:w-[40%] leading-[160%]">
          Supercharge productivity. Streamline work by doing it, and seeing it,
          in one place
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {experienceData.map((item) => (
            <div key={item.id}>
              <ExperienceItem
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
