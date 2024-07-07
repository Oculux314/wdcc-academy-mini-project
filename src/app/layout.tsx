import ConsoleMessage from "@/components/ConsoleMessage";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nate's Blog Site",
  description: "For the 2024 WDCC Academy Programme",
  icons: [
    {
      rel: "icon",
      url: "/pfp.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-lvh flex flex-col`}>
        <NavBar />
        {children}
        <ConsoleMessage />
      </body>
    </html>
  );
}
