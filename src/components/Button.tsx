import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({
  children,
  dark,
}: Readonly<{
  children: React.ReactNode;
  dark?: boolean;
}>) => {
  return (
    <button
      className={`${
        dark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
      } items-center rounded-full shadow-lg hover:scale-[101%] text-sm md:text-md transition  flex gap-4 md:px-8 px-6 py-3 md:py-4`}
    >
      <span>{children}</span> <FaArrowRightLong />
    </button>
  );
};

export default Button;
