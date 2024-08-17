import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex lg:flex-col flex-col-reverse items-center justify-center py-12 gap-6 bg-neutral-900">
      <img src="./white-logo.png" alt="Footer logo" height={82} width={116} />
      <ul className="flex mb-8 lg:mb-0 flex-col lg:flex-row items-center gap-8 lg:gap-20 mr-[-12px] text-white/70 hovert:text-white">
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
