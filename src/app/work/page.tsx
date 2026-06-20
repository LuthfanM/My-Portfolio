import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { experiences } from "@/helpers/constants/content-work-experience-constants";
import { experienceMeta } from "@/helpers/constants/work-page-constants";

export { metadata } from "@/helpers/constants/work-page-constants";

function getMeta(company: string) {
  return (
    experienceMeta[company] ?? {
      location: "Indonesia",
      arrangement: "Hybrid",
    }
  );
}

export default function WorkPage() {
  return (
    <main className="container relative mx-auto min-h-screen py-12 md:py-16">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary/80 transition hover:text-cyan-100"
      >
        <FiArrowLeft />
        Back home
      </Link>

      <section>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200">
          Experience
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-none text-secondary md:text-7xl">
          Places I&apos;ve worked
        </h1>

        <div className="mt-16 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_0_45px_rgba(14,165,233,0.06)] backdrop-blur-xl">
          {experiences.map((experience) => {
            const meta = getMeta(experience.company);

            return (
              <article
                key={`${experience.company}-${experience.date}`}
                className="grid gap-4 border-b border-white/10 px-6 py-8 last:border-b-0 md:grid-cols-[260px_1fr] md:gap-12"
              >
                <h2 className="text-xl font-medium text-primary/70">
                  {experience.company}
                </h2>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {experience.title}
                  </h3>
                  <p className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-primary/70">
                    {meta.location} <span className="px-3 text-cyan-200">•</span>
                    {meta.arrangement}
                    <span className="px-3 text-cyan-200">•</span>
                    {experience.date}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-200">
              Details
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-secondary md:text-5xl">
              What I handled
            </h2>
          </div>
        </div>

        <div className="grid gap-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.title}`}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_45px_rgba(14,165,233,0.06)] backdrop-blur-xl md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-200">
                    {experience.company}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {experience.date}
                </p>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-7 text-primary/80 md:grid-cols-2">
                {experience.description.filter(Boolean).map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiArrowUpRight className="mt-1.5 shrink-0 text-cyan-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-secondary">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.tech.split(",").map((tech) => (
                    <span
                      key={tech.trim()}
                      className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-3 py-1 text-xs font-medium text-cyan-50"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
