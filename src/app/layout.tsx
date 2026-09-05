// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Gakuran (.otf)
const gakuran = localFont({
  src: "../fonts/Gakuran.otf",
  variable: "--font-gakuran",
});

// 2. Grandover (.ttf)
const grandover = localFont({
  src: "../fonts/Grandover.ttf",
  variable: "--font-grandover",
});

// 3. Hexaline (.otf)
const hexaline = localFont({
  src: "../fonts/Hexaline.otf",
  variable: "--font-hexaline",
});

// 4. ModernCyber (.otf)
const modernCyber = localFont({
  src: "../fonts/ModernCyber.otf",
  variable: "--font-moderncyber",
});

// 5. Ryzes (.ttf)
const ryzes = localFont({
  src: "../fonts/Ryzes.ttf",
  variable: "--font-ryzes",
});

// 6. Savery (.ttf)
const savery = localFont({
  src: "../fonts/Savery.ttf",
  variable: "--font-savery",
});

// 7. SaveryOutline (.ttf)
const saveryOutline = localFont({
  src: "../fonts/SaveryOutline.ttf",
  variable: "--font-savery-outline",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sam Peter — Portfolio",
  description: "Software & AI Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${gakuran.variable} 
        ${grandover.variable} 
        ${hexaline.variable} 
        ${modernCyber.variable} 
        ${ryzes.variable} 
        ${savery.variable} 
        ${saveryOutline.variable} 
        ${geistMono.variable} 
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
