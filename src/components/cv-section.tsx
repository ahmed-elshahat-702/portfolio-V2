"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { useLanguage } from "@/components/layout/language-provider";
import Link from "next/link";

export function CVSection() {
  const { t } = useLanguage();

  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("cv.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("cv.description")}
          </p>
        </motion.div>

        {/* Download Options */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {t("cv.downloadOptions")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-main/20 hover:border-main/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">
                        {t("cv.downloadOptions.english")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("cv.downloadOptions.englishDescription")}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="bg-main hover:bg-main/90 text-main-foreground"
                    >
                      <Link
                        href="/cv-en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-main/20 hover:border-main/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">
                        {t("cv.downloadOptions.arabic")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("cv.downloadOptions.arabicDescription")}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-main text-main hover:bg-main hover:text-main-foreground"
                    >
                      <Link
                        href="/cv-ar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Download className="mr-2 h-4 w-4" />
                        تحميل
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-main">4+</div>
                <div className="text-sm text-muted-foreground">
                  {t("cv.experienceYears")}
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-main">15+</div>
                <div className="text-sm text-muted-foreground">
                  {t("cv.technologies")}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
