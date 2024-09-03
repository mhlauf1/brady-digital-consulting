import React from "react";
import Hero from "@/sections/how-it-works/Hero";
import ProcessOutline from "@/sections/how-it-works/ProcessOutline";
import Experience from "@/sections/how-it-works/Experience";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
};

const HowItWorksPage = () => {
  return (
    <main>
      <Hero />
      <ProcessOutline />
      <Experience />
      <CTA />
    </main>
  );
};

export default HowItWorksPage;
