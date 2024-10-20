import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const poppins = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anandhu KS",
  description: "A modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
