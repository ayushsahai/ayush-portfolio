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
    "Ayush Sahai -Senior Product Designer specializing in healthcare, enterprise UX, design systems, and user-centered digital experiences.",
  icons: {
    icon: "/favicon.png",
  },
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
