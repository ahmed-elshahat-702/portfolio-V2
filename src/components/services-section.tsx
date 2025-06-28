"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Earth, Palette, Server } from "lucide-react";
import { useLanguage } from "./layout/language-provider";

const services = [
  {
    icon: Earth,
    titleKey: "services.web.title",
    descKey: "services.web.desc",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    titleKey: "services.frontend.title",
    descKey: "services.frontend.desc",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Server,
    titleKey: "services.backend.title",
    descKey: "services.backend.desc",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Palette,
    titleKey: "services.logo.title",
    descKey: "services.logo.desc",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-main/20 hover:border-main/40 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 mx-auto rounded-2xl ${service.bgColor} flex items-center justify-center mb-4`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
