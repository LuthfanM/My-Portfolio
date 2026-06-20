import Image from "next/image";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import LazySkillIcon from "@/components/skills/LazySkillIcon";
import {
  buildCards,
  contactLinks,
  featuredProjects,
  Project,
  skillGroups,
  skillIconMap,
} from "@/helpers/constants/app-constants";

export { metadata } from "@/helpers/constants/app-constants";

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-secondary drop-shadow-[0_0_18px_rgba(255,255,255,0.1)] md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary/75 md:text-base">
          {children}
        </p>
      )}
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.04] px-3 py-1 text-xs font-medium text-cyan-50/80">
      {children}
    </span>
  );
}

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  const iconSrc = skillIconMap[skill];

  return (
    <span className="flex min-h-12 w-full items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-left text-xs font-medium text-primary/85 backdrop-blur-xl transition hover:border-cyan-200/30 hover:bg-cyan-200/[0.06]">
      <LazySkillIcon
        src={iconSrc}
        alt={`${skill} icon`}
        delay={(index % 8) * 45}
      />
      <span className="min-w-0 leading-5">{skill}</span>
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_0_45px_rgba(14,165,233,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-200/[0.045]">
      <div className="relative min-h-[210px] border-b border-white/10 bg-black/35">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            className="h-[230px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            placeholder="blur"
          />
        ) : (
          <div className="flex h-[230px] flex-col justify-between p-5 font-mono text-xs text-primary">
            {/* <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-3">
              <p className="text-accent">$ product.build --ready</p>
              <p>role: {project.role}</p>
              <p>status: production-minded workflow</p>
            </div> */}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-secondary">
            {project.name}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name}`}
              className="mt-1 rounded-full border border-white/15 p-2 text-primary transition hover:border-cyan-200/60 hover:text-cyan-100"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
        <p className="mt-4 text-sm leading-7 text-primary/80">
          {project.description}
        </p>
        <p className="mt-4 text-sm leading-7 text-primary/85">
          <span className="font-semibold text-secondary">Role:</span>{" "}
          {project.role}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <TechBadge key={item}>{item}</TechBadge>
          ))}
        </div>
        <ul className="mt-6 grid gap-2 text-sm text-primary/80">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
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

      <section id="portfolio" className="web3-section relative py-24">
        <div className="container relative z-10 mx-auto">
        <SectionHeader
          eyebrow="Featured work"
          title="Product work with real implementation detail"
        >
          Selected projects across AI mobile apps, geospatial dashboards,
          operational tools, and practical utilities.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        </div>
      </section>

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

      <section id="skills" className="web3-section relative py-24">
        <div className="container relative z-10 mx-auto">
        <SectionHeader
          eyebrow="Tech stack"
          title="Tools I use to ship products"
        >
          Clear strengths across modern frontend, mobile, backend, data, cloud,
          and AI workflows.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_40px_rgba(14,165,233,0.05)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-secondary">
                {group.title}
              </h3>
              <div className="mt-5 grid gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section id="case-study" className="web3-section web3-section-alt relative py-24">
        <div className="container relative z-10 mx-auto">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_55px_rgba(14,165,233,0.08)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
              Selected case study
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-secondary md:text-5xl">
              Echo Flow
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/75">
              Users often record long voice notes but do not want to manually
              rewrite, summarize, or organize them. Echo Flow processes audio
              into transcript, summary, important points, and action items.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "My Role",
                "Mobile structure, backend integration, authentication flow, upload logic, transcription status, and cloud processing architecture.",
              ],
              [
                "Key Features",
                "Voice recording, audio upload, AI transcription, background processing, guest login, Google login, Free/Pro limits, Sheets export, and AdMob.",
              ],
              [
                "Tech Stack",
                "Flutter, Go, Gin, Firestore, Cloud Run, Cloud Tasks, Google Cloud Storage, and Gemini API.",
              ],
              [
                "Challenges",
                "Async transcription status, audio upload limits, internal endpoint security, and a clean recording/preview experience.",
              ],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-secondary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>

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
              Hi, I’m Luthfan, a software engineer based in Indonesia. I work
              mainly with React, Next.js, TypeScript, Flutter, Laravel, Go,
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

      <section id="whatnext" className="web3-section web3-section-alt relative py-24">
        <div className="container relative z-10 mx-auto">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_0_60px_rgba(14,165,233,0.08)] backdrop-blur-xl md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-secondary md:text-5xl">
            Let’s build a clean, reliable product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary/75">
            I’m open to remote frontend/full-stack roles, freelance product
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
    </div>
  );
}
