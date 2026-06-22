import { buildCards } from "@/helpers/constants/app-constants";
import SectionHeader from "../components/section-header";

export default function BuildSection() {
  return (
    <section className="web3-section web3-section-alt relative py-24">
      <div className="container relative z-10 mx-auto">
        <SectionHeader
          eyebrow="What I build"
          title="Useful products, not just screens"
        >
          I work across frontend, mobile, and backend layers, from responsive
          interfaces to API integration, cloud deployment, and AI-powered
          workflows.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {buildCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-white/10 bg-black/30 p-5 shadow-[0_0_35px_rgba(14,165,233,0.05)] backdrop-blur-xl transition hover:border-cyan-200/30 hover:bg-cyan-200/[0.04]"
            >
              <h3 className="text-lg font-semibold text-secondary">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-primary/75">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
