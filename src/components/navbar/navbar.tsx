"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import HorizontalList from './HorizontalList'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 z-[98] w-screen border-b border-primary/10 bg-base_col/85 backdrop-blur-xl">
      <div className="flex h-24 items-center justify-between px-7 lg:px-14">
        <Link href="/" className="text-secondary" scroll={false}>
          <h1
            className="text-lg font-semibold tracking-wide md:text-xl"
            data-aos="fade-down"
            data-aos-once="true"
          >
            M Luthfan M.
          </h1>
        </Link>
        <HorizontalList />
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-md border border-primary/15 p-2 text-secondary md:hidden"
        >
          {isOpen ? <BiX size={24} /> : <BiMenuAltRight size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-primary/10 px-7 pb-5 md:hidden">
          <HorizontalList mobile onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
