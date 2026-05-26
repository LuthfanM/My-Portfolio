"use client";

import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { poppins, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth`}
    >
      <head />
      <body className="bg-base_col">
        <Navbar />

        <main className="pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
