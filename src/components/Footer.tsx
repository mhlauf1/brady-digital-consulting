import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex lg:flex-col flex-col-reverse px-4 items-center justify-center py-16 md:gap-12 bg-neutral-900">
      <Link href="/">
        <div className="h-auto w-[150px] md:w-[200px]">
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
      <ul className="flex mb-12 text-base lg:mb-0 flex-col lg:flex-row items-center gap-5 lg:gap-20 mr-[-12px] text-white/70 hovert:text-white">
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
    </footer>
  );
};

export default Footer;
