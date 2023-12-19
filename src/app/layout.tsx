import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
import NavBar from "@/components/NavBar";
import ThemeSwitch from "@/components/ThemeSwitch";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
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
          transition: "all 0.15s ease",
        }}
      >
        <div className="noisetexture-overlay" />
        <Providers>
          <div className="text-text">
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-2">
              {children}
              <ThemeSwitch />
              {/* <Footer /> */}
            </div>
            <NavBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
