"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    icon: "/about-icon-1.png",
    title: "Listing Setup and Optimization",
    description:
      "Create compelling, keyword-rich product listings with backend meta-data that drives conversions and improves organic rank.",
  },
  {
    id: 2,
    icon: "/about-icon-2.png",
    title: "PPC (Pay-Per-Click) Advertising",
    description:
      "Maximize your visibility and sales with our targeted PPC campaigns, designed to reach the right audience at the right time.",
  },
  {
    id: 3,
    icon: "/about-icon-3.png",
    title: "Competitive Analysis",
    description:
      "Gain a competitive edge with our thorough market analysis, identifying opportunities and threats to your brand.",
  },
  {
    id: 4,
    icon: "/about-icon-4.png",
    title: "Inventory Management",
    description:
      "Optimize your stock levels and ensure product availability with our efficient inventory management solutions.",
  },
  {
    id: 5,
    icon: "/about-icon-5.png",
    title: "Client Support",
    description:
      "Deliver exceptional client service with our dedicated support team, ensuring client satisfaction and loyalty.",
  },
  {
    id: 6,
    icon: "/about-icon-6.png",
    title: "Ad-hoc Support Issues",
    description:
      "Resolve unexpected challenges swiftly with our ad-hoc support, keeping your operations running smoothly.",
  },
  {
    id: 7,
    icon: "/about-icon-3.png",
    title: "Forecasting",
    description:
      "Predict demand and plan effectively with our advanced forecasting techniques. We help you minimize stockouts and overstock situations, ensuring a balanced inventory.",
  },
  {
    id: 8,
    icon: "/about-icon-1.png",
    title: "Promotions and Deals",
    description:
      "Increase your sales with well-planned promotions and deals. Our strategies attract more clients and enhance your market presence.",
  },
];

type ServiceProps = {
  title: string;
  description: string;
  icon: string;
};

const Service = ({ title, description, icon }: ServiceProps) => (
  <div className="bg-white py-4 md:py-8 rounded-xl flex flex-col gap-2 md:gap-3">
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
    <h3 className="font-instrument text-3xl mt-2 md:mt-4">{title}</h3>
    <p className="text-sm text-neutral-500 leading-[160%] lg:w-[85%]">
      {description}
    </p>
  </div>
);
const Services = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="mt-8"
    >
      <section className="max-w-screen-2xl px-4 md:px-12 flex-col py-24 md:py-36 mx-auto flex justify-between">
        <h2>
          Optimization Services: <br />
          Maximize Your Amazon Presence
        </h2>
        <p className="text-neutral-500 mb-8 md:mb-12 mt-4 md:mt-8 lg:w-[40%] text-sm md:text-base leading-[160%]">
          Optimize every aspect of your Amazon listings to ensure maximum
          visibility and conversions. Our optimization services are designed to
          make your products stand out in the competitive marketplace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesData.map((service) => (
            <div key={service.id}>
              <Service
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
