import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/dom/Layout";
import { Analytics } from "@vercel/analytics/next";
import { Afacad } from "next/font/google";
import classNames from "classnames";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const afacad = Afacad({ variable: "--font-afacad", subsets: ["latin"] }); // You can add weights if needed
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morfleps",
  description: "El PROXIMO PRESIDENTE DE LA CONFEDERACION ARGENTINA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames([
          geistSans.variable,
          geistMono.variable,
          afacad.variable,
          instrumentSerif.variable,
          "antialiased",
        ])}
      >
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
