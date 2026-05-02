import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HaliFlocks: Join The Flock",
    template: "HaliFlocks | %s",
  },
  description: "A hub for the growing birder community of Halifax and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="/#support" className="support-tab">Support HaliFlocks</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
