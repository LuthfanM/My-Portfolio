"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInitializer() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return null;
}
