"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const caseStudyData = [
  {
    id: 0,
    company: "Brand A",
    title: "519%",
    quote: `"Working with Brady Digital Consulting has been a game-changer for us. Their strategic approach and expertise have driven our sales up by 519%. We couldn't be happier!" `,
    person: "– Sarah L., Brand A CEO",
    description:
      "Achieved a 519% sales increase with strategic product launches and targeted promotions. Participated in 20% off Prime Exclusive discounts across their entire assortment, leading to significant growth.",
    color: "blue",
    image: "/brand-1.png",
  },
  {
    id: 1,
    company: "Brand B",
    title: "$1.62 to $4",
    quote: `"Brady Digital Consulting's optimization of our ad spend resulted in an incredible improvement of our ROAS from $1.62 to $4. Their insights and strategies are invaluable." `,
    person: "– John M., Brand B Marketing Director",
    description:
      "Improved Return on Ad Spend from $1.62 to $4 with optimized ad spend strategies, resulting in a 33% sales increase while participating in a Lightning Deal on their top sellers.",
    color: "green",
    image: "/brand-2.png",
  },
  {
    id: 2,
    company: "Brand C",
    title: "155%",
    quote: `"The rebranding and PPC strategy implemented by Brady Digital Consulting led to a 155% increase in our sales. Their dedication to our success is unmatched." `,
    person: "– Emily R., Brand C Founder",
    description:
      "Saw a 155% sales growth through a comprehensive rebranding strategy, which included new image assets, videos, and an advanced PPC strategy. Achieved a 75% increase in Return on Ad Spend during Prime Day.",
    color: "purple",
    image: "/brand-c.png",
  },
  {
    id: 3,
    company: "Brand D",
    title: "31%",
    quote: `"Thanks to Brady Digital Consulting, we saw a 31% year-over-year sales increase while reducing our PPC costs. Their efficient ad structures and strategies have significantly boosted our profitability." `,
    person: "– Mike T., Brand D COO",
    description:
      "Achieved a 31% year-after-year increases in sales growth through a comprehensive rebranding strategy, which included new image assets, videos, and an advanced PPC strategy.",
    color: "yellow",
    image: "/brand-d.png",
  },
];

type CaseStudyType = {
  company: string;
  title: string;
  quote: string;
  person: string;
  description: string;
  color: string;
  image: string;
};

const handleBackgroundColor = (color: string) => {
  if (color === "blue") {
    return "bg-[#B3D4F2]";
  }
  if (color === "green") {
    return "bg-[#C3EFC8]";
  }
  if (color === "purple") {
    return "bg-[#E2D4F4]";
  }
  if (color === "yellow") {
    return "bg-[#F9E7B8]";
  } else {
    return "bg-[#B3D4F2]";
  }
};

const CaseStudy = ({
  company,
  title,
  quote,
  person,
  description,
  color,
  image,
}: CaseStudyType) => (
  <div
    className={`w-full rounded-xl md:rounded-[24px] flex flex-col md:flex-row ${handleBackgroundColor(
      color
    )}`}
  >
    <div className="flex flex-col py-8 px-6 md:p-8 flex-1 justify-between">
      <span className="font-instrument text-neutral-800 text-3xl md:text-5xl">
        {company}
      </span>
      <div className="flex flex-col mt-12 md:mt-0 gap-4 w-full md:w-[65%]">
        <h2 className="xl-text">{title}</h2>
        <div>
          <p className="text-neutral-600 text-sm leading-[160%]">{quote}</p>
          <span className="text-sm">{person}</span>
        </div>

        <div className="h-[1px] w-full bg-black"></div>
        <p className="text-neutral-600 text-sm leading-[160%]">{description}</p>
      </div>
    </div>
    <div className="h-auto flex flex-1 w-auto">
      <Image
        src={image}
        alt="Brady Services"
        layout="responsive"
        // className="rounded-xl"
        width={100}
        height={100}
        objectFit="cover"
      />
    </div>
  </div>
);

const CaseStudies = () => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="max-w-screen-2xl px-4 md:px-8 flex flex-col gap-8 mx-auto py-24 md:py-36"
    >
      {caseStudyData.map((item) => (
        <div key={item.id}>
          <CaseStudy
            color={item.color}
            company={item.company}
            description={item.description}
            quote={item.quote}
            image={item.image}
            person={item.person}
            title={item.title}
          />
        </div>
      ))}
    </motion.section>
  );
};

export default CaseStudies;
