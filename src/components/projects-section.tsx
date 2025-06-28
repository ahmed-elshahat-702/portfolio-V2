"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import Image from "next/image";
import { BackgroundElements } from "./background-elements";

const projects = [
  {
    id: 1,
    title: "Recipe Hub",
    description: (t: (key: string) => string) =>
      t("projects.items.recipeHub.description"),
    image: "/projects/recipe-hub.png?height=300&width=400",
    technologies: ["Next", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ahmed-elshahat-702/recipe-hub",
    demo: "https://bondok-recipe-hub.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Random Advice Generator",
    description: (t: (key: string) => string) =>
      t("projects.items.randomAdvice.description"),
    image: "/projects/random-advice.png?height=300&width=400",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ahmed-elshahat-702/random-advice-generator",
    demo: "https://bondok-random-advice.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "Hangman Game",
    description: (t: (key: string) => string) =>
      t("projects.items.hangmanGame.description"),
    image: "/projects/hangman-game.png?height=300&width=400",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ahmed-elshahat-702/hang-man",
    demo: "https://bondok-hang-man.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Age Calculator",
    description: (t: (key: string) => string) =>
      t("projects.items.ageCalculator.description"),
    image: "/projects/age-calculator.png?height=300&width=400",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ahmed-elshahat-702/age-calculator",
    demo: "https://bondok-age-calculator.vercel.app/",
    featured: false,
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <BackgroundElements />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-main" />
            {t("projects.featured.title")}
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="pt-0 group hover:shadow-2xl transition-all duration-300 border-main/20 hover:border-main/40 overflow-hidden">
                  <div className="relative overflow-hidden w-full h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.description(t)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 border-main text-main hover:bg-main hover:text-main-foreground"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t("projects.viewCode")}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1 bg-main hover:bg-main/90 text-main-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.liveDemo")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            {t("projects.other.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pt-0 group hover:shadow-xl transition-all duration-300 border-main/10 hover:border-main/30 h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description(t)}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 text-main hover:bg-main/10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1 text-main hover:bg-main/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
