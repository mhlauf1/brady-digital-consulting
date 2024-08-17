import React from "react";
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
    description: `Transparency is key to our process. We provide detailed reporting to keep you informed about your brand&apos;s performance. Our comprehensive reports include metrics, insights, and analyses, allowing you to track progress and measure success with confidence.`,
  },
  {
    id: "06",
    image: "/hiw-6.png",
    title: "Forecasting",
    reserve: true,
    description:
      "To help you stay ahead, we offer precise forecasting services. By analyzing trends and market data, we predict future performance and provide actionable recommendations. Enabling you to make informed decisions and plan strategically for sustained growth.",
  },
];

type ProcessProps = {
  title: string;
  description: string;
  image: string;
  id: string;
  reverse?: boolean;
};

const Process = ({ title, description, image, id, reverse }: ProcessProps) => (
  <div
    className={`p-8 rounded-xl max-w-screen-2xl mx-auto flex flex-col items-center gap-3 ${
      reverse ? "md:flex-row-reverse md:pl-32" : "md:flex-row"
    } bg-gradient-to-r from-[#2a2a2a] to-[#404040] shadow-lg`}
    style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}
  >
    <div className="flex items-center gap-3 flex-1">
      <div className="h-auto w-[80vw] md:w-[40vw]">
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
      <p className="text-md text-neutral-400 leading-[160%] md:w-[80%]">
        {description}
      </p>
    </div>
  </div>
);

const ProcessOutline = () => {
  return (
    <section className="px-8  bg-[#313131] flex flex-col gap-4 rounded-xl md:rounded-t-[50px] py-24 md:py-36">
      {processData.map((item) => (
        <div key={item.id}>
          <Process
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            reverse={item.reserve}
          />
        </div>
      ))}
    </section>
  );
};

export default ProcessOutline;
