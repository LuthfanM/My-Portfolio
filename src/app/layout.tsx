import "@/styles/globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import AosInitializer from "@/components/aos/AosInitializer";
import { poppins, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  const themeScript = `
    try {
      const savedTheme = localStorage.getItem('theme');
      const useDark = savedTheme
        ? savedTheme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', useDark);
      document.documentElement.style.colorScheme = useDark ? 'dark' : 'light';
    } catch (_) {}
  `;

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="web3-site-bg">
        <AosInitializer />
        <Navbar />

        <main className="relative pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
