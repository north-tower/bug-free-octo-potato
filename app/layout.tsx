import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Website Loom",
    template: "%s | Website Loom",
  },
  description:
    "Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites across Kenya.",
  authors: [{ name: "Website Loom" }],
  openGraph: {
    title: "Website Loom",
    description:
      "Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites across Kenya.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
