import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RootClientLayout from "@/components/RootClientLayout";
import { SITE_CONFIG } from "@/config/constHero";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  icons: {
    icon: SITE_CONFIG.favicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <RootClientLayout>
          {children}
        </RootClientLayout>
      </body>
    </html>
  );
}
