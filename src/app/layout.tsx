import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Human Hair Shop | Premium Wigs & Extensions",
  description: "Shop high-quality human hair wigs and extensions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
