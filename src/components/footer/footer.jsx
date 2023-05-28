import React from "react";

export default function Footer() {
  return (
    <div className="w-full py-5 text-center font-mono text-[10px] text-primary md:text-sm">
      Inspired Design Portfolio By{" "}
      <a
        className="text-accent"
        href="https://www.linkedin.com/in/ulinnaja-aldi/"
        target="_blank"
        rel="noreferrer"
        download={true}
      >
        <button>Aldilla Ulinnaja</button>
      </a>
    </div>
  );
}
