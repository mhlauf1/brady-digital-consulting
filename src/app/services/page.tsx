import React from "react";
import Hero from "@/sections/services/Hero";
import Services from "@/sections/services/Services";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <CTA />
    </main>
  );
};

export default ServicesPage;
