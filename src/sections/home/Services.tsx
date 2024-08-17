import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const Services = () => {
  return (
    <section className="rounded-t-[50px]  mt-[-100px] z-1000 relative bg-[#282B33] py-36 md:py-48">
      <div className="max-w-screen-2xl px-8 justify-between flex-col gap-12 lg:gap-8 lg:flex-row flex mx-auto">
        <div className="flex flex-1 flex-col  justify-between">
          <h2 className="text-white w-[95%] lg:w-[16ch]">
            Your One-Stop-Shop For Amazon Success.
          </h2>
          <div className="flex flex-col items-start">
            <h3 className="text-white mt-8 mb-4 lg:mb-6">
              Comprehensive Amazon Services{" "}
            </h3>
            <p className="text-white/70 lg:w-[56ch] mb-8">
              Unlock your brand&apos;s full potential with our tailored Amazon
              solutions. From listing optimization to strategic advertising, we
              cover all aspects of your Amazon presence to ensure maximum growth
              and profitability.
            </p>
            <Link href="/services">
              <Button>Explore Services</Button>
            </Link>

            <div className="bg-white/50 h-[1px] w-full lg:w-[65%] mt-12"></div>
          </div>
        </div>
        <div className="h-auto w-[70%] mx-auto lg:w-[40%]">
          <Image
            src="/amazon-1.png"
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

export default Services;
