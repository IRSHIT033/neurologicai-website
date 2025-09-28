import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://neurologicai.com"
  ),
  title: {
    default: "Neurologic AI",
    template: "%s | Neurologic AI",
  },
  description:
    "Neurologic AI builds production-grade AI systems across healthcare, manufacturing, and retail.",
  keywords: [
    "Neurologic AI",
    "AI",
    "Healthcare AI",
    "Manufacturing",
    "Retail",
    "Computer Vision",
    "NLP",
    "Generative AI",
  ],
  authors: [{ name: "Neurologic AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Neurologic AI",
    title: "Neurologic AI",
    description:
      "Neurologic AI builds production-grade AI systems across healthcare, manufacturing, and retail.",
    images: [
      {
        url: "/ai.png",
        alt: "Neurologic AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurologic AI",
    description:
      "Neurologic AI builds production-grade AI systems across healthcare, manufacturing, and retail.",
    images: ["/ai.png"],
    creator: "@neurologicai",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-[1vh] md:pt-[3vh] lg:pt-[11vh]">
          {" "}
          {/* Adjust this padding-top value */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
