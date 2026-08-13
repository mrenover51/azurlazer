import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import "./site.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "AZUR LASER | Décapage laser et aérogommage", template: "%s | AZUR LASER" },
  description: "Décapage laser et aérogommage à Fréjus et dans le Var pour retirer rouille, peinture, vernis et salissures sur métal, bois, pierre et brique.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
