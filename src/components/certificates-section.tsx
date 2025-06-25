"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
// import { useLanguage } from "@/components/language-provider"
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "AWS-SAA-2024-001",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "AWS Services", "Security"],
  },
  {
    id: 2,
    title: "React Developer Certification",
    organization: "Meta",
    date: "2023",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "META-REACT-2023-456",
    verifyUrl: "https://coursera.org/verify",
    skills: ["React", "JavaScript", "Frontend Development"],
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    organization: "freeCodeCamp",
    date: "2023",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "FCC-FULLSTACK-2023-789",
    verifyUrl: "https://freecodecamp.org/certification",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Google Cloud Professional",
    organization: "Google Cloud",
    date: "2023",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "GCP-PRO-2023-123",
    verifyUrl: "https://cloud.google.com/certification",
    skills: ["GCP", "Kubernetes", "DevOps"],
  },
  {
    id: 5,
    title: "MongoDB Developer Certification",
    organization: "MongoDB University",
    date: "2022",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "MONGO-DEV-2022-567",
    verifyUrl: "https://university.mongodb.com/certification",
    skills: ["MongoDB", "Database Design", "Aggregation"],
  },
  {
    id: 6,
    title: "TypeScript Fundamentals",
    organization: "Microsoft",
    date: "2022",
    image: "/placeholder.svg?height=100&width=100",
    credentialId: "MS-TS-2022-890",
    verifyUrl: "https://docs.microsoft.com/certification",
    skills: ["TypeScript", "JavaScript", "Type Safety"],
  },
];

export function CertificatesSection() {
  // const { t } = useLanguage()

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {/* {t("certificates.title")} */}
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that validate my
            expertise in modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-main/20 hover:border-main/40 h-full">
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.organization}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <p className="text-main font-medium">
                    {certificate.organization}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {certificate.date}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {certificate.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-2">
                      ID: {certificate.credentialId}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        window.open(certificate.verifyUrl, "_blank")
                      }
                      className="inline-flex items-center gap-1 text-main hover:text-main/80 text-sm font-medium"
                    >
                      <Award className="h-4 w-4" />
                      Verify Certificate
                      <ExternalLink className="h-3 w-3" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
