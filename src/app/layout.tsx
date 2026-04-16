import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soft SolutionsAI | Where Logic Meets Elegance",
  description: "High-performance AI solutions, POS systems, and system automation for the modern era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-full flex flex-col bg-obsidian text-white`}>
        {children}
      </body>
    </html>
  );
}
