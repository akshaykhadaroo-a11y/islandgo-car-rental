import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} | Car Rental in Mauritius`, template: `%s | ${siteConfig.name}` },
  description: "Find your island drive. Browse a sample fleet of rental cars in Mauritius and plan a relaxed trip with convenient pick-up options.",
  openGraph: { title: `${siteConfig.name} | Car Rental in Mauritius`, description: "Find your island drive in Mauritius.", type: "website", locale: "en_MU" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><WhatsAppFloat /></body></html>;
}
