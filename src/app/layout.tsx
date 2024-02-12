import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
import NavBar from "@/components/NavBar";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "boyzwhocried",
  description: "personal webpage of boyzwhocried",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={poppins.className}
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
          transition: "all 0.3s ease",
        }}
      >
        <div className="noisetexture-overlay" />
        <Providers>
          <NavBar />
          {children}
          <ThemeSwitch />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
