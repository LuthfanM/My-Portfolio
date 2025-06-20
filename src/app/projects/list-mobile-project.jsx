"use client";
import { useState } from "react";
import CardMobileProject from "@/components/card/card-mobile-project";
import { mobileProjects } from "@/utils/datas";

export default function ListProjectMobile() {
  const [loading, setLoading] = useState([]);

  const dataArray = Object.keys(mobileProjects).map((key) => ({
    id: key,
    ...mobileProjects[key],
  }));

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-7xl">
        {dataArray.map((data, index) => (
          <div
            key={data.id}
            className="w-full aspect-[9/16] md:aspect-[4/5] lg:aspect-[3/4] transition-all duration-300 transform hover:-translate-y-2"
            style={{
              ...(data.image === undefined && { order: dataArray.length }),
            }}
          >
            <CardMobileProject
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
              position={data.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
