'use client';

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeInitializer from "@/components/ThemeInitializer";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ThemeInitializer />
      <SmoothScroll />
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
} 