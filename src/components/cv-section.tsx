"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

// import { useLanguage } from "@/components/language-provider"

export function CVSection() {
  // const { t, language } = useLanguage()

  const handleDownloadCV = (lang: "en" | "ar") => {
    // In a real application, you would have actual PDF files
    const filename = lang === "en" ? "cv-en.pdf" : "cv-ar.pdf";
    window.open(`/${filename}`, "_blank");
  };

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
            {/* {t("cv.title")} */}
            My CV
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {/* {t("cv.description")} */}
            Here you can find my professional CV, available for download in both
            English and Arabic versions. Feel free to preview or download the CV
            that suits your needs.
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
            <h3 className="text-2xl font-bold mb-6">Download Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-main/20 hover:border-main/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">English Version</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete CV in English (PDF format)
                      </p>
                    </div>
                    <Button
                      onClick={() => handleDownloadCV("en")}
                      className="bg-main hover:bg-main/90 text-main-foreground"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-main/20 hover:border-main/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">Arabic Version</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete CV in Arabic (PDF format)
                      </p>
                    </div>
                    <Button
                      onClick={() => handleDownloadCV("ar")}
                      variant="outline"
                      className="border-main text-main hover:bg-main hover:text-main-foreground"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      تحميل
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
                  Years Experience
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-main">15+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
