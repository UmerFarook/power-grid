import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from  'next/link';
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Grid",
  description: "Manage the power grids",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const headersList = await headers();
    let buttonText = ''
    const currentPath = headersList.get('x-current-path');
    buttonText = currentPath === '/' ? 'Home' : '[-BACK';


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div><Link href={"/"}> {buttonText}</Link></div>
        {children}
      </body>
    </html>
  );
}
