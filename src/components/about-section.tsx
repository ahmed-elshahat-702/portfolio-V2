"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Earth, Pen, Server } from "lucide-react";
import { useLanguage } from "./layout/language-provider";

const stats = [
  {
    key: (t: (key: string) => string) => t("about.stats.frontend"),
    value: "4+",
    icon: Earth,
  },
  {
    key: (t: (key: string) => string) => t("about.stats.fullstack"),
    value: "2+",
    icon: Server,
  },
  {
    key: (t: (key: string) => string) => t("about.stats.logoDesign"),
    value: "2+",
    icon: Pen,
  },
  // { key: (t: (key: string) => string) => t("about.stats.experience"), value: "5+", icon: Briefcase },
  // { key: (t: (key: string) => string) => t("about.stats.projects"), value: "6+", icon: GraduationCap },
  // { key: (t: (key: string) => string) => t("about.stats.clients"), value: "30+", icon: MapPin },
];

const timeline = [
  {
    year: "2026",
    title: (t: (key: string) => string) => t("about.timeline.nursing.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.nursing.company"),
    type: "work",
    description: (t: (key: string) => string) =>
      t("about.timeline.nursing.description"),
  },
  {
    year: "2025",
    title: (t: (key: string) => string) =>
      t("about.timeline.logoDesigner.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.logoDesigner.company"),
    type: "work",
    description: (t: (key: string) => string) =>
      t("about.timeline.logoDesigner.description"),
  },
  {
    year: "2024",
    title: (t: (key: string) => string) => t("about.timeline.fullStack.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.fullStack.company"),
    type: "work",
    description: (t: (key: string) => string) =>
      t("about.timeline.fullStack.description"),
  },
  {
    year: "2023",
    title: (t: (key: string) => string) => t("about.timeline.backend.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.backend.company"),
    type: "education",
    description: (t: (key: string) => string) =>
      t("about.timeline.backend.description"),
  },
  {
    year: "2023",
    title: (t: (key: string) => string) => t("about.timeline.frontend.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.frontend.company"),
    type: "work",
    description: (t: (key: string) => string) =>
      t("about.timeline.frontend.description"),
  },
  {
    year: "2022",
    title: (t: (key: string) => string) =>
      t("about.timeline.webFundamentals.title"),
    company: (t: (key: string) => string) =>
      t("about.timeline.webFundamentals.company"),
    type: "work",
    description: (t: (key: string) => string) =>
      t("about.timeline.webFundamentals.description"),
  },
];

const skills = [
  {
    name: (t: (key: string) => string) => t("about.skills.nextjs"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.react"),
    level: 85,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.typescript"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.nodejs"),
    level: 75,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.backend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.mongodb"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.database"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.expressJS"),
    level: 95,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.backend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.bootstrap"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.styling"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.tailwindcss"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.styling"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.html"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.css"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.javascript"),
    level: 90,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.frontend"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.git"),
    level: 80,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.versionControl"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.github"),
    level: 80,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.versionControl"),
  },
  {
    name: (t: (key: string) => string) => t("about.skills.nursing"),
    level: 80,
    category: (t: (key: string) => string) =>
      t("about.skills.categories.other"),
  },
  // { name: (t: (key: string) => string) => t("about.skills.python"), level: 80, category: (t: (key: string) => string) => t("about.skills.categories.programmingLanguage") },
  // { name: (t: (key: string) => string) => t("about.skills.postgresql"), level: 75, category: (t: (key: string) => string) => t("about.skills.categories.database") },
  // { name: (t: (key: string) => string) => t("about.skills.aws"), level: 70, category: (t: (key: string) => string) => t("about.skills.categories.cloud") },
  // { name: (t: (key: string) => string) => t("about.skills.docker"), level: 75, category: (t: (key: string) => string) => t("about.skills.categories.devops") },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <Card
              key={stat.key(t)}
              className="text-center border-main/20 hover:border-main/40 transition-colors"
            >
              <CardContent className="p-8">
                <stat.icon className="h-12 w-12 text-main mx-auto mb-4" />
                <div className="text-4xl font-bold text-main mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.key(t)}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {t("about.skills.experienceAndEducation")}
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        item.type === "work" ? "bg-main" : "bg-primary"
                      }`}
                    />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={item.type === "work" ? "default" : "secondary"}
                      >
                        {item.year}
                      </Badge>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">
                      {item.title(t)}
                    </h4>
                    <p className="text-main mb-2">{item.company(t)}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.description(t)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {t("about.skills.skillsAndTechnologies")}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                // Ensure key is always a string
                const skillName =
                  typeof skill.name === "function" ? skill.name(t) : skill.name;
                return (
                  <motion.div
                    key={skillName}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skillName}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-main h-2 rounded-full"
                      />
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {typeof skill.category === "function"
                        ? skill.category(t)
                        : skill.category}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
