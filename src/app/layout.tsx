import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AnimateP from "@/components/AnimateP";

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
    <html lang="en">
      <body className={`${inter.className}  selection:bg-primary-200/90`}>
        <AnimateP>
          <NavBar />
          {children}
        </AnimateP>
      </body>
    </html>
  );
}
