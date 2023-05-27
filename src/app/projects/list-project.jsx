"use client";
import { useState, useEffect } from "react";
import CardProject from "@/components/card/card-project";
import { projects } from "@/utils/datas";

export default function ListProject() {
  const [loading, setLoading] = useState([]);

  const dataArray = Object.keys(projects).map((key) => {
    return { id: key, ...projects[key] };
  });


  return (
    <div className="flex flex-col my-10 items-center justify-center">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4 xl:grid-cols-3">
        {dataArray.map((data, index) => (
          <div
            key={data.id}
            className="translate-y-0 cursor-pointer transition-all duration-300 hover:-translate-y-2"
          >
            <CardProject
              loading={loading[index]}
              setLoading={(value) => {
                setLoading((prevLoading) => {
                  const newLoading = [...prevLoading];
                  newLoading[index] = value;
                  return newLoading;
                });
              }}
              name={data.name}
              github={data.repo}
              web={data.web}
              image={data.image}
              desc={data.desc}
              stack={data.stack}
              gif={data.gif}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
