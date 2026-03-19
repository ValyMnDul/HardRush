import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardrush | YSWS",
  description: "Build robots, earn cells, get hardware.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased selection:bg-red-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}