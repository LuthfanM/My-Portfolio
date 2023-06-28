"use client";
import React, { useState } from "react";
import { ContentWorkExperience } from "./content-work-experience";

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("experience");

  let selectedContent;

  if (activeCategory === "experience") {
    selectedContent = <ContentWorkExperience />;
  }

  const categories = [
    // { name: "Education", value: "education" },
    { name: "Work Experience", value: "experience" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-32">
      <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
        <h1
          className="text-xl font-semibold text-secondary md:text-2xl"
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-once="true"
        >
          Experiences
        </h1>
        <div
          className="h-[1px] w-32 bg-primary md:w-96"
          data-aos="zoom-in-left"
          data-aos-duration="600"
          data-aos-once="true"
        ></div>
      </div>
      <div
        className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <div className="font-poppins flex w-[370px] flex-row overflow-x-scroll text-primary md:w-auto md:flex-col  md:overflow-auto">
          {categories.map((category) => (
            <button
              className={`w-auto whitespace-nowrap px-4 py-3 text-start text-xs transition-all duration-300 hover:bg-accent/10 hover:text-accent md:py-3 md:px-5 ${
                activeCategory === category.value
                  ? "bg-accent/10 text-accent"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
              key={category.value}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="w-[350px] overflow-auto md:w-[490.78px] lg:w-[600px]">
          {selectedContent}
        </div>
      </div>
    </div>
  );
}
