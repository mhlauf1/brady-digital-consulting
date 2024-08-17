import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 mx-4 bg-[#0D0D12]  rounded-xl h-auto">
      <Image
        src="/services-hero.png"
        alt="About Page Brady Digital"
        fill
        className=" opacity-60 rounded-xl"
        objectFit="cover"
      />
      <div className="flex px-8 flex-col relative text-white items-center">
        <span className="border border-white/20 bg-white/10 py-1 text-sm text-neutral-300 px-4 rounded-full">
          Services
        </span>
        <h1 className="capitalize md:w-[25ch] my-12  text-center">
          Comprehensive Amazon Services for Exceptional Growth
        </h1>
        <p className="text-white/70 md:w-[44ch] leading-[160%] text-lg text-center">
          Unlock Your Brand&apos;s Potential with Our Full-Spectrum E-commerce
          Solutions{" "}
        </p>
        <div className="h-auto mt-20 md:mt-12 w-[80vw] md:w-[60vw]">
          <Image
            src="/services-sub.png"
            alt="Brady Services"
            layout="responsive"
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
