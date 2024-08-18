import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative">
      <header className="w-full py-4 flex justify-between  items-center px-4 max-w-screen-2xl mx-auto z-10">
        <Link href="/">
          <img
            src="./color-logo.png"
            alt="Brady Digital Consulting Logo"
            height={92}
            width={116}
          />
        </Link>

        <ul className="md:flex hidden  items-center text-neutral-900 text-sm  gap-8">
          <li className="hover:text-neutral-500 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-neutral-500 transition">
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li className="hover:text-neutral-500 transition">
            <Link href="/benefits">Benefits</Link>
          </li>
          <li className="hover:text-neutral-500 transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-neutral-500 transition">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
