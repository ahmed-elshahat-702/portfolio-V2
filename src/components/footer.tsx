"use client";

import { motion } from "framer-motion";
// import { useLanguage } from "@/components/language-provider"
import { Code, Heart } from "lucide-react";
import Logo from "./layout/logo";

export function Footer() {
  // const { t } = useLanguage()
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-main/10 via-muted/60 to-transparent border-t border-main/20 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
        >
          {/* Logo */}
          <Logo />

          <span className="hidden md:inline-block text-muted-foreground">
            |
          </span>
          <p className="text-muted-foreground text-center md:text-left text-sm max-w-xs">
            Building modern web experiences with passion & innovation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:items-end items-center gap-2 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-1">
            <span>© {currentYear} Ahmed.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and</span>
            <Code className="h-4 w-4 text-main" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
