import Image, { StaticImageData } from "next/image";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import palmoil from "@images/palmoil.png";
import courtflow from "@images/courtflow_manager.png";
import makemuuvMobile from "@images/mobile/makemuuvs_mobile.png";

export const metadata = {
  title: "Luthfan Mursyidan | Frontend & Full-stack Engineer",
  description:
    "Portfolio of Luthfan Mursyidan, a frontend and full-stack engineer building practical web, mobile, and AI-powered products.",
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  role: string;
  highlights: string[];
  image?: StaticImageData;
  link?: string;
  label?: string;
};

const featuredProjects: Project[] = [
  {
    name: "Echo Flow",
    description:
      "Mobile app for recording voice notes, uploading audio, and generating AI transcription, summaries, and important points.",
    stack: [
      "Flutter",
      "Go",
      "Gin",
      "Firestore",
      "Cloud Run",
      "Cloud Tasks",
      "Gemini API",
    ],
    role: "Mobile app, backend integration, auth flow, upload logic, and cloud processing architecture.",
    highlights: [
      "Guest and Google login",
      "Audio recording and upload",
      "Background AI transcription",
      "Free/Pro plan limits",
    ],
    link: "https://play.google.com/store/apps/details?id=com.schenedev.echoflow",
    label: "Case study",
  },
  {
    name: "Palmoil.io Dashboard",
    description:
      "Deforestation monitoring dashboard for jurisdiction-level environmental data and map-based insights.",
    stack: [
      "React",
      "Next.js",
      "PostgreSQL",
      "DuckDB",
      "Mapbox",
      "Geospatial data",
    ],
    role: "Frontend implementation, data workflows, dashboard features, and map/data visualization.",
    highlights: [
      "Geospatial data processing",
      "Parquet and CSV generation",
      "Jurisdiction-level data views",
      "Map visualization",
    ],
    image: palmoil,
    link: "https://palmoil.io/dashboard",
    label: "View project",
  },
  {
    name: "Parking Fee Tracker",
    description:
      "Fast local-first finance utility for logging parking fees with one-tap input and calendar-based history.",
    stack: ["Flutter", "SQLite", "Material 3"],
    role: "Product idea, mobile UI, local data model, and interaction flow.",
    highlights: [
      "One-tap fee recording",
      "Vehicle type support",
      "Calendar history",
      "Local-first storage",
    ],
    label: "Product concept",
  },
  {
    name: "Court Reporting Workflow",
    description:
      "Workflow system for managing court transcription jobs, review status, and operational handoffs.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    role: "Interface design, workflow mapping, and frontend implementation.",
    highlights: [
      "Job management flow",
      "Responsive dashboard",
      "Status tracking",
      "Operational screens",
    ],
    image: courtflow,
    label: "Project sample",
  },
];

const buildCards = [
  {
    title: "Web Applications",
    body: "Modern dashboards, landing pages, SaaS interfaces, admin panels, and responsive web apps.",
  },
  {
    title: "Mobile Applications",
    body: "Flutter and React Native apps with authentication, local storage, API integration, and polished UI.",
  },
  {
    title: "Backend APIs",
    body: "REST APIs, authentication, background jobs, file upload pipelines, and cloud deployment.",
  },
  {
    title: "AI-powered Features",
    body: "Audio transcription, summarization, automation workflows, and AI-assisted product features.",
  },
  {
    title: "Data & Geospatial Tools",
    body: "Data processing scripts, CSV/Parquet generation, DuckDB workflows, and map-based features.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Ant Design",
      "MUI",
      "Inertia.js",
    ],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Expo"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Go", "Gin", "Node.js", "REST API", "GraphQL"],
  },
  {
    title: "Database & Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Firebase",
      "DuckDB",
      "SQLite",
      "Parquet",
      "CSV processing",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "Google Cloud Run",
      "Cloud Tasks",
      "Firestore",
      "Cloud Storage",
      "Vercel",
      "Docker",
      "GitHub",
      "GitLab",
    ],
  },
  {
    title: "AI / Automation",
    skills: [
      "Gemini API",
      "AI transcription",
      "AI-assisted development",
      "n8n concepts",
      "Prompt-driven code generation",
    ],
  },
];

