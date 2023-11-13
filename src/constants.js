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
import cryptowalletImage from "./assets/img/Gear-Coinbase-App-Screens.webp";
import authenticationImage from "./assets/img/authentication-image.webp";
import memeImage from "./assets/img/meme-time.jpg";

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
      "User can use this application to track their watchlist cryptocurrency. #React Native #JavaScript",
    imgUrl: cryptowalletImage,
    githubLink: "https://www.github.com/souravdtu/crypto-wallet-react-native",
  },
  {
    title: "Authentication Template",
    description: "MERN Tech Stack",
    imgUrl: authenticationImage,
    githubLink: "https://www.github.com/souravdtu/authentication-template",
  },
  {
    title: "Meme Time",
    description: "Android Application",
    imgUrl: memeImage,
    githubLink: "https://www.github.com/souravdtu/MEME-TIME",
  },
];

export const experiencesList = [
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
  {
    title: "Associate Software Development Engineer (Mobile Application)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "July 2022 - March 2023",
    points: [
      "Implemented new features such as waiting period, fuel cost calculator, and more widely and frequently used tools in Carwale mobile application.",
      "Enhanced multiple features within Carwale and BikeWale mobile application.",
    ],
  },
  {
    title: "Software Development Engineer 1 (Mobile Application)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Played an integral role in the development of critical media properties features, pivotal to the business.",
      "Spearheaded a seamless transition from a native codebase to a React Native codebase for the mobile app.",
    ],
  },
];

export const servicesList = [
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
  // {
  //   title: "Web Developer",
  //   icon: web,
  //   bg: "yellow",
  // },
  // {
  //   title: "React JS Developer",
  //   icon: reactjs,
  //   bg: "green",
  // },
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
