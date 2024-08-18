import React from "react";
import Hero from "@/sections/benefits/Hero";
import WhyBrady from "@/sections/benefits/WhyBrady";
import Stats from "@/sections/benefits/Stats";
import CaseStudies from "@/sections/benefits/CaseStudies";
import CTA from "@/components/CTA";

const BenefitsPage = () => {
  return (
    <main>
      <Hero />
      <WhyBrady />
      <Stats />
      <CaseStudies />
      <CTA />
    </main>
  );
};

export default BenefitsPage;
