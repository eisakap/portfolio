import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { PlayhtmlProvider } from "@/components/play-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eisa Kapadia",
  description:
    "Computer Engineering student building full-stack software, embedded systems, and AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full bg-[#f7f5f2] text-[#141414]">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <PlayhtmlProvider>{children}</PlayhtmlProvider>
        <Analytics />
      </body>
    </html>
  );
}
