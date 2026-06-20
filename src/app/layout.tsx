import "@/styles/globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import AosInitializer from "@/components/aos/AosInitializer";
import { poppins, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth`}
    >
      <head />
      <body className="web3-site-bg">
        <AosInitializer />
        <Navbar />

        <main className="relative pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
