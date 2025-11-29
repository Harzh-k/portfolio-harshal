import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- THIS IS THE CRITICAL LINE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshal Builds",
  description: "Portfolio of Harshal Khilari - Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}