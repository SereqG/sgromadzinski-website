import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sergiusz Gromadziński — Full-Stack Engineer & AI Systems Developer",
  description:
    "Starszy inżynier tworzący inteligentne systemy software, agenty AI i nowoczesne produkty cyfrowe z silnym naciskiem na design i doświadczenie użytkownika.",
  openGraph: {
    title: "Sergiusz Gromadziński — Tworzę oprogramowanie, które myśli",
    description: "Starszy Full-Stack Engineer & AI Systems Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${anton.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
