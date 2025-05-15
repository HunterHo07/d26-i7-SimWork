'use client';

import { useEffect } from 'react';
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';

  // Check if we're running on GitHub Pages
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      console.log('Running on GitHub Pages');
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SimWork is an AI-driven immersive work simulation platform that revolutionizes how people learn, practice, and demonstrate professional skills." />
        <meta name="keywords" content="work simulation, AI training, skill development, hiring assessment, immersive learning" />
        <title>SimWork - The Future of Work Simulation</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <script src={`${basePath}/spa-redirect.js`} />
        <script src={`${basePath}/github-pages-router.js`} />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white dark:bg-dark-400 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
