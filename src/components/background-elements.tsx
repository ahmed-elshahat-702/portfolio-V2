"use client";

import { motion } from "framer-motion";
import { memo } from "react";

function BackgroundElementsComponent() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-golden/15 to-primary/15 rounded-full blur-3xl will-change-transform"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary/15 to-golden/15 rounded-full blur-3xl will-change-transform"
      />

      {/* Abstract Decorative SVGs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 opacity-10 will-change-transform"
      >
        <svg width="32" height="32" viewBox="0 0 40 40" className="text-golden">
          <path
            d="M20 0L24.7 15.3L40 20L24.7 24.7L20 40L15.3 24.7L0 20L15.3 15.3L20 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-16 opacity-10 will-change-transform"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          className="text-primary"
        >
          <circle
            cx="15"
            cy="15"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="15"
            cy="15"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Programming Symbols */}
      {/* <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 left-10 opacity-20 will-change-transform"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="text-primary"
        >
          <text
            x="0"
            y="24"
            fontSize="28"
            fontFamily="monospace"
            fontWeight="bold"
            fill="currentColor"
          >
            {"<"}
          </text>
        </svg>
      </motion.div>*/}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 opacity-20 will-change-transform"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-golden">
          <text
            x="0"
            y="24"
            fontSize="28"
            fontFamily="monospace"
            fontWeight="bold"
            fill="currentColor"
          >
            {";"}
          </text>
        </svg>
      </motion.div>
      {/* <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-5 opacity-20 will-change-transform"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="text-primary"
        >
          <text
            x="0"
            y="24"
            fontSize="28"
            fontFamily="monospace"
            fontWeight="bold"
            fill="currentColor"
          >
            {"{"}
          </text>
        </svg>
      </motion.div> */}

      {/* Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute w-1.5 h-1.5 bg-golden/25 rounded-full will-change-transform"
          style={{
            top: `${15 + i * 15}%`,
            left: `${20 + i * 18}%`,
          }}
        />
      ))}

      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.01] bg-noise" />
    </div>
  );
}

export const BackgroundElements = memo(BackgroundElementsComponent);
