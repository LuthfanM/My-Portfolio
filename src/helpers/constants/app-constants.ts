import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import palmoil from "@images/palmoil.png";
import courtflow from "@images/courtflow_manager.png";

export const metadata = {
  title: "Luthfan Mursyidan | Frontend & Full-stack Engineer",
  description:
    "Portfolio of Luthfan Mursyidan, a frontend and full-stack engineer building practical web, mobile, and AI-powered products.",
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  role: string;
  highlights: string[];
  image?: StaticImageData;
  link?: string;
  label?: string;
};

export const featuredProjects: Project[] = [
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

export const buildCards = [
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

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Query",
      "TanStack",
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
    skills: [
      "Laravel",
      "Go",
      "Gin",
      "Hono",
      "Node.js",
      "Python",
      "REST API",
      "GraphQL",
    ],
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

export const skillIconMap: Record<string, string> = {
  React: "/icons/react.svg",
  "React Native": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  TypeScript: "/icons/typescript.svg",
  JavaScript: "/icons/js.svg",
  "React Query": "/icons/react.svg",
  TanStack: "/icons/react.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Ant Design": "/icons/antd.svg",
  MUI: "/icons/mui.svg",
  "Inertia.js": "/icons/inertia.svg",
  Flutter: "/icons/flutter.svg",
  Expo: "/icons/expo.svg",
  Laravel: "/icons/laravel.svg",
  Go: "/icons/golang.svg",
  Gin: "/icons/gin.svg",
  Python: "/icons/python.svg",
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

export const contactLinks: {
  label: string;
  href: string;
  icon: IconType;
}[] = [
  {
    label: "Email",
    href: "mailto:mursyidanluthfan@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/LuthfanM",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-luthfan-mursyidan-1199785a/",
    icon: FiLinkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281906383181",
    icon: TbBrandWhatsapp,
  },
];
