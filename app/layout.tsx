import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Holidays | The Zenith of Corporate Travel",
  description: "Bespoke corporate retreats, incentive trips, and executive adventures. Experience the sublime with Vishal Holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-obsidian text-starlight font-sans selection:bg-glacial selection:text-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
