import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asifa Siraj | Frontend Developer & Creative Technologist",
  description:
    "Portfolio of Asifa Siraj — Frontend Developer, VR Enthusiast, and CS Student at NED University. Building interactive, accessible, and visually stunning web experiences.",
  keywords: [
    "Asifa Siraj",
    "Frontend Developer",
    "Three.js",
    "React",
    "Next.js",
    "Portfolio",
    "NED University",
    "VR Development",
    "Web Developer Karachi",
  ],
  authors: [{ name: "Asifa Siraj" }],
  openGraph: {
    title: "Asifa Siraj | Frontend Developer & Creative Technologist",
    description: "Building interactive, accessible, and visually stunning web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
