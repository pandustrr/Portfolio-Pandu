import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import BackgroundElements from "@/components/BackgroundElements";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: "Pandu Satria | Fullstack Developer Portfolio",
  description: "Professional portfolio of Pandu Satria, a Fullstack Developer and Computer Science student.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Portfolio", "Web Developer", "Pandu Satria"],
  authors: [{ name: "Pandu Satria" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <LanguageProvider>
            <BackgroundElements />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
