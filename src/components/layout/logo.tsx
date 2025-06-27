import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="w-fit h-fit rounded-full border-2 border-white shadow p-1">
      <div className="relative w-7 h-7">
        <Image src="/logo.svg" alt="Logo" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Logo;
