import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Av. Ali Taylan | Hukuk ve Danışmanlık",
  description: "Av. Ali Taylan Hukuk ve Danışmanlık Bürosu - Profesyonel Hukuki Hizmetler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-slate-200">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Av. Ali Taylan Hukuk ve Danışmanlık. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
