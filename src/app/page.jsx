import About from "./about/about";
import Project from "./projects/projects";

export const metadata = {
  title: "Amienul Rana",
  description: "Amienul Rana is a Front-End software engineer enthusiast.",
};

export default function Home() {
  return (
    <div>
      <div className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
        <p
          className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
          data-aos="fade-up"
        >
          Hi, my name is
        </p>
        <h1
          className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Amienul Rana.
        </h1>
        <h1
          className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          I build things for the web.
        </h1>
        <p
          className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          Frontend developer based in Medan, Indonesia. Experienced in create &
          developing modern websites.
        </p>
        <div className="flex items-center">
          <div
            className="mt-10 mr-3 text-sm md:mt-14"
            data-aos="flip-up"
            data-aos-duration="600"
          >
            <a
              className="rounded-[4px] border-2 border-accent px-7 py-3 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
              href="/images/my-cv.pdf"
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              <button>View my cv here!</button>
            </a>
          </div>
          <div
            className="mt-10 text-sm md:mt-14"
            data-aos="flip-up"
            data-aos-duration="600"
          >
            <a
              className="rounded-[4px] border-2 border-accent px-7 py-3 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
              href="https://www.fiverr.com/amienulrana"
              target="_blank"
              rel="noreferrer"
            >
              <button>Order on Fiverr</button>
            </a>
          </div>
        </div>
      </div>
      <About />
      <Project />
    </div>
  );
}
