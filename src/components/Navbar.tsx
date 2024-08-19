"use client";
import React, { useState } from "react";
import {
  Navbar as BradyNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import useIsDesktop from "@/hooks/useIsDesktop"; // Adjust the path based on your project structure

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useIsDesktop(); // Determine if the screen is desktop size

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <BradyNav className="bg-white  w-full z-50" shouldHideOnScroll={isDesktop}>
      <div className=" max-w-screen-2xl flex w-full justify-between items-center py-4 mx-auto">
        <NavbarBrand>
          <Link href="/">
            <img
              src="./color-logo.png"
              alt="Brady Digital Consulting Logo"
              height={92}
              width={116}
            />
          </Link>
        </NavbarBrand>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 flex items-center text-neutral-900"
        >
          <svg
            className="w-8 h-8"
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
        <NavbarContent
          className="hidden sm:flex text-neutral-500 gap-6"
          justify="end"
        >
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-black transition"
              href="/about"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              color="foreground"
              className="hover:text-black transition"
              href="/how-it-works"
            >
              How It works
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-black transition"
              href="/benefits"
            >
              Benefits
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-black transition"
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              className="hover:text-black transition"
              href="/contact"
            >
              Get In Touch
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center mt-[10vh] bg-neutral-50 h-auto mx-8 py-12 rounded-md  text-neutral-900 text-lg space-y-6">
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
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BradyNav>
  );
}
