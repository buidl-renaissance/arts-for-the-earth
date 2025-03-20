import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Libre Baskerville as a Google Font alternative to Cambria
const cambria = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cambria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arts for the Earth",
  description: "Celebrating and protecting our Earth through art and community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cambria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
