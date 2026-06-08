import { TbArrowBigRightLines } from "react-icons/tb";
import { experiences } from "@/helpers/constants/content-work-experience-constants";

export { experiences } from "@/helpers/constants/content-work-experience-constants";

export const ContentWorkExperience = () => {
  return experiences.map((experience, i) => (
    <div className="mb-5 text-primary" key={i}>
      <h3 className="text-base font-medium leading-loose text-secondary">
        {experience.title}
        <span className=" text-accent"> @{experience.company}</span>
      </h3>
      <p className="mb-5 font-mono text-sm">{experience.date}</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        {experience.description.map((desc, i) => (
          <li key={i} className="text-sm font-medium">
            {desc}
          </li>
        ))}
      </ul>
      <div className="inline-flex pt-5 text-sm text-green-300">
        <TbArrowBigRightLines size={18} />
        Tech Stacks : {experience.tech}
      </div>
    </div>
  ));
};