const skillIconMap: Record<string, string> = {
  React: "/icons/react.svg",
  "React Native": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  TypeScript: "/icons/typescript.svg",
  JavaScript: "/icons/js.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Ant Design": "/icons/antd.svg",
  MUI: "/icons/mui.svg",
  "Inertia.js": "/icons/inertia.svg",
  Flutter: "/icons/flutter.svg",
  Expo: "/icons/expo.svg",
  Laravel: "/icons/laravel.svg",
  Go: "/icons/golang.svg",
  Gin: "/icons/gin.svg",
  "Node.js": "/icons/nodejs.svg",
  "REST API": "/icons/rest-api.svg",
  GraphQL: "/icons/graphql.svg",
  PostgreSQL: "/icons/postgre.svg",
  MySQL: "/icons/mysql.svg",
  Supabase: "/icons/supabase.svg",
  Firebase: "/icons/firebase.svg",
  DuckDB: "/icons/duckdb.svg",
  SQLite: "/icons/sqlite.svg",
  Parquet: "/icons/parquet.svg",
  "CSV processing": "/icons/csv.svg",
  "Google Cloud Run": "/icons/google-cloud-run.svg",
  "Cloud Tasks": "/icons/cloud-tasks.svg",
  Firestore: "/icons/firestore.svg",
  "Cloud Storage": "/icons/cloud-storage.svg",
  Vercel: "/icons/vercel.svg",
  Docker: "/icons/docker.svg",
  GitHub: "/icons/github.svg",
  GitLab: "/icons/gitlab.svg",
  "Gemini API": "/icons/gemini.svg",
  "AI transcription": "/icons/ai-transcription.svg",
  "AI-assisted development": "/icons/ai-assisted-dev.svg",
  "n8n concepts": "/icons/n8n.svg",
  "Prompt-driven code generation": "/icons/prompt-code.svg",
};

const contactLinks = [
  {
    label: "Email",
    href: "mailto:mursyidanluthfan@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "GitHub",
    href: "https://github.com/LuthfanM",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-luthfan-mursyidan-1199785a/",
    icon: <FiLinkedin />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281906383181",
    icon: <TbBrandWhatsapp />,
  },
];

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
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-secondary md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary md:text-base">
          {children}
        </p>
      )}
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-primary/15 bg-secondary/5 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  const iconSrc = skillIconMap[skill];

  return (
    <span className="inline-flex h-[100px] w-fit min-w-[104px] max-w-full flex-col items-center justify-center gap-3 rounded-lg border border-primary/15 bg-secondary/5 px-4 py-3 text-center text-xs font-medium text-primary">
      {iconSrc ? (
        <Image src={iconSrc} alt={`${skill} icon`} width={28} height={28} />
      ) : (
        <span aria-hidden="true" className="h-7 w-7" />
      )}
      <span className="max-w-full leading-5">{skill}</span>
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/15 bg-secondary/[0.03] transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-secondary/[0.06]">
      <div className="relative min-h-[210px] border-b border-primary/10 bg-base_col_darker">
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
              className="mt-1 rounded-full border border-primary/15 p-2 text-primary transition hover:border-accent hover:text-accent"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
        <p className="mt-4 text-sm leading-7 text-primary">
          {project.description}
        </p>
        <p className="mt-4 text-sm leading-7 text-primary/90">
          <span className="font-semibold text-secondary">Role:</span>{" "}
          {project.role}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <TechBadge key={item}>{item}</TechBadge>
          ))}
        </div>
        <ul className="mt-6 grid gap-2 text-sm text-primary">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
      <section className="container w-full mx-auto grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 md:py-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Available for remote frontend / full-stack roles
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] text-secondary md:text-7xl">
            M Luthfan Mursyidan
          </h1>
          <p className="mt-6 text-3xl font-semibold leading-tight text-secondary/90 md:text-5xl">
            Frontend & Full-stack Engineer building practical web, mobile, and
            AI-powered products.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-primary md:text-lg">
            I help turn ideas into clean interfaces, reliable APIs, and
            production-ready applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-base_col transition hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href="mailto:mursyidanluthfan@gmail.com"
              className="rounded-md border border-primary/20 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
            <a
              href="/images/my_cv.pdf"
              download="Luthfan Mursyidan - CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
            >
              <FiDownload />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="container mx-auto py-24">
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
      </section>

      <section className="border-y border-primary/10 bg-secondary/[0.03] py-24">
        <div className="container mx-auto">
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
                className="rounded-lg border border-primary/15 bg-base_col p-5"
              >
                <h3 className="text-lg font-semibold text-secondary">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="container mx-auto py-24">
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
              className="rounded-lg border border-primary/15 bg-secondary/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-secondary">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case-study" className="container mx-auto py-24">
        <div className="grid gap-8 rounded-lg border border-primary/15 bg-secondary/[0.04] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Selected case study
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-secondary md:text-5xl">
              Echo Flow
            </h2>
            <p className="mt-5 text-base leading-8 text-primary">
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
                className="rounded-lg border border-primary/15 bg-base_col p-5"
              >
                <h3 className="font-semibold text-secondary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aboutme" className="container mx-auto py-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-secondary md:text-5xl">
              Practical engineering for product teams
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-primary">
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
      </section>

      <section id="whatnext" className="container mx-auto py-24">
        <div className="rounded-lg border border-primary/15 bg-secondary/[0.04] p-8 text-center md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-secondary md:text-5xl">
            Let’s build a clean, reliable product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary">
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
                className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-5 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
