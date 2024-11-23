import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FindUrLover",
  description: "Dibuat oleh kelompok 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        {/* footer */}
        <div className='text-center mt-20 mb-10'>
          <h5 className='text-gray-400'>FindUrLover Copyright 2024 <br />Dibuat oleh Budi & Adhyt</h5>
        </div>
        {/* end footer */}
      </body>
    </html>
  );
}
