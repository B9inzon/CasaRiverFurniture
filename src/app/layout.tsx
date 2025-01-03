

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Muebles Casa River",
  description: "Fabrica de muebles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-[#030f12]"
      >
        <Navigation/>
        {children}

      </body>
    </html>
  );
}
