"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="bg-neutral-800 px-4 md:px-8 relative  mx-2 my-2 rounded-xl py-32 md:py-36 text-white overflow-hidden">
      <div className="flex-col flex gap-10 items-center justify-center">
        <h2 className="lg:w-[16ch] text-[2.5rem] md:text-[3rem] lg:text-[5rem] text-center relative z-10">
          Ready to Transform Your Brand?
        </h2>
        <p className="lg:w-[74ch] text-neutral-300 leading-[160%] text-center relative z-10">
          Get started with Brady Digital Consulting today and see the difference
          expert strategies and personalized support can make. Contact us now to
          unlock your brand&apos;s full potential.
        </p>
        <div className="flex gap-4 relative z-10">
          <Button>Get Started Today</Button>
        </div>
      </div>

      <Image
        src="/cta-overlay.png"
        className="absolute inset-0 z-0 object-cover rounded-xl"
        fill
        alt="CTA"
      />
    </section>
  );
};

export default CTA;
