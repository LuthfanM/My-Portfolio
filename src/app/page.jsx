import About from "./about/about";
import Project from "./projects/projects";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import {
  TbBrandGmail,
  TbBrandTelegram,
  TbBrandTiktok,
  TbBrandWhatsapp,
} from "react-icons/tb";
import Skill from "./skills/skill";

export const metadata = {
  title: "Amienul Rana",
  description: "Amienul Rana is a Front-End software engineer enthusiast.",
};

export default function Home() {
  const sosmeds = [
    {
      name: "Github",
      icon: <FiGithub size={24} />,
      link: "https://github.com/AmienulRana",
    },
    {
      name: "Telegram",
      icon: <TbBrandTelegram size={24} />,
      link: "https://t.me/amienulrana",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin size={24} />,
      link: "https://www.linkedin.com/in/amienul-rana-704681218/",
    },
    {
      name: "Gmail",
      icon: <TbBrandGmail size={24} />,
      link: "mailto:amienulrana@gmail.com",
    },
  ];
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
        <div className="mt-4 flex items-center gap-4">
          {sosmeds.map((sosmed, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              data-aos-duration="600"
            >
              <div
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%] border-2 border-accent px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                title={sosmed.name}
              >
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sosmed.name}
                >
                  {sosmed.icon}
                </a>
              </div>
            </div>
          ))}
          {/* <div
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
          </div> */}
        </div>
      </div>
      <About />
      <Project />
      <Skill />
      <div className="my-60 flex flex-col items-center justify-center gap-3 text-center md:gap-5">
        <p className="font-mono text-accent" data-aos="fade-up">
          What{`'`}s Next?
        </p>
        <h1
          className="pb-1 text-4xl font-semibold leading-relaxed text-secondary md:text-5xl"
          data-aos="zoom-in-up"
        >
          Get In Touch
        </h1>
        <p
          className="w-full pb-8 text-sm leading-relaxed text-primary md:w-5/6 md:text-base lg:w-4/6 xl:w-1/2"
          data-aos="zoom-in-up"
        >
          I am currently working and actively taking on freelance projects to
          expand my experience in the industry. If you have any questions or
          would like to get in touch, please feel free to contact me. I will do
          my best to respond promptly.
        </p>
        <button
          className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <a href="mailto:amienulrana@gmail.com">Say Hello</a>
        </button>
      </div>
    </div>
  );
}
