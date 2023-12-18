import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
    <html lang="en">
      <body className={poppins.className}>
        <>
          <div className="noisetexture-overlay" />
          <div className="text-text">
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-2">
              {children}
              {/* <ThemeModeToggle /> */}
              {/* <Footer /> */}
            </div>
            {/* <NavBar /> */}
          </div>
        </>
      </body>
    </html>
  );
}
