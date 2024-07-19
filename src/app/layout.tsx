import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navbar } from "@/shared/homepage/Navbar";
import { ThemeProvider } from "@/shared/homepage/theme-provider";
import { Footer } from "@/shared/homepage/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <GoogleAnalytics gaId="G-T2MWL6PH5Y" />
        </body>
      </ThemeProvider>
    </html>
  );
}
