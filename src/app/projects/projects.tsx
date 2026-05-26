import React from "react";
import ListProject from "./list-project";
import ListProjectMobile from "./list-mobile-project";

export const metadata = {
  title: "Projects | M Luthfan Mursyidan",
  description: "Projects page of Luthfan Mursyidan's portfolio website",
};

export default function Project({ id }) {
  return (
    <div id={id} className="mt-40 flex flex-col items-center justify-center">
      <h1
        className="pb-2 text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl"
        data-aos="zoom-in-up"
        data-aos-duration="300"
      >
        Project Experience
      </h1>
      <p
        className="text-center text-sm font-medium text-primary md:text-base"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        List of projects that I have worked on, showcasing my skills in web
        development and design. <br />
        <span>
          Each project reflects my dedication to creating user-friendly and
          visually appealing applications.
        </span>
      </p>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
        <div className="mb-4 mt-4 text-xl font-semibold text-center text-white">
          Desktop Projects
        </div>
        <ListProject />

        <div className="mt-10 mb-4 text-xl font-semibold text-center text-white">
          Mobile Projects
        </div>
        <ListProjectMobile />
      </div>
    </div>
  );
}
