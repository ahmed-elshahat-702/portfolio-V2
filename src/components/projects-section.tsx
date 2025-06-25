"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
// import { useLanguage } from "@/components/language-provider"
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/ahmed/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
    ],
    github: "https://github.com/ahmed/taskmanager",
    demo: "https://taskmanager-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    github: "https://github.com/ahmed/weather-dashboard",
    demo: "https://weather-dashboard-demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
    github: "https://github.com/ahmed/social-analytics",
    demo: "https://social-analytics-demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Complete LMS with course creation, student progress tracking, and interactive learning modules.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ahmed/lms",
    demo: "https://lms-demo.com",
    featured: true,
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency portfolio tracking with price alerts and market analysis tools.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Redux", "CoinGecko API", "Firebase"],
    github: "https://github.com/ahmed/crypto-tracker",
    demo: "https://crypto-tracker-demo.com",
    featured: false,
  },
];

export function ProjectsSection() {
  // const { t } = useLanguage()

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {/* {t("projects.title")} */}
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-main" />
            Featured Projects
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
                      {project.description}
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
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1 bg-main hover:bg-main/90 text-main-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
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
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pt-0 group hover:shadow-xl transition-all duration-300 border-main/10 hover:border-main/30 h-full">
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
                      {project.description}
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
