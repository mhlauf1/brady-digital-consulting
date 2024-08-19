import Hero from "@/sections/home/Hero";
import Services from "@/sections/home/Services";
import Stats from "@/sections/home/Stats";
import Benefits from "@/sections/home/Benefits";
import HowItWorks from "@/sections/home/HowItWorks";
import Testimonials from "@/sections/home/Testimonials";
import CTA from "@/components/CTA";
import WhyUs from "@/sections/home/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Services />
      <Benefits />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
}
