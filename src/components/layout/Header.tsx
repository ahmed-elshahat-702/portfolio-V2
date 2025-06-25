"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggler } from "../mode-toggler";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "skills", href: "/skills" },
  { key: "resume", href: "/resume" },
  { key: "certificates", href: "/certificates" },
  { key: "contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (!isMobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);

      let found = false;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].key);
        if (section && section.getBoundingClientRect().top <= 80) {
          setActiveSection(navItems[i].key);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) setIsVisible(true);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`py-1.5 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "shadow-xl backdrop-blur bg-white/70 dark:bg-gray-900/70"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 max-w-6xl mx-auto">
        {/* Logo and Title */}
        <Link
          href="/"
          className="flex items-center gap-2 select-none text-2xl font-bold"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/placeholder-logo.png"
              alt="Logo"
              fill
              className="rounded-full object-cover border-2 border-white shadow"
            />
          </div>
          Ahmed
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center md:gap-2 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative flex flex-col items-center px-3 py-1.5 capitalize transition-colors duration-200 ${
                activeSection === item.key
                  ? "text-main"
                  : "text-gray-700 dark:text-gray-300 hover:text-main/80"
              }`}
              aria-current={activeSection === item.key ? "page" : undefined}
            >
              <span className="relative inline-block">
                {item.key}
                {activeSection === item.key && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 bg-main rounded-full" />
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <ModeToggler />
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded transition ${
              isMobileMenuOpen
                ? "bg-gray-300 dark:bg-gray-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              } ${isScrolled ? "bg-main" : "bg-gray-800 dark:bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 my-1 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              } ${isScrolled ? "bg-main" : "bg-gray-800 dark:bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              } ${isScrolled ? "bg-main" : "bg-gray-800 dark:bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-xl px-4 py-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.key} className="text-left">
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 capitalize rounded transition-colors duration-200 ${
                    activeSection === item.key
                      ? "text-main"
                      : "text-gray-700 dark:text-gray-300 hover:text-main/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative inline-block">
                    {item.key}
                    {activeSection === item.key && (
                      <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 bg-main rounded-full" />
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
