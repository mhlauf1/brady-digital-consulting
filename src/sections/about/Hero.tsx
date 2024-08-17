import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 mx-4 rounded-xl h-auto">
      <Image
        src="/about-hero.png"
        alt="About Page Brady Digital"
        fill
        className="-z-20 rounded-xl"
        objectFit="cover"
      />
      <div className="flex px-8 flex-col relative text-white items-center">
        <span className="border border-white/20 bg-white/10 py-1 text-sm text-neutral-300 px-4 rounded-full">
          About Us
        </span>
        <h1 className="capitalize md:w-[16ch] my-12 text-center">
          We Are In Business To Help You Grow
        </h1>
        <p className="text-white/70 md:w-[72ch] leading-[160%] md:text-lg text-center">
          Discover our family-owned legacy and industry leadership in delivering
          comprehensive Amazon and e-commerce solutions that drive growth and
          success.
        </p>
        <div className="h-auto mt-20 w-[80vw] md:w-[60vw]">
          <Image
            src="/about-sub.png"
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
