import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Sahai",
    template: "%s | Ayush Sahai",
  },
  description:
    "Google Certified UI/UX Designer specializing in user-centered digital experiences and modern product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={inter.className}>
<body className="min-h-screen bg-white text-black">
  {children}
</body>
    </html>
  );
}
