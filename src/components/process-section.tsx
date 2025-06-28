"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
  Users,
} from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";

const processSteps = [
  {
    id: 1,
    title: (t: (key: string) => string) => t("process.steps.1.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.1.description"),
    icon: MessageCircle,
    color: "from-blue-500 to-blue-600",
    details: [
      (t: (key: string) => string) => t("process.steps.1.details.0"),
      (t: (key: string) => string) => t("process.steps.1.details.1"),
      (t: (key: string) => string) => t("process.steps.1.details.2"),
      (t: (key: string) => string) => t("process.steps.1.details.3"),
    ],
  },
  {
    id: 2,
    title: (t: (key: string) => string) => t("process.steps.2.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.2.description"),
    icon: Lightbulb,
    color: "from-purple-500 to-purple-600",
    details: [
      (t: (key: string) => string) => t("process.steps.2.details.0"),
      (t: (key: string) => string) => t("process.steps.2.details.1"),
      (t: (key: string) => string) => t("process.steps.2.details.2"),
      (t: (key: string) => string) => t("process.steps.2.details.3"),
    ],
  },
  {
    id: 3,
    title: (t: (key: string) => string) => t("process.steps.3.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.3.description"),
    icon: Code,
    color: "from-green-500 to-green-600",
    details: [
      (t: (key: string) => string) => t("process.steps.3.details.0"),
      (t: (key: string) => string) => t("process.steps.3.details.1"),
      (t: (key: string) => string) => t("process.steps.3.details.2"),
      (t: (key: string) => string) => t("process.steps.3.details.3"),
    ],
  },
  {
    id: 4,
    title: (t: (key: string) => string) => t("process.steps.4.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.4.description"),
    icon: CheckCircle,
    color: "from-orange-500 to-orange-600",
    details: [
      (t: (key: string) => string) => t("process.steps.4.details.0"),
      (t: (key: string) => string) => t("process.steps.4.details.1"),
      (t: (key: string) => string) => t("process.steps.4.details.2"),
      (t: (key: string) => string) => t("process.steps.4.details.3"),
    ],
  },
  {
    id: 5,
    title: (t: (key: string) => string) => t("process.steps.5.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.5.description"),
    icon: Rocket,
    color: "from-red-500 to-red-600",
    details: [
      (t: (key: string) => string) => t("process.steps.5.details.0"),
      (t: (key: string) => string) => t("process.steps.5.details.1"),
      (t: (key: string) => string) => t("process.steps.5.details.2"),
      (t: (key: string) => string) => t("process.steps.5.details.3"),
    ],
  },
  {
    id: 6,
    title: (t: (key: string) => string) => t("process.steps.6.title"),
    description: (t: (key: string) => string) =>
      t("process.steps.6.description"),
    icon: Users,
    color: "from-cyan-500 to-cyan-600",
    details: [
      (t: (key: string) => string) => t("process.steps.6.details.0"),
      (t: (key: string) => string) => t("process.steps.6.details.1"),
      (t: (key: string) => string) => t("process.steps.6.details.2"),
      (t: (key: string) => string) => t("process.steps.6.details.3"),
    ],
  },
];

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("process.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("process.description")}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-main via-background to-main transform -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <Card className="border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-main/5 to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotateZ: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <step.icon className="h-6 w-6 text-main-foreground" />
                        </motion.div>
                        <div className="w-8 h-8 bg-main rounded-full flex items-center justify-center font-bold text-sm text-main-foreground">
                          {step.id}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-main transition-colors">
                        {step.title(t)}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description(t)}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-main rounded-full" />
                            {detail(t)}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-main to-background rounded-full items-center justify-center shadow-lg z-10">
                  <step.icon className="h-8 w-8 text-main-foreground" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 bg-gradient-to-br from-main/10 to-background/10 backdrop-blur-xl shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {t("process.cta.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("process.cta.description")}
              </p>
              <Button
                asChild
                className="bg-main hover:bg-main/90 font-semibold px-8 py-4 rounded-2xl transition-colors"
              >
                <Link href="#contact" className={buttonVariants()}>
                  {t("process.cta.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
