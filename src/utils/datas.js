// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import nodejsIcon from "@icons/nodejs.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import vscodeIcon from "@icons/vscode.svg";
import typescriptIcon from "@icons/typescript.svg";
import vueIcon from "@icons/vue.svg";
import reduxIcon from "@icons/redux.svg";
import mongoIcon from "@icons/mongodb.svg";
import graphIcon from "@icons/graphql.svg";
import jestIcon from "@icons/jest.svg";
import cypressIcon from "@icons/cypress.svg";
// Project Images
import onlineShop from "@images/hefa store.png";
import landingPage from "@images/landing page property.png";
import healtyFood from "@images/landing page.png";
import marketplace from "@images/marketplace.jpg";
import topupgame from "@images/topupgame.png";
import undanganDigital from "@images/undangan digital.png";

// Gif Images

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  Mongodb: { name: "Mongodb", src: mongoIcon, level: "Database" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Dependency tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Jest: { name: "Jest", src: jestIcon, level: "Unit test" },
  Cypress: { name: "Cypress", src: cypressIcon, level: "E2E test" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Language" },
  CSS: { name: "CSS", src: cssIcon, level: "Language" },
  SASS: { name: "SASS", src: sassIcon, level: "Language" },
  JS: { name: "Javascript", src: jsIcon, level: "Language" },
  React: { name: "ReactJS", src: reactIcon, level: "Libary" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Framework" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Runtime" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Framework" },
  Tailwind: { name: "Tailwind", src: tailwindIcon, level: "Framework" },
  Typescript: {
    name: "Typescript",
    src: typescriptIcon,
    level: "Languange",
  },
  Vue: { name: "Vue", src: vueIcon, level: "Framework" },
  Redux: { name: "Redux", src: reduxIcon, level: "State Mangement" },
  Graphql: { name: "Graphql", src: graphIcon, level: "Query Language" },
};

const projects = [
  {
    id: 1,
    name: "Marketplace",
    desc: "",
    image: marketplace,
    web: "https://mulih.netlify.app/",
    repo: "https://github.com/ulinnajaaldi/Dicoding-Mulih",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    gif: "",
  },
];

export { tools, stacks, projects };
