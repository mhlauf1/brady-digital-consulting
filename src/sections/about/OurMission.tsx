import React from "react";

const OurMission = () => {
  return (
    <section className="max-w-screen-2xl gap-8 px-8 py-36 mx-auto flex flex-col lg:flex-row justify-between">
      <div className="flex flex-1">
        <h2>Our Mission</h2>
      </div>

      <div className="flex leading-[160%] flex-col gap-6 text-neutral-500 text-md flex-1">
        <p>
          Founded as a family-owned business, Brady Digital Consulting has grown
          into a trusted name in the Amazon and e-commerce consulting industry.
          Our journey began with a passion for helping brands navigate the
          complex digital marketplace, and over the years, we have established
          ourselves as leaders through unwavering commitment and exceptional
          service.
        </p>
        <p>
          Our rich history is a testament to our dedication, expertise, and the
          lasting relationships we&apos;ve built with our clients.
        </p>
        <p>
          What started as a small, dedicated team has now expanded into a robust
          organization known for driving impressive results. We pride ourselves
          on our ability to adapt and evolve with the ever-changing digital
          landscape, ensuring our clients always stay ahead of the curve.{" "}
        </p>
      </div>
    </section>
  );
};

export default OurMission;
