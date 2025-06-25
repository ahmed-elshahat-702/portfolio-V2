"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Users,
  Award,
  Clock,
  Coffee,
  Github,
  Star,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  {
    id: 1,
    label: "Lines of Code",
    value: 250000,
    suffix: "+",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    description: "Clean, maintainable code written",
  },
  {
    id: 2,
    label: "Happy Clients",
    value: 30,
    suffix: "+",
    icon: Users,
    color: "from-green-500 to-green-600",
    description: "Satisfied clients worldwide",
  },
  {
    id: 3,
    label: "Projects Completed",
    value: 50,
    suffix: "+",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    description: "Successful projects delivered",
  },
  {
    id: 4,
    label: "Years Experience",
    value: 5,
    suffix: "+",
    icon: Clock,
    color: "from-orange-500 to-orange-600",
    description: "Years in web development",
  },
  {
    id: 5,
    label: "Cups of Coffee",
    value: 1500,
    suffix: "+",
    icon: Coffee,
    color: "from-amber-500 to-amber-600",
    description: "Fuel for late-night coding",
  },
  {
    id: 6,
    label: "GitHub Commits",
    value: 2000,
    suffix: "+",
    icon: Github,
    color: "from-gray-500 to-gray-600",
    description: "Contributions to open source",
  },
  {
    id: 7,
    label: "5-Star Reviews",
    value: 28,
    suffix: "",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
    description: "Excellent client feedback",
  },
  {
    id: 8,
    label: "Technologies Mastered",
    value: 15,
    suffix: "+",
    icon: Zap,
    color: "from-red-500 to-red-600",
    description: "Modern web technologies",
  },
];

function CountUpAnimation({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function StatsSection() {
  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            By the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some statistics that showcase my journey and achievements
            in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-main/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-6 text-center relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="text-2xl lg:text-3xl font-bold text-main mb-2 group-hover:scale-110 transition-transform duration-300">
                    <CountUpAnimation end={stat.value} />
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold mb-2 group-hover:text-main transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </CardContent>

                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                      className="absolute w-1 h-1 bg-main rounded-full"
                      style={{
                        top: `${60 + i * 10}%`,
                        left: `${20 + i * 30}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 bg-gradient-to-br from-main/10 to-background/10 backdrop-blur-xl shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Continuous Growth & Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These numbers represent more than just statistics—they reflect
                my commitment to excellence, continuous learning, and dedication
                to delivering outstanding results. Every project is an
                opportunity to grow and create something meaningful.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
