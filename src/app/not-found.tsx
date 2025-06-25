"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <h1 className="text-9xl lg:text-[12rem] font-bold text-golden/20 select-none">
              404
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 border-4 border-dashed border-golden/30 rounded-full" />
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Page Not Found</h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Oops! The page you&apos;re looking for seems to have wandered off
              into the digital void.
            </p>
          </div>

          {/* Easter Egg */}
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <div className="bg-background p-8 rounded-2xl border-2 border-golden text-center">
                <Sparkles className="h-16 w-16 text-golden mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  🎉 Easter Egg Found!
                </h3>
                <p className="text-muted-foreground mb-4">
                  You discovered my secret! Here&apos;s a fun fact: This
                  portfolio was built with over 2000 lines of code and lots of
                  ☕
                </p>
                <p className="text-golden font-semibold">
                  &quot;The best error messages are the ones that make you
                  smile!&quot; - Ahmed
                </p>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-golden hover:bg-golden/90 text-black"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-golden text-golden hover:bg-golden hover:text-black"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Hidden Easter Egg Trigger */}
          <motion.button
            onClick={handleEasterEgg}
            className="text-xs text-muted-foreground/50 hover:text-golden transition-colors mt-8"
            whileHover={{ scale: 1.1 }}
          >
            🥚 Click me for a surprise
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
