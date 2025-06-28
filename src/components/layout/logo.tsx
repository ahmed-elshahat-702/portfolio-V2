import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/components/layout/language-provider";

const Logo = () => {
  const { language } = useLanguage();

  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none text-2xl font-bold"
    >
      {/* Logo with a border and shadow */}
      <div className="w-fit h-fit rounded-full border-2 border-white shadow p-1">
        <div className="relative w-7 h-7">
          <Image src="/logo.svg" alt="Logo" fill className="object-cover" />
        </div>
      </div>
      {language === "en" ? (
        <Image
          src="/name-en.svg"
          alt="name"
          width={90}
          height={40}
          className="hidden md:block"
        />
      ) : (
        <Image
          src="/name-ar.svg"
          alt="name"
          width={90}
          height={40}
          className="hidden md:block"
        />
      )}
    </Link>
  );
};

export default Logo;
