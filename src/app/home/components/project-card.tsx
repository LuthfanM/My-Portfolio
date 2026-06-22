import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/helpers/constants/app-constants";
import TechBadge from "./tech-badge";

export default function ProjectCard({ project }: { project: Project }) {
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
          <div className="flex h-[230px] flex-col justify-between p-5 font-mono text-xs text-primary" />
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
