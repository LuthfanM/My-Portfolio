"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className={`fixed top-0 z-[98] w-screen bg-base_col`}>
      <div className="flex h-24 items-center justify-between px-7 lg:px-14">
        <Link href="/" className="text-accent" scroll={false}>
          <h1
            className="text-2xl font-semibold"
            data-aos="fade-down"
            data-aos-once="true"
          >
            AmienulRana.
          </h1>
        </Link>
      </div>
    </div>
  );
}
