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
import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";

// Gif Images
import dapbundaGif from "@gif/dapbunda.gif";
import coffebeanGif from "@gif/coffe-bean.gif";
import portfolioGif from "@gif/portfolio.gif";
import notesGif from "@gif/notes.gif";
import abinawaGif from "@gif/abinawa.gif";
import bookshelfGif from "@gif/bookshelf.gif";

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
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  SASS: { name: "SASS", src: sassIcon, level: "Advanced" },
  JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
  React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Advanced" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Intermediate" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Advanced" },
  Tailwind: { name: "Tailwind", src: tailwindIcon, level: "Advanced" },
  Typescript: {
    name: "Typescript",
    src: typescriptIcon,
    level: "Intermediate",
  },
  Vue: { name: "Vue", src: vueIcon, level: "Advanced" },
  Redux: { name: "Redux", src: reduxIcon, level: "Intermediate" },
  Graphql: { name: "Graphql", src: graphIcon, level: "Intermediate" },
};

const projects = [
  // {
  //   id: 1,
  //   name: "",
  //   desc: "",
  //   image: null,
  //   web: "",
  //   repo: "",
  //   stack: "",
  //   gif: "",
  // },
];

export { tools, stacks, projects };
