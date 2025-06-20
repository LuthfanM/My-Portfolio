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
import palmoil from "@images/palmoil.png";
import palmoil_io_web from "@images/palmoil_io_web.png";
import makemuuv_web from "@images/makemuuv_web.png";
import passpass from "@images/passpass.png";
import restaurant_pos from "@images/restaurant_pos.png";
import defrontier from "@images/defrontiers.png";
import boostCreditCustomer from "@images/boost_credit_customer.png";
import monitopets from "@images/monitopets.png";

import dailyAct from "@images/mobile/daily_act.png";
import makemuuv_mobile from "@images/mobile/makemuuvs_mobile.png";
import sentuhtanahku from "@images/mobile/sentuh_tanahku.png";

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
    desc: "A Landing page for gaming community called Defrontiers, showcasing the latest news and events",
    image: defrontier,
    web: "",
    repo: "https://github.com/LuthfanM/frontier",
    stack: "React, Next Js, Css, Html",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 2,
    name: "Monitopets",
    desc: "Landing page for Pet Website. Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!",
    image: monitopets,
    web: "https://monito-pets-five.vercel.app/",
    repo: "https://github.com/LuthfanM/MonitoPets",
    stack: "React, CSS, Typescript",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 3,
    name: "CHLOE (Boost Credit Customer)",
    desc: "Fintech application to apply loan, check loan status, and manage profile",
    image: boostCreditCustomer,
    web: "",
    repo: "https://github.com/LuthfanM/React_Template_Customer",
    stack: "NextJS, Tailwind",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 4,
    name: "Restaurant POS System",
    desc: "A Dashboard for restaurant to manage their menu, orders, and sales",
    image: restaurant_pos,
    web: "",
    repo: "https://github.com/LuthfanM/Restaurant-POS-Demo",
    stack: "NextJS, Tailwind, Typescript",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 5,
    name: "Pass Pass",
    desc: "A daily giveaway web application where users can participate in giveaways by take some participation steps such as following social media accounts, subscribing to newsletters, and sharing the giveaway on their own social media accounts.",
    image: passpass,
    web: "",
    repo: "https://github.com/LuthfanM/PassPass",
    stack: "NextJS, Tailwind, Typescript, Prisma",
    gif: "",
  },
  {
    id: 6,
    name: "MakeMuuvs Web Application",
    desc: "The MUUVS app is a healthy life tool for social interaction and adventurous explorations helping you get outside, connect with others and discover Life's Playground!",
    image: makemuuv_web,
    web: "https://www.makemuuvs.com/",
    repo: "",
    stack: "Laravel Inertia, React, Tailwind, Typescript",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 7,
    name: "Palmoil IO Website",
    desc: "Landing Page for Palmoil IO, a deforestation app to monitor and track deforestation activities in several countries, providing insights and data to help combat environmental issues.",
    image: palmoil_io_web,
    web: "https://palmoil.io/",
    repo: "",
    stack: "NextJS, Ghost, Typescript, Tailwind",
    gif: "",
    position: MIDDLE,
  },
  {
    id: 8,
    name: "Palmoil IO Dashboard",
    desc: "Deforestation App to monitor and track deforestation activities in several countries, providing insights and data to help combat environmental issues. You need to login in order to use this app",
    image: palmoil,
    web: "https://palmoil.io/dashboard",
    repo: "",
    stack:
      "NextJS, Knex, PostgreSQL, DuckDB, Typescript, CSS, NodeJS, Mapbox, Monorepo",
    gif: "",
    position: MIDDLE,
  },
];

const mobileProjects = [
  {
    id: 1,
    name: "Daily Activity",
    desc: "Daily activity tracking app that allows users to log their daily activities, set goals, and track their progress over time. Also there is a group to share your daily activity with your friends",
    image: dailyAct,
    web: "",
    repo: "https://github.com/LuthfanM/Daily-Notes",
    stack: "Flutter, Supabase, Dart, Riverpod, Lottie",
    gif: "",
  },
  {
    id: 2,
    name: "MakeMuuvs Mobile",
    desc: "The MUUVS app is a healthy life tool for social interaction and adventurous explorations helping you get outside, connect with others and discover Life's Playground!",
    image: makemuuv_mobile,
    web: "",
    repo: "",
    stack: "React Native, Expo, Tailwind, Typescript, Google Maps",
    gif: "",
  },
  {
    id: 3,
    name: "Sentuh Tanahku",
    desc: "This app displays polygons based on specific areas defined by GeoJSON data and visualizes them on Google Maps. It replicates the functionality used by BPN (Badan Pertanahan Nasional) to monitor land ownership in Indonesia.",
    image: sentuhtanahku,
    web: "https://play.google.com/store/apps/details?id=id.go.bpn.sentuh&hl=id",
    repo: "",
    stack: "Kotlin, Google Maps",
    gif: "",
    position: MIDDLE,
  },
];

export { tools, stacks, projects, mobileProjects };
