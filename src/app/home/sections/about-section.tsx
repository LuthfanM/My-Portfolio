export default function AboutSection() {
  return (
    <section id="aboutme" className="web3-section relative py-24">
      <div className="container relative z-10 mx-auto">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-secondary md:text-5xl">
              Practical engineering for product teams
            </h2>
          </div>
          <div className="space-y-5 rounded-lg border border-white/10 bg-white/[0.035] p-6 text-base leading-8 text-primary/75 backdrop-blur-xl md:p-8">
            <p>
              Hi, I&apos;m Luthfan, a software engineer based in Indonesia. I
              work mainly with React, Next.js, TypeScript, Flutter, Laravel, Go,
              Supabase, PostgreSQL, and cloud platforms.
            </p>
            <p>
              I build practical web and mobile applications with clean
              interfaces, reliable APIs, and production-ready workflows. My work
              spans product UI, API integration, background processing, data
              tools, and AI-powered features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
