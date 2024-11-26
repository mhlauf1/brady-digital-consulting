import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 items-center justify-center md:pt-24 py-12 md:pb-16 md:gap-8 gap-6 bg-neutral-900">
      <Link className="hidden md:block" href="/">
        <div className="h-auto w-[100px] md:w-[120px]">
          <Image
            src="/brady-footer-logo.png"
            alt="Brady Digital Consulting Logo"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </Link>
      <ul className="flex md:mb-12 text-base lg:mb-0 flex-col lg:flex-row items-center gap-5 lg:gap-20 mr-[-12px] text-white/70 hovert:text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link href="/benefits">Benefits</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>

      <div className="flex flex-col items-center gap-2">
        <p className="text-neutral-500  text-xs  text-center md:text-left">
          &copy; Brady Digital Consulting 2024. All rights reserved.
        </p>
        <p className="text-neutral-500  text-xs  text-center md:text-left">
          Designed and developed by{" "}
          <a
            href="https://www.lauf.co"
            target="_blank"
            className="font-semibold"
          >
            Lauf.
          </a>
        </p>
      </div>
      <Link className="md:hidden block" href="/">
        <div className="h-auto w-[100px] md:w-[120px]">
          <Image
            src="/brady-footer-logo.png"
            alt="Brady Digital Consulting Logo"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
