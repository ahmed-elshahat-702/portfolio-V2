import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        // ${geistSans.variable} ${geistMono.variable}
        className={`
          ${inter.variable} ${cairo.variable}
          antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full flex min-h-screen">
            <Header />
            {/* Main content area */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
