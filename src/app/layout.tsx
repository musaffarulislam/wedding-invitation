import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const swasamFont = localFont({
  src: "../assets/swasam.ttf",
  display: "swap",
  variable: "--font-swasam",
});

export const metadata: Metadata = {
  title: "Nafla & Nadeer Wedding",
  description: "Wedding Invitation - Join us in celebrating the union of Nafla and Nadeer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@100..800&family=Allura&family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased ${swasamFont.variable}`}>{children}</body>
    </html>
  );
}