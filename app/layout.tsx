import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import Preloader from "@/components/common/Preloader";
import FloatingButtons from "@/components/common/FloatingButtons";
import AIChatWidget from "@/components/common/AIChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarePlus Clinic — Trusted Healthcare for Your Family",
  description:
    "CarePlus Clinic offers world-class medical care with 20+ specialist doctors across Cardiology, Dentistry, Dermatology, Pediatrics, Neurology and more. Book your appointment today.",
  keywords: "clinic, doctor, healthcare, medical, CarePlus, appointment, specialist",
  openGraph: {
    title: "CarePlus Clinic — Trusted Healthcare for Your Family",
    description: "Expert medical care with compassion. Book an appointment with our specialist doctors today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body style={{ fontFamily: "var(--font-inter, Inter), sans-serif" }}>
        <Preloader />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <AIChatWidget />
      </body>
    </html>
  );
}
