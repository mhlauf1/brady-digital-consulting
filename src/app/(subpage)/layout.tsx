import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "../globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

const helvetica = localFont({
  src: "../../fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className} overflow-x-hidden ${instrument.variable}`}
      >
        <SubNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
