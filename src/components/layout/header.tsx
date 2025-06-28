"use client";

import { useLanguage } from "@/components/layout/language-provider";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageToggler from "./language-toggler";
import Logo from "./logo";
import { ModeToggler } from "./theme-toggler";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  // { key: "nav.stats", href: "#stats" },
  { key: "nav.services", href: "#services" },
  // { key: "nav.process", href: "#process" },
  { key: "nav.projects", href: "#projects" },
  // { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.cv", href: "#cv" },
  { key: "nav.certificates", href: "#certificates" },
  { key: "nav.contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (!isMobileMenuOpen) {
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
          setIsVisible(false);
        } else if (
          currentScrollY < lastScrollYRef.current ||
          currentScrollY < 50
        ) {
          setIsVisible(true);
        }
      }
      lastScrollYRef.current = currentScrollY;

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
  }, [isMobileMenuOpen]);

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
        {/* Logo */}
        <Logo />

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
                {t(item.key)}
                {activeSection === item.key && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 bg-main rounded-full" />
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Controllers */}
        <div className="flex items-center gap-2">
          {/* Language Toggler */}
          <LanguageToggler />
          {/* Theme Toggler */}
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
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const section = document.getElementById(item.key);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else if (item.href === "#") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <span className="relative inline-block">
                    {t(item.key)}
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
