"use client";
import React from "react";
import Image from "next/image";

type ItemProps = {
  image: string;
  title: string;
  description: string;
};

const whyBradyData = [
  {
    id: 0,
    title: "Expert Strategy",
    description:
      "Leverage our deep understanding of digital marketing best practices to create a strategic plan that drives growth and enhances profitability.",
    image: "/b-1.png",
  },
  {
    id: 1,
    title: "Full Scope Amazon Services",
    description:
      "As a one-stop-shop Amazon partner, we provide inventory management, PPC, listing setup, competitive analysis, client support, promotions, and more.",
    image: "/b-2.png",
  },
  {
    id: 2,
    title: "Data-Driven Insights",
    description:
      "Our decisions are backed by data. We provide detailed analytics and insights to help you make informed decisions and stay ahead of the competition.",
    image: "/b-3.png",
  },
  {
    id: 3,
    title: "Seamless Execution",
    description:
      "From listing optimization to targeted advertising, we manage every aspect of your digital presence, allowing you to focus on other critical areas of your business.",
    image: "/b-4.png",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We don't stop at implementation. Our team continuously monitors performance and adjusts strategies to ensure sustained growth and success.",
    image: "/b-5.png",
  },
  {
    id: 5,
    title: "Customized Solutions",
    description:
      "Every brand is unique, and so are our solutions. We tailor our services to meet your specific needs, ensuring maximum impact and success.",
    image: "/b-6.png",
  },
];

const Item = ({ image, title, description }: ItemProps) => (
  <div className="relative">
    <div className="h-[500px] md:h-[700px] flex flex-col justify-end px-4 py-8 md:p-8 text-white mt-12 w-auto">
      <div className="bg-gradient-to-b from-neutral-300/40 to-neutral-900/50 -z-1 absolute top-0 left-0 right-0 bottom-0 rounded-xl"></div>
      <Image
        src={image}
        alt={title}
        className="-z-10 rounded-xl"
        fill
        objectFit="cover"
      />
      <div className="relative space-y-4">
        <h3 className="font-instrument text-3xl">{title}</h3>
        <div className="h-[1px] w-full bg-white"></div>
        <p className="text-white/80 text-sm md:text-base leading-[160%]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WhyBrady = () => {
  return (
    <section className="py-36 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-1 gap-6 md:gap-10 items-start flex-col">
          <h2>Why Choose Brady Digital Consulting?</h2>
        </div>
        <div className="flex flex-1 mt-6 md:mt-0 gap-8 md:gap-20 flex-col">
          <p className="md:w-[64ch] text-sm md:text-base ml-auto text-neutral-500 leading-[160%]">
            Our comprehensive suite of services is designed to help brands not
            only sell but thrive in the digital marketplace. By partnering with
            Brady Digital Consulting, you gain access to industry-leading
            expertise, tailored strategies, and a proven track record of
            success.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {whyBradyData.map((item) => (
          <div key={item.id}>
            <Item
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBrady;
