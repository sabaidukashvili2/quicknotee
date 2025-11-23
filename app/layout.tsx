import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistMono = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Note - Fastest note taking app",
  description: "Quick Note - Fastest note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
