import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photos Frame Maker",
  description:
    "Welcome to PhotoFrameMaker, your go-to destination for transforming your cherished memories into stunning visual narratives. Our user-friendly online platform empowers you to effortlessly create personalized photo frames that capture the essence of each special moment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
