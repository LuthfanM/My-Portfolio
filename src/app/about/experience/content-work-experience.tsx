import { TbArrowBigRightLines } from "react-icons/tb";

export const experiences = [
  {
    title: "Fullstack Developer",
    company: "Maphubs, Inc.",
    date: "October 2022 - Present",
    description: [
      "Develop monitoring application with integrated map",
      "Create a web application using geospatial technology to monitor the world's natural resources",
      "Create a mobile application to display data from current web application",
      "Create feature to display deforestation, grievances, mills and plots in map",
      "Create feature to display Indonesia jurisdiction area",
      "Develop enterprise loan application using React",
    ],
    tech: "NextJS, Express, Tailwind, MapboxGL, PostgreSQL, Typescript, NodeJS, React, GraphQL",
  },
  {
    title: "Fullstack Developer",
    company: "PT Boost Indonesia",
    date: "October 2021 - November 2022",
    description: [
      "Produce fully functional React web portal",
      "Develop enterprise loan application using React",
      "Develop single page application (iframe) for mobile application",
      "Improve existing React & React Native application feature performance",
      "Working closely with colleagues to constantly innovate React and React Native apps functionality",
      "Fixing bug and improve feature based on given requirement",
      "Deploy and build code to server",
    ],
    tech: "React, Next, Material UI, Boostrap, Java, REST API",
  },
  {
    title: "Software Engineer",
    company: "PT Adi Consulting",
    date: "March 2021 - October 2021",
    description: [
      "Fixing bug for Bank Mandiri application",
      "Develop new feature for Bank Mandiri desktop application",
    ],
    tech: "Java",
  },
  {
    title: "Frontend Developer",
    company: "PT Wirecard Indonesia",
    date: "January 2018 - February 2021",
    description: [
      "Handling back end for internal absence application",
      `Develop feature for mobile application for banking client which are : 
      Afin Bank,
      CIMB Regional + International,
      Bank Mandiri,
      Bankaltimtara
      `,
      "Create mobile app for Wirecard Absence Application",
      "Fixing bug based on assigned task",
      ,
    ],
    tech: "React Native, Framework 7, Java, React",
  },
  {
    title: "Software Engineer",
    company: "PT Xsis Mitra Utama",
    date: "August 2015 - November 2017",
    description: [
      "Develop app based on client appointment (BNI 46)",
      "Develop ATM feature using Tacl Programming Language",
      "Maintain and manage electronic device controller for bank transaction",
      "Fixing bug based on assigned task",
      ,
    ],
    tech: "Java",
  },
];

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
