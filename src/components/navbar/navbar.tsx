"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import HorizontalList from "./HorizontalList";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 z-[98] w-screen bg-[#02040a]/90 px-4 py-4 shadow-[0_18px_60px_rgba(2,4,10,0.75)] backdrop-blur-xl md:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-cyan-100/10 bg-[#030712]/90 px-5 shadow-[0_0_35px_rgba(56,189,248,0.14)] backdrop-blur-2xl md:h-18 md:px-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary"
          scroll={false}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
          <h1
            className="text-sm font-semibold tracking-wide md:text-base"
            data-aos="fade-down"
            data-aos-once="true"
          >
            M Luthfan M.
          </h1>
        </Link>
        <HorizontalList />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="mailto:mursyidanluthfan@gmail.com"
            className="hidden rounded-full border border-white/10 bg-white px-5 py-2 text-xs font-semibold text-black shadow-[0_0_24px_rgba(255,255,255,0.18)] transition hover:bg-cyan-100 md:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-secondary md:hidden"
          >
            {isOpen ? <BiX size={24} /> : <BiMenuAltRight size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-cyan-100/10 bg-[#030712]/95 px-6 pb-5 shadow-[0_0_35px_rgba(56,189,248,0.12)] backdrop-blur-2xl md:hidden">
          <HorizontalList mobile onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
