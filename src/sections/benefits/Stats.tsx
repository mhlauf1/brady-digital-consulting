import React from "react";
import Image from "next/image";

const statData = [
  {
    id: 1,
    caption: "Sales Growth",
    title: "519%",
    description:
      "Brand A saw a 519% increase in sales with the addition of three new products and targeted promotions.",
  },
  {
    id: 2,
    caption: "Year-over-year",
    title: "278%",
    description:
      "Brand A grew total sessions by 278% year-over-year with efficient ad spend and optimized listings.",
  },
  {
    id: 3,
    caption: "Return on Ad Spend",
    title: "$1.62 to $4",
    description:
      "Brand B improved their Return on Ad Spend from $1.62 to $4 by optimizing their ad spend strategies.",
  },
];

type StatProps = {
  title: string;
  description: string;
  caption: string;
};

const Stat = ({ title, description, caption }: StatProps) => (
  <div className="rounded-xl flex flex-col gap-1 md:gap-2">
    <p className="text-neutral-600">{caption}</p>
    <div className="h-[1px] w-full bg-black/30"></div>

    <h3 className="font-instrument text-neutral-700 text-[5rem] md:text-[7rem] md:mt-4">
      {title}
    </h3>
    <p className="text-sm text-neutral-500 leading-[160%] md:w-[85%]">
      {description}
    </p>
  </div>
);
const Stats = () => {
  return (
    <div className="bg-neutral-50 mx-4 rounded-xl">
      <section className="max-w-screen-2xl px-8 flex-col py-24 md:py-36 mx-auto flex justify-between">
        <h2>
          Empowering Success <br />{" "}
          <span className="text-neutral-400">with Proven Results</span>
        </h2>
        <p className="text-neutral-500 mb-12 mt-8 lg:w-[40%] leading-[160%]">
          At Brady Digital Consulting, our results speak for themselves. We are
          committed to driving growth and enhancing profitability for our
          clients through our expert strategies and data-driven insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statData.map((stat) => (
            <div key={stat.id}>
              <Stat
                title={stat.title}
                caption={stat.caption}
                description={stat.description}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;
