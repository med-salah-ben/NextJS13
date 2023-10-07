import Header from "./Header";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next 13 App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <title>Next 13 App</title>
      </head> */}
      <body /*className={inter.className}*/>
        <Header />
        {children}
      </body>
    </html>
  );
}