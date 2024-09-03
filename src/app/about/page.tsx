import React from "react";
import Hero from "@/sections/about/Hero";
import OurMission from "@/sections/about/OurMission";
import Values from "@/sections/about/Values";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main>
      <Hero />
      <OurMission />
      <Values />
      <CTA />
    </main>
  );
};

export default AboutPage;
