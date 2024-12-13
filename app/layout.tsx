import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DiyNavbar from "@/components/ui/diy-navbar";

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
  description: "by Budi & Adit",
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
        <DiyNavbar></DiyNavbar>
        {children}
        {/* footer */}
        <div className='container mx-auto max-w-full h-auto text-center py-20 bg-redplt'>
          <div className='max-w-3xl mx-auto px-4'>
            <p className='text-white text-base font-light mb-6'>
              Sometimes, love is about finding someone who embraces your imperfections just as much as they admire your strengths. It&apos;s about being accepted for who you truly are, without pretense, and growing together through the beauty and flaws that make you unique
              <br />
              <span className='text-2xl font-semibold block mt-5'>FindUrLover</span>
            </p>
            <h5 className='text-white font-medium'>
              <span className='text-sm'>Made with &#9825; by Budi & Adhyt</span>
            </h5>
          </div>
        </div>

        {/* end footer */}
      </body>
    </html>
  );
}
