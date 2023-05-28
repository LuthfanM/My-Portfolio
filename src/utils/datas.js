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
import hris from '@images/hris.png'
import carRental from '@images/car-rental.png';

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
    name: "HRIS Management",
    desc: "",
    image: hris,
    web: "",
    repo: "",
    stack: "Vue, Vuex, Express.js, Tailwind, Mongodb",
    gif: "",
  },
  {
    id: 10,
    name: "Marketplace",
    desc: "",
    image: marketplace,
    web: "https://marketplace-one-blue.vercel.app/",
    repo: "https://github.com/AmienulRana/marketplace",
    stack: "Vue, Vuex, Express.js, Mongodb, Tailwind",
    gif: "",
  },
  {
    id: 2,
    name: "Topup Game",
    desc: "",
    image: topupgame,
    web: "https://topupgame-pearl.vercel.app/",
    repo: "https://github.com/AmienulRana/topupgame",
    stack: "Next, Typescript, Express.js, Mongodb",
    gif: "",
  },
  {
    id: 3,
    name: "Invitation Digital",
    desc: "",
    image: undanganDigital,
    web: "",
    repo: "",
    stack: "React, Reactstrap, Express.js, Mongodb",
    gif: "",
  },
  {
    id: 11,
    name: "Car Rental",
    desc: "",
    image: carRental,
    web: "https://car-rental-ochre.vercel.app/",
    repo: "https://github.com/AmienulRana/car-rental",
    stack: "React, Sass",
    gif: "",
  },
  {
    id: 4,
    name: "Furniture Landing Page",
    desc: "",
    image: landingPage,
    web: "https://amienulrana.github.io/companyprofile/",
    repo: "https://github.com/AmienulRana/companyprofile",
    stack: "Html, Css, Javascript, Tailwind",
    gif: "",
  },
  {
    id: 5,
    name: "Food Landing Page",
    desc: "",
    image: healtyFood,
    web: "https://amienulrana.github.io/healthysalads/",
    repo: "https://github.com/AmienulRana/healthysalads",
    stack: "Html, Css, Javascript, Bootstrap",
    gif: "",
  },
  {
    id: 6,
    name: "Online Shop",
    desc: "",
    image: onlineShop,
    web: "https://amienulrana.github.io/hefa-store/",
    repo: "https://github.com/AmienulRana/online-shop",
    stack: "Html, Css, Javascript, Bootstrap",
    gif: "",
  },
];

export { tools, stacks, projects };
