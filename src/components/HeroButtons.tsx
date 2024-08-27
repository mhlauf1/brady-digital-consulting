import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="flex relative flex-wrap z-100 items-center gap-6 mb-20">
      <Link href="/how-it-works">
        <Button>How It Works</Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
