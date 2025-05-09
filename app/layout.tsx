import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stručna zaštita na radu i obuka zaposlenih | Institut LIRA",
  description:
    "Institut LIRA pruža sveobuhvatne usluge zaštite na radu: procena rizika, obuke, dokumentacija i zastupanje pred inspekcijom.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  keywords: [
    "zaštita na radu",
    "bezbednost i zdravlje na radu",
    "procena rizika",
    "akt o proceni rizika",
    "obuka zaposlenih",
    "zakonska dokumentacija zaštite na radu",
    "savetovanje za zaštitu na radu",
    "inspekcija rada zastupanje",
    "preventivni pregledi opreme",
    "zaštita radne okoline",
    "zaštita na radu nis",
  ],
  alternates: {
    canonical: "https://www.zastitanaradu.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground text-lg md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
