import { tools, stacks } from "@/utils/datas";
import CardAbout from "@/components/card/card-about";
export default function Skill() {
  return (
    <div>
      <div className="flex items-center gap-2 pb-12">
        <div
          className="h-[1px] w-12 bg-primary"
          data-aos="zoom-in-right"
          data-aos-duration="300"
          data-aos-once="true"
        ></div>
        <h1
          className="text-xl font-semibold text-secondary md:text-2xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          Tech stack
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
        {Object.keys(stacks).map((stack, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index}00`}
            data-aos-duration="300"
            data-aos-once="true"
          >
            <CardAbout
              src={stacks[stack].src}
              name={stacks[stack].name}
              level={stacks[stack].level}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 pb-12">
        <div
          className="h-[1px] w-12 bg-primary"
          data-aos="zoom-in-right"
          data-aos-duration="300"
          data-aos-once="true"
        ></div>
        <h1
          className="text-xl font-semibold text-secondary md:text-2xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          Tools used
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
        {Object.keys(tools).map((tool, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index}00`}
            data-aos-duration="300"
            data-aos-once="true"
          >
            <CardAbout
              src={tools[tool].src}
              name={tools[tool].name}
              level={tools[tool].level}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
