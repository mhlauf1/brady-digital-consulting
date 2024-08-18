import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative px-8  max-w-screen-2xl mx-auto h-[90vh]">
      <div className="flex gap-16 mt-16 md:mt-0 flex-col md:flex-row items-center h-full">
        <div className="flex flex-col items-center md:items-start">
          <span className="border  border-black/10 py-1 text-sm text-neutral-400 px-4 rounded-full">
            Benefits
          </span>
          <h1 className="capitalize text-center md:text-start md:w-[16ch] text-neutral-900 mt-12 mb-8">
            Learn How Brady Can Serve You
          </h1>
          <p className=" md:w-[48ch] text-center md:text-start mb-8 text-neutral-500 leading-[160%] md:text-lg">
            Experience Unmatched Growth and Success with Our Expertise
          </p>
          <Button dark>Book a call</Button>
        </div>

        <div className="h-automd:mt-12 w-[90vw] md:w-[50vw]">
          <Image
            src="/benefits.png"
            alt="Brady Services"
            layout="responsive"
            className="rounded-xl"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
