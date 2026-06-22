import LazySkillIcon from "@/components/skills/LazySkillIcon";
import { skillIconMap } from "@/helpers/constants/app-constants";

type SkillBadgeProps = {
  skill: string;
  index: number;
};

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
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
