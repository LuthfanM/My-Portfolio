import React from "react";
import Image from "next/image";
import Experience from "./experience/experience";

export const metadata = {
  title: "About | Amienul Rana",
};

export default function About() {
  return (
    <section>
      <div className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
        <div className="flex flex-col justify-center text-primary">
          <div className="flex items-center gap-5 pb-10">
            <h1
              className="text-xl font-semibold text-secondary lg:text-2xl"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              About Me
            </h1>
            <div
              className="h-[1px] w-32 bg-primary md:w-96"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
          <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
            {/*  */}
            <p data-aos="zoom-in-right">
              As a frontend developer with 2 years of experience, I am skilled
              in several modern technologies, including React.js, Next.js,
              Vue.js, and GraphQL.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="100">
              I am also proficient in Typescript, have experience with Jest for
              unit testing and have experience with cypress for E2E testing.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="200">
              I am passionate about creating user-friendly and intuitive
              interfaces that enhance the user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[100px] px-4 pb-[50px] lg:pb-[60px]">
        <Experience />
      </div>
      
    </section>
  );
}
