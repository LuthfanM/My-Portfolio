export const experiences = [
  {
    title: "Intern Fullstack Developer",
    company: "Indigospace Medan",
    date: "July - October 2021",
    description: [
      "Work as a team or individually",
      "Build and develop website using Reactjs, ExpressJs, and Mongodb",
      "Collaborate with other Developers and UI/UX to update the website and create new features",
      "Metting with DILo Manager in digital invitation website builder as my final project",
      "Tech: React, Boostrap, Express, Mongodb",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Armada Vision",
    date: "December 2022 - April  2023",
    description: [
      "Develop and maintained web application systems for clients at Armada Vision",
      "Create reusable component for future use and improve quality code",
      "Tech: Vue, Vuex, Express Js (Node Js), Mongodb",
    ],
  },
  {
    title: "Frontend Developer",
    company: "STRT Button",
    date: "March 2023 - Now",
    description: [
      "Developed and maintained responsive and user-friendly web applications at web 3.0 company",
      "Create reusable component for future use and improve quality code",
      "Collaborated with the UI/UX team, Frontend team and Backend team",
      "Using version control system (Git) for collaboration with the development team",
      "Tech: Next, Typescript, Wagmi, Thirdweb, Tailwind",
    ],
  },
];

export const ContentWorkExperience = () => {
  return experiences.reverse().map((experience, i) => (
    <div className="mb-5 text-primary" key={i}>
      <h3 className="text-base font-medium leading-loose text-secondary">
        {experience.title}
        <span className=" text-accent"> @{experience.company}</span>
      </h3>
      <p className="pb-5 font-mono text-sm">{experience.date}</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        {experience.description.map((desc, i) => (
          <li key={i} className="text-sm font-medium">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  ));
};
