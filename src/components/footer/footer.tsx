import React from "react";
import ScrollToTopButton from "../buttons/ScrollToTop";

export default function Footer() {
  return (
    <div className="w-full border-t border-primary/10 py-8 text-center font-mono text-[10px] text-primary md:text-sm">
      <ScrollToTopButton />
      <p>Designed and built by Luthfan Mursyidan.</p>
    </div>
  );
}
