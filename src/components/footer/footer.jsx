import React from "react";
import ScrollToTopButton from "../buttons/ScrollToTop";

export default function Footer() {
  return (
    <div className="w-full py-5 text-center font-mono text-[10px] text-primary md:text-sm">
      <ScrollToTopButton />
    </div>
  );
}
