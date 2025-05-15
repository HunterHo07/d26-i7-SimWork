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

export const metadata = {
  title: "SimWork - The Future of Work Simulation",
  description: "SimWork is an AI-driven immersive work simulation platform that revolutionizes how people learn, practice, and demonstrate professional skills.",
  keywords: "work simulation, AI training, skill development, hiring assessment, immersive learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-dark-400 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
