import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/layout/language-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "Ahmed - Full Stack Developer",
  description:
    "Professional portfolio of Ahmed elshahat, a full-stack web developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${inter.variable}
          antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <main className="w-full max-w-screen min-h-screen overflow-x-hidden">
              <Header />
              {children}
              <Footer />
            </main>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
