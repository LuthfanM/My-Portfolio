import { FiDownload } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="web3-hero relative grid min-h-[calc(100vh-6rem)] place-items-center overflow-hidden px-6 py-20 text-center md:py-24">
      <div className="hero-vortex" aria-hidden="true" />
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-scan" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,0.16)] backdrop-blur-xl">
          Available for remote frontend / full-stack roles
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.03] text-secondary drop-shadow-[0_0_26px_rgba(255,255,255,0.2)] md:text-7xl">
          M Luthfan Mursyidan
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight text-secondary/85 md:text-5xl">
          Frontend & Full-stack Engineer building practical web, mobile, and
          AI-powered products.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-primary/75 md:text-lg">
          I help turn ideas into clean interfaces, reliable APIs, and
          production-ready applications.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#portfolio"
            className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-base_col shadow-[0_0_32px_rgba(255,255,255,0.2)] transition hover:bg-cyan-100"
          >
            View Projects
          </a>
          <a
            href="mailto:mursyidanluthfan@gmail.com"
            className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-secondary backdrop-blur-xl transition hover:border-cyan-200/60 hover:text-cyan-100"
          >
            Contact Me
          </a>
          <a
            href="/images/my_cv.pdf"
            download="Luthfan Mursyidan - CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-secondary backdrop-blur-xl transition hover:border-cyan-200/60 hover:text-cyan-100"
          >
            <FiDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
