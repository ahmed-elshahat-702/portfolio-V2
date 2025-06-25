"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
  "Full-stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Thinker",
  "Tech Enthusiast",
];

export function TypewriterAnimation() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimer = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const current = titles[index];
    const nextText = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const timeout = setTimeout(
      () => {
        setText(nextText);

        if (!deleting && nextText === current) {
          setPause(true);
        }

        if (deleting && nextText === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, pause, index]);

  return (
    <div className="h-16 flex items-center">
      <span className="text-2xl lg:text-4xl font-bold">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-1 h-8 lg:h-12 bg-foreground ml-1 align-middle"
        />
      </span>
    </div>
  );
}
