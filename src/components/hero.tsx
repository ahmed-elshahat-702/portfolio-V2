"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, Eye, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundElements } from "./background-elements";
import { TypewriterAnimation } from "./typewriter-animation";
import { useLanguage } from "@/components/layout/language-provider";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <BackgroundElements />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="block">{t("hero.greeting")}</span>
              </motion.h1>

              <TypewriterAnimation />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="font-semibold px-8 py-6 text-lg rounded-2xl group"
                >
                  <Link href="#projects" className={buttonVariants()}>
                    <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    {t("hero.viewProjects")}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 py-6 text-lg rounded-2xl group"
                >
                  <Link
                    href="/cv-en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    {t("hero.downloadCV")}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-main/30"
                style={{
                  top: "-10px",
                  left: "-10px",
                  right: "-10px",
                  bottom: "-10px",
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-60 md:w-80 h-60 md:h-80 rounded-full overflow-hidden border-4 border-main/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-main/10 to-transparent"
              >
                <Image
                  src="/avatar.png"
                  alt="Ahmed - Full Stack Developer"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-main/20 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-main/20 rounded-full backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <Button
            onClick={scrollToNext}
            variant="outline"
            className="flex flex-col items-center gap-0 py-6 border-main/40 bg-main/10 hover:bg-main/20  rounded-2xl shadow-lg backdrop-blur-lg transition-all group cursor-pointer"
            aria-label="Scroll Down"
          >
            <span className="text-sm font-semibold text-main group-hover:text-main/80 transition-colors tracking-wider uppercase">
              {t("hero.scrollDown")}
            </span>
            <span className="relative flex flex-col items-center">
              <ChevronDown className="h-8 w-8 text-main group-hover:text-main/80 animate-bounce" />
              <span className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary/70 rounded-full opacity-70 animate-pulse" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
