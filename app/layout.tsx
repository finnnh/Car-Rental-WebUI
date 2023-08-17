import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusCar | Rental",
  description: "NexusCar Rental Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
