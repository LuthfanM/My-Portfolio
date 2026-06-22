import { contactLinks } from "@/helpers/constants/app-constants";

export default function ContactSection() {
  return (
    <section
      id="whatnext"
      className="web3-section web3-section-alt relative py-24"
    >
      <div className="container relative z-10 mx-auto">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_0_60px_rgba(14,165,233,0.08)] backdrop-blur-xl md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-secondary md:text-5xl">
            Let&apos;s build a clean, reliable product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary/75">
            I&apos;m open to remote frontend/full-stack roles, freelance product
            work, and collaboration on practical web, mobile, backend, data, or
            AI features.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-secondary backdrop-blur-xl transition hover:border-cyan-200/60 hover:text-cyan-100"
              >
                <link.icon />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
