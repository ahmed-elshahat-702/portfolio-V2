"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
// import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Ahmed delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Agency",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Working with Ahmed was a game-changer for our development team. His React expertise and mentoring skills helped us deliver multiple successful projects. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Ahmed transformed our vision into a beautiful, functional web application. His UI/UX skills combined with solid development knowledge made him the perfect choice for our startup.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Marketing Director",
    company: "Creative Studio",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The website Ahmed built for us increased our conversion rate by 40%. His understanding of both technical and business requirements is impressive.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Manager",
    company: "E-commerce Plus",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Ahmed's full-stack development skills are outstanding. He built our entire platform from scratch and continues to provide excellent support and updates.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Tech Lead",
    company: "StartupHub",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Professional, reliable, and incredibly skilled. Ahmed's code quality and documentation standards are top-notch. A pleasure to work with!",
  },
];

export function TestimonialsSection() {
  // const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what some of my
            clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-8 w-8 text-main" />
                </div>

                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-main/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-6 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-main text-main" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-main/20">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-main/10 text-main font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold group-hover:text-main transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Happy Clients", value: "30+" },
            { label: "Projects Completed", value: "50+" },
            { label: "5-Star Reviews", value: "28" },
            { label: "Repeat Clients", value: "85%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-main mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
