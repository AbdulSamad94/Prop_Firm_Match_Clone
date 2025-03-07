import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navbar";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Prop Firm Match: Find the Perfect Prop Firm For You",
  description:
    "Discover the best prop trading firms of 2024 with our comprehensive reviews, comparisons, rankings, and profit splits to find your ideal match.",
  icons: [{ url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <nav>
          <Navbar />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
