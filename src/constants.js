import {
  javascript,
  typescript,
  git,
  html,
  css,
  reactjs,
  java,
  kotlin,
  androidSimple,
  carwale,
  ten,
  nextjs,
  mobile,
  web,
} from "./assets/index";
import cryptowalletImage from "./assets/img/crypto-ss.png";
import authenticationImage from "./assets/img/authentication-image.webp";
import memeImage from "./assets/img/meme-time.png";
import portfolioImage from "./assets/img/portfolio.png";

export const borderDebug = {
  borderWidth: 2,
  borderColor: "red",
  borderStyle: "solid",
};

export const skillsList = [
  { icon: javascript, ballColor: "red" },
  { icon: typescript, ballColor: "blue" },
  { icon: java, ballColor: "chocolate" },
  { icon: html, ballColor: "orange" },
  { icon: css, ballColor: "yellow" },
  { icon: reactjs, ballColor: "green" },
  { icon: androidSimple, ballColor: "black" },
  { icon: git, ballColor: "#224455" },
  { icon: kotlin, ballColor: "black" },
  { icon: nextjs, ballColor: "darkred" },
];

export const projectsList = [
  {
    title: "CryptoWallet UI",
    description:
      "A  React Native based Crypto Wallet, a front-end project seamlessly interfacing with APIs to fetch and display data",
    imgUrl: cryptowalletImage,
    githubLink: "https://www.github.com/souravdtu/crypto-wallet-react-native",
  },
  {
    title: "Portfolio: A React JS Project",
    description: " Crafted an impressive portfolio using React JS, showcasing my skills, experience, and diverse Projects",
    imgUrl: portfolioImage,
    githubLink: "https://github.com/souravdtu/Portfolio",
  },
  {
    title: "Meme Time",
    description: "Android Application for meme lovers built with kotlin",
    imgUrl: memeImage,
    githubLink: "https://www.github.com/souravdtu/MEME-TIME",
  },
];

export const experiencesList = [
  {
    title: "Software Development Engineer 1 (Mobile Application)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Responsible for maintaining the codebase and integrating new features in CarWale’s mobile application having 5M+ installs and 4.6+ rating on the Play Store.",
"Spearheaded a seamless transition from the Android native codebase to a React Native codebase for the mobile app.",
"Played an integral role in the development of critical media properties features, pivotal to the business.",
 "Successfully integrated a tracking module into the app, utilizing Firebase and a proprietary microservice.",
"Improved app page performance through techniques such as batch rendering, lazy loading, and leveraging React hooks."
    ],
  },
  {
    title: "Associate Software Development Engineer (Mobile Application)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "July 2022 - March 2023",
    points: [
      "Responsible for maintaining the codebase and integrating new features in BikeWale’s mobile application having 1M+ installs and 4.5+ rating on the Play Store.",
      "Integrated new features such as the waiting period, fuel cost calculator, and more widely and frequently used tools in CarWale’s mobile application.",
      "Ensured robust code quality by implementing unit tests.",
      "Worked on the native codebase of CarWale’s mobile application."
    ],
  },
  {
    title: "Development Associate Intern",
    company_name: "The Entreprenrurship Network",
    icon: ten,
    iconBg: "#000000",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Developed message encoder/decoder using Python.",
      "Developed alarm clock with GUI and desktop notifier App.",
    ],
  },
];

export const servicesList = [
  {
    title: "Android Application Developer",
    icon: androidSimple,
    bg: "green",
  },
  {
    title: "Web Developer",
    icon: web,
    bg: "yellow",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    bg: "red",
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
    bg: "blue",
  },
];

export const codingProfiles = [
  {
    name: "Leetcode",
    link: "https://leetcode.com/souravdtu/",
  },
  {
    name: "Github",
    link: "https://github.com/souravdtu",
  },
];
