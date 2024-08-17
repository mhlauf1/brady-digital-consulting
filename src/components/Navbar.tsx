import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative">
      <header className="w-full absolute top-0 right-0 left-0 py-2 flex justify-between  items-center px-4  max-w-screen-2xl mx-auto z-10">
        <Link href="/">
          <img
            src="./white-logo.png"
            alt="Brady Digital Consulting Logo"
            height={92}
            width={116}
          />
        </Link>

        <ul className="md:flex items-center hidden text-neutral-100 text-sm  gap-8">
          <li className="hover:text-white/70 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white/70 transition">
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li className="hover:text-white/70 transition">
            <Link href="/benefits">Benefits</Link>
          </li>
          <li className="hover:text-white/70 transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-white/70 transition">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
