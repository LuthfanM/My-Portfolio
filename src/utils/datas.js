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
import reduxIcon from "@icons/redux.svg";
import mongoIcon from "@icons/mongodb.svg";
import graphIcon from "@icons/graphql.svg";
import jestIcon from "@icons/jest.svg";
import IconNestJS from "@icons/nestjs.svg";
import javaIcon from "@icons/javas.svg";
import golangIcon from "@icons/golang.svg";
import knexIcon from "@icons/knex.svg";
import laravelIcon from "@icons/laravel.svg";
import mysqlIcon from "@icons/mysql.svg";
import postgreIcon from "@icons/postgre.svg";
import dockerIcon from "@icons/docker.svg";
// Project Images
import creatella from "@images/creatella.png";
import febilio from "@images/fabilio.png";
import jenius from "@images/jenius.png";
import boostCredit from "@images/boost_credit.png";
import defrontier from "@images/defrontiers.png";
import boostCreditCustomer from "@images/boost_credit_customer.png";
import productList from "@images/product_list.png";
import resto from "@images/resto.png";
import emptyIdealogic from "@images/empty_idealogic.png";
import filledIdealogic from "@images/filled_idealogic.png";

import { LEFT } from "../helpers/constants";
import { MIDDLE } from "../helpers/constants";
// Gif Images

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  Mongodb: { name: "Mongodb", src: mongoIcon, level: "Database" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Database" },
  PostgreSQL: { name: "PostgreSQL", src: postgreIcon, level: "Database" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Dependency tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Jest: { name: "Jest", src: jestIcon, level: "Unit test" },
  Docker: { name: "Docker", src: dockerIcon, level: "Container" },
  Knex: { name: "KnexJS", src: knexIcon, level: "SQL Query Builder" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Language" },
  CSS: { name: "CSS", src: cssIcon, level: "Language" },
  SASS: { name: "SASS", src: sassIcon, level: "Language" },
  JS: { name: "Javascript", src: jsIcon, level: "Language" },
  React: { name: "ReactJS", src: reactIcon, level: "Library" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Framework" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Runtime" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Framework" },
  Tailwind: { name: "Tailwind", src: tailwindIcon, level: "Framework" },
  Typescript: {
    name: "Typescript",
    src: typescriptIcon,
    level: "Language",
  },
  Redux: { name: "Redux", src: reduxIcon, level: "State Management" },
  NestJS: { name: "NestJS", src: IconNestJS, level: "Framework" },
  Java: { name: "Java", src: javaIcon, level: "Language" },
  Golang: { name: "Golang", src: golangIcon, level: "Language" },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Framework" },
  Graphql: { name: "Graphql", src: graphIcon, level: "Query Language" },
};

const projects = [
  {
    id: 1,
    name: "Defrontiers",
    desc: "A Gaming main page interface",
    image: defrontier,
    web: "",
    repo: "https://github.com/LuthfanM/frontier",
    stack: "React, Next Js, Css, Html",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 2,
    name: "Febilio",
    desc: "",
    image: febilio,
    web: "https://fabilio-test.vercel.app/",
    repo: "https://github.com/LuthfanM/fabilioTest",
    stack: "React, Css, Html, Javascript",
    gif: "",
    position: LEFT,
  },
  {
    id: 2,
    name: "Kreasi Indo",
    desc: "Read data from file, sort the data then write the sorted value into new file",
    image: undefined,
    web: "",
    repo: "https://github.com/LuthfanM/KreasiIndoTest",
    stack: "Java",
    gif: "",
  },
  {
    id: 3,
    name: "Jenius",
    desc: "Crud application using react native (Mobile app) - (Minimum Css Design). This app created based on assigment from Jenius",
    image: jenius,
    web: "",
    repo: "https://github.com/LuthfanM/JeniusCrudTest",
    stack: "React Native",
    gif: "",
  },
  {
    id: 11,
    name: "Xapiens",
    desc: "Login Form then display list of user based on specific API (No Css Design). This app created based on assigment from Xapiens",
    image: undefined,
    web: "",
    repo: "https://github.com/LuthfanM/xapiensTes",
    stack: "React, Html, Css, Rest Api",
    gif: "",
  },
  {
    id: 4,
    name: "Boost Credit",
    desc: "A baseline template for fintech application. ",
    image: boostCredit,
    web: "",
    repo: "https://github.com/LuthfanM/React_Template_Common",
    stack: "React, Html, Css, Javascript, Tailwind",
    gif: "",
    position: MIDDLE
  },
  {
    id: 5,
    name: "Cloe Customer",
    desc: "Fintech application with useful components",
    image: boostCreditCustomer,
    web: "",
    repo: "https://github.com/LuthfanM/React_Template_Customer",
    stack: "React, Html, Css, Javascript, SCSS",
    gif: "",
  },
  {
    id: 6,
    name: "Creatella Phase",
    desc: "A Search and display list with implementation of emoji expression in search bar. This app created based on assigment from Creatella",
    image: creatella,
    web: "",
    repo: "https://github.com/LuthfanM/createllaReactNative",
    stack: "React Native, Javascript",
    gif: "",
  },
  {
    id: 7,
    name: "Product List",
    desc: "A displayed list with custom bottom navigation bar. This list can be clicked and display data based on the input",
    image: productList,
    web: "",
    repo: "https://github.com/LuthfanM/RN-Product-List",
    stack: "React Native, Javascript",
    gif: "",
  },
  {
    id: 8,
    name: "Idealogic (Front End)",
    desc: "A form with implemented hooks which update the price based on selected input from user dynamically. This app created based on assigment from Idealogic",
    image: emptyIdealogic,
    web: "",
    repo: "https://github.com/LuthfanM/idealogic-fe",
    stack: "React Js, HTML, Javascript",
    gif: "",
    position: MIDDLE
  },
  {
    id: 9,
    name: "Idealogic (Back End)",
    desc: "Developed with Node js, displaying data from mysql then accessable as REST API. This app created based on assigment from Idealogic",
    image: filledIdealogic,
    web: "",
    repo: "https://github.com/LuthfanM/idealogic-be",
    stack: "Node Js, Mysql",
    gif: "",
    position: MIDDLE
  },
  {
    id: 10,
    name: "My Restaurant Recipe",
    desc: "A simple restaurant app to display list, write menu, write recipe, write category of recipe. This app created based on assigment from TLAB",
    image: resto,
    web: "",
    repo: "https://github.com/LuthfanM/My-Restaurant-Recipe",
    stack: "React Js, HTML, Javascript",
    gif: "",
  },
  {
    id: 11,
    name: "My Restaurant Recipe (Back End)",
    desc: "Developed with Laravel Framework, displaying CRUD from PostgreSQL then accessable as REST API. This app created based on assigment from TLAB",
    image: resto,
    web: "",
    repo: "https://github.com/LuthfanM/My-Restaurant-Recipe-BE",
    stack: "PHP, Laravel, PostgreSQL",
    gif: "",
  },
];

export { tools, stacks, projects };
