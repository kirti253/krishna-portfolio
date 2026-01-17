import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono, Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SunMac Edits - Healthcare Content Creator",
  description:
    "I help doctors turn knowledge into stories patients trust. 500+ Doctor Stories. 10M+ Views.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}
