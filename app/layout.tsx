import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Manrope } from "next/font/google";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "spf.io | AI Translation and Accessibility",
    template: "%s | spf.io"
  },
  description:
    "Live captions, multilingual translation, and inclusive event experiences powered by spf.io."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
