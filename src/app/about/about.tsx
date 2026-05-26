import React from "react";

export const metadata = {
  title: "About | M Luthfan Mursyidan",
};

export default function About({id}) {
  return (
    <section id={id}>
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
              I am a software developer with more than 6 years experience. I love to learning related
              to programming. I love code and it is my passion.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="100">
              I am skilled in modern technologies such are React, Express, Node Js, Golang, Java and GraphQL.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="100">
              I am also experienced in mobile development using React Native and Flutter.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="200">
              Sometimes i made mistakes but i believe in every path there will be a hindrance that must be passed to 
              make you stronger than before.
            </p>
          </div>
        </div>
      </div>      
    </section>
  );
}
