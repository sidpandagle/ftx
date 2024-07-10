import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swattch",
  description: "Convert anything you need with our easy-to-use online tools! From documents (PDF, Word) and images (JPG, PNG) to audio (MP3) and video (MP4), we've got you covered. Get started converting today!",
  keywords: "online converter, free converter, file converter, document converter, image converter, audio converter, video converter, unit converter, data converter, online tool, free tool, easy to use, fast conversion, batch conversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
