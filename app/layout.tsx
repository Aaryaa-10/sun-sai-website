import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",

});

export const metadata: Metadata = {
  title: {
    default: "Sun Sai Transport Company | Tours & Travels Services in Noida",
    template: "%s | Sun Sai Transport Company",
  },
  description: 
  "Sun Sai Transport Company provides reliable corporate, institutional and group transportation services across India, Established in 1999.",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React. ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
        
      </body>
    </html>
  );
}