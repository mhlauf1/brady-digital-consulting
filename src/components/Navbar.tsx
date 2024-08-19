"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="w-full py-4 flex justify-between items-center px-4 max-w-screen-2xl mx-auto z-10">
        <Link href="/">
          <img
            src="./color-logo.png"
            alt="Brady Digital Consulting Logo"
            height={92}
            width={116}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 flex items-center text-neutral-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center text-neutral-900 text-sm gap-8">
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center mt-[10vh] bg-neutral-50 h-auto mx-8 py-8 rounded-md  text-neutral-900 text-lg space-y-6">
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/how-it-works"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/benefits"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-500 transition"
                onClick={toggleMenu}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
