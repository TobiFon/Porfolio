import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobi's Portfolio",
  description: "Tobi's web development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth ">
      <body
        className={`${inter.className} container selection:bg-primary-200/90 max-w-7xl`}
      >
        <NavBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
