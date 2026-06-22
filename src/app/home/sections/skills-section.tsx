import { skillGroups } from "@/helpers/constants/app-constants";
import SectionHeader from "../components/section-header";
import SkillBadge from "../components/skill-badge";

export default function SkillsSection() {
  return (
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
  );
}
