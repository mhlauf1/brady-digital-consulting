import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" w-full py-3  z-100">
      <header className="w-full flex justify-between  items-center px-4  max-w-screen-2xl mx-auto">
        <Link href="/">
          <img
            src="./color-logo.png"
            alt="Brady Digital Consulting Logo"
            height={92}
            width={116}
          />
        </Link>

        <ul className="md:flex items-center hidden relative text-neutral-700 text-sm gap-8">
          <li className="hover:text-white/70 cursor-pointer transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white/70 cursor-pointer transition">
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li className="hover:text-white/70 cursor-pointer transition">
            <Link href="/benefits">Benefits</Link>
          </li>
          <li className="hover:text-white/70 cursor-pointer transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-white/70  transition">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
