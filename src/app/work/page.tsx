import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { experiences } from "../about/experience/content-work-experience";

export const metadata = {
  title: "Work Experience | M Luthfan Mursyidan",
  description:
    "Professional work experience of M Luthfan Mursyidan across full-stack, frontend, mobile, geospatial, and fintech projects.",
};

const experienceMeta = {
  "Maphubs, Inc.": {
    location: "United States",
    arrangement: "Remote",
  },
  "PT Boost Indonesia": {
    location: "Indonesia",
    arrangement: "Hybrid",
  },
  "PT Adi Consulting": {
    location: "Indonesia",
    arrangement: "On-site",
  },
  "PT Wirecard Indonesia": {
    location: "Indonesia",
    arrangement: "On-site",
  },
  "PT Xsis Mitra Utama": {
    location: "Indonesia",
    arrangement: "On-site",
  },
};

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
    <main className="container mx-auto min-h-screen py-12 md:py-16">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
      >
        <FiArrowLeft />
        Back home
      </Link>

      <section>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary/70">
          Experience
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-none text-secondary md:text-7xl">
          Places I&apos;ve worked
        </h1>

        <div className="mt-16 border-y border-accent/15">
          {experiences.map((experience) => {
            const meta = getMeta(experience.company);

            return (
              <article
                key={`${experience.company}-${experience.date}`}
                className="grid gap-4 border-b border-accent/15 py-8 last:border-b-0 md:grid-cols-[260px_1fr] md:gap-12"
              >
                <h2 className="text-xl font-medium text-primary/70">
                  {experience.company}
                </h2>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {experience.title}
                  </h3>
                  <p className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-primary/70">
                    {meta.location} <span className="px-3 text-accent">•</span>
                    {meta.arrangement}
                    <span className="px-3 text-accent">•</span>
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
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
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
              className="rounded-lg border border-primary/15 bg-secondary/[0.03] p-6 md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-accent">
                    {experience.company}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {experience.date}
                </p>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-7 text-primary md:grid-cols-2">
                {experience.description.filter(Boolean).map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiArrowUpRight className="mt-1.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-primary/10 pt-5">
                <p className="text-sm font-semibold text-secondary">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.tech.split(",").map((tech) => (
                    <span
                      key={tech.trim()}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-secondary"
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
