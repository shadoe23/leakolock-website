import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEAKOLOCK® | Sealing Fast Forward | Performante Seal Kits for Excavators",
  description:
    "LEAKOLOCK® manufactures premium hydraulic seal kits for excavators — boom, bucket, arm, center joint, and cylinder seal kits. Backed by 30+ years of Kaveri Hydraulics expertise. Bangalore, India.",
  keywords: [
    "excavator seal kits",
    "hydraulic cylinder seal kits",
    "boom seal kits",
    "bucket seal kits",
    "arm seal kits",
    "center joint seal kits",
    "Komatsu seal kits",
    "Hitachi seal kits",
    "CAT seal kits",
    "JCB seal kits",
    "Leakolock",
    "Kaveri Hydraulics",
    "Bangalore excavator parts",
  ],
  authors: [{ name: "Kaveri Hydraulics" }],
  openGraph: {
    title: "LEAKOLOCK® | Sealing Fast Forward",
    description: "Premium hydraulic seal kits for excavators. Performante Parts by Kaveri Hydraulics.",
    type: "website",
    locale: "en_IN",
    siteName: "LEAKOLOCK®",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAKOLOCK® | Sealing Fast Forward",
    description: "Premium hydraulic seal kits for excavators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable}`}
      style={{ background: "#000000" }}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
