"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, FileText } from "lucide-react";
// import { useLanguage } from "@/components/language-provider"

export function CVSection() {
  // const { t, language } = useLanguage()

  const handleDownloadCV = (lang: "en" | "ar") => {
    // In a real application, you would have actual PDF files
    const filename = lang === "en" ? "cv-ahmed-en.pdf" : "cv-ahmed-ar.pdf";
    window.open(`/${filename}`, "_blank");
  };

  const handlePreviewCV = () => {
    // Open CV preview modal or new tab
    window.open("/cv-preview", "_blank");
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-main/20 hover:border-main/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-main" />
                  {/* {t("cv.preview")} */}
                  CV Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-main mx-auto mb-4" />
                    <p className="text-muted-foreground">CV Preview</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click to view full CV
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handlePreviewCV}
                  variant="outline"
                  className="w-full border-main text-main hover:bg-main hover:text-main-foreground"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  {/* {t("cv.preview")} */}
                  Preview CV
                </Button>
              </CardContent>
            </Card>
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
              <div className="space-y-4">
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
                  <div className="text-2xl font-bold text-main">5+</div>
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
      </div>
    </section>
  );
}
