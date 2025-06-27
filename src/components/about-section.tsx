"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Earth, Pen, Server } from "lucide-react";

const stats = [
  { key: "Front-End", value: "4+", icon: Earth },
  { key: "Full-stack", value: "2+", icon: Server },
  { key: "Logo Design", value: "2+", icon: Pen },
  // { key: "experience", value: "5+", icon: Briefcase },
  // { key: "projects", value: "6+", icon: GraduationCap },
  // { key: "clients", value: "30+", icon: MapPin },
];

const timeline = [
  {
    year: "2026",
    title: "Nursing",
    company: "New Ismaillia National University",
    type: "work",
    description:
      "Graduated with a Bachelor's degree in Nursing, focusing on patient care and healthcare management.",
  },
  {
    year: "2025",
    title: "Logo Designer",
    company: "Online",
    type: "work",
    description:
      "Designed logos for various clients, focusing on brand identity and visual appeal.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Online",
    type: "work",
    description:
      "Leading development of enterprise web applications using React,, Next, and Node.js.",
  },
  {
    year: "2023",
    title: "Back-End Developer",
    company: "Online",
    type: "education",
    description:
      "Focused on building scalable backend systems with Node.js and Express.",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Online",
    type: "work",
    description:
      "Specialized in React, Next development and UI/UX implementation.",
  },
  {
    year: "2022",
    title: "Basic web development fundamentals",
    company: "Online",
    type: "work",
    description:
      "Completed courses in HTML, CSS, and JavaScript to build a solid foundation in web development.",
  },
];

const skills = [
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "MongoDB", level: 90, category: "Database" },
  { name: "Express.js", level: 95, category: "Backend" },
  { name: "Bootstrap", level: 90, category: "Styling" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Git", level: 80, category: "Version Control" },
  { name: "Github", level: 80, category: "Version Control" },
  { name: "Nursing", level: 80, category: "Other" },
  // { name: "Python", level: 80, category: "Programming Language" },
  // { name: "PostgreSQL", level: 75, category: "Database" },
  // { name: "AWS", level: 70, category: "Cloud" },
  // { name: "Docker", level: 75, category: "DevOps" },
];

export function AboutSection() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a dedicated full-stack developer with expertise in modern web
            technologies. My journey in software development spans several
            years, during which I have honed my skills in both frontend and
            backend development.
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
              key={stat.key}
              className="text-center border-main/20 hover:border-main/40 transition-colors"
            >
              <CardContent className="p-8">
                <stat.icon className="h-12 w-12 text-main mx-auto mb-4" />
                <div className="text-4xl font-bold text-main mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.key}</div>
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
            <h3 className="text-2xl font-bold mb-8">Experience & Education</h3>
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
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-main mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
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
            <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
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
                    {skill.category}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
