import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarMain } from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MoodTunes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50">
          <NavbarMain />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
