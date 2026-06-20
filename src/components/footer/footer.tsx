import React from "react";
import ScrollToTopButton from "../buttons/ScrollToTop";

export default function Footer() {
  return (
    <div className="w-full border-t border-white/10 bg-black/20 py-8 text-center font-mono text-[10px] text-primary/75 backdrop-blur-xl md:text-sm">
      <ScrollToTopButton />
      <p>Designed and built by Luthfan Mursyidan.</p>
    </div>
  );
}
