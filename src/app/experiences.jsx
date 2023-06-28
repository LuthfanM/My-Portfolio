import React from "react";
import Experience from "./about/experience/experience"

export const metadata = {
  title: "Experiences | M Luthfan Mursyidan",
};

const Experiences = ({id}) => {
  return (
    <section id={id}>
      <div className="px-4 pt-[100px] pb-[50px] lg:pb-[60px]">
        <Experience />
      </div>
    </section>
  );
};

export default Experiences;
