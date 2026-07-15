import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display face — used for headlines, tight tracking, high-weight.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});

// Body face — technical, legible, used for all running text.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

// Utility face — used for coordinate tags, case references, timestamps.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Apex Anchor Cybersecurity | Managed Security, Wellington, New Zealand",
    template: "%s | Apex Anchor Cybersecurity",
  },
  description:
    "Apex Anchor Cybersecurity delivers managed detection and response, penetration testing, incident response, and compliance advisory for organisations across Aotearoa New Zealand.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-[#0A121D] text-[#C4CEDB] font-[family-name:var(--font-plex-sans)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}