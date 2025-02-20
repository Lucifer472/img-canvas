import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import { auth } from "@/auth";
import AdsScript from "@/components/ads";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photos Frame Maker",
  description:
    "Welcome to PhotoFrameMaker, your go-to destination for transforming your cherished memories into stunning visual narratives. Our user-friendly online platform empowers you to effortlessly create personalized photo frames that capture the essence of each special moment",
  keywords:
    "Custom Photo Frames, Personalized Framing, Online Photo Frame Creator, DIY Frame Design, Creative Picture Frames, Customizable Photo Gifts, Occasion-Specific Frames, Wedding Photo Frames, Birthday Picture Frames, Holiday Frame Designs, Memory Preservation Tools, Special Event Framing, Elegant Photo Borders, Artistic Frame Templates, Unique Memory Displays, Cherished Moment Frames, Creative Memory Preservation, Easy Online Frame Editor, Custom Text on Frames, Seamless Photo Storytelling",
  openGraph: {
    images: [
      "https://img.missiongujarat.in/i/blogs/Screenshot 2024-02-09 at 6.24.06â¯PM.png",
    ],
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6808814529890463"
          crossOrigin="anonymous"
          async
        />
        {/*  <Toaster position="top-center" /> */}
        <Navbar user={user} />
        <AdsScript />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
