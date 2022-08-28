import { ProjectType } from '../types/project';

import WebgestionV2 from "../img/webp/projects/webgestion-v2.webp";
import CountDown from "../img/webp/projects/countdown.webp";
import TradingSite from "../img/webp/projects/trading-site.webp";
import Ecommerce from "../img/webp/projects/ecommerce.webp";

import javascript from "../img/icones/langages/javascript.svg";
import typescript from "../img/icones/langages/typescript.svg";
import react from "../img/icones/langages/react.svg";
import sass from "../img/icones/langages/sass.svg";
import symfony from "../img/icones/langages/symfony.svg";
import mysql from "../img/icones/langages/mysql.svg";


let css  = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
let redux = "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg";


export const dataProjects: Record<string, ProjectType[]> = {
  FR: [
    {
      title: "Trading-Site",
      description: "Landing Page d'un site de trading réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: TradingSite,
      url: ["https://github.com/mena0018/Trading-Website", "https://trading-website-five.vercel.app"],
      icons:  [ typescript, react, sass]
    },
    {
      title: "CountDown-Timer",
      description: "Compte à rebours réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: CountDown,
      url: ["https://github.com/mena0018/Launch-Countdown-timer", "https://launch-countdown-time.netlify.app"],
      icons:  [typescript, react, sass ]
    },
    {
      title: "Webgestion V2",
      description: "Répond aux demandes d'un professeur (admin) et/ou d'un élève. Réalisé en Symfony",
      img: WebgestionV2,
      url: ["https://github.com/mena0018/WebgestionV2"],
      icons:  [ symfony, mysql, javascript, css ]
    },
    {
      title: "E-commerce",
      description: "Application E-commerce de mugs avec React. Gestion des données au sein de l'application avec Redux",
      img: Ecommerce,
      url: ["https://github.com/mena0018/E-commerce"],
      icons:  [ javascript, react, redux, sass ]
    }
  ],
  EN: [
    {
      title: "Trading-Site",
      description: "Landing Page challenge proposed by Frontend-Mentor.",
      img: TradingSite,
      url: ["https://github.com/mena0018/Trading-Website", "trading-website-five.vercel.app/"],
      icons:  [ typescript, react, sass]
    },
    {
      title: "CountDown-Timer",
      description: "Countdown challenge proposed by Frontend Mentor.",
      img: CountDown,
      url: ["https://github.com/mena0018/Launch-Countdown-timer", "https://launch-countdown-time.netlify.app"],
      icons:  [ typescript, react, sass ]
    },
    {
      title: "Webgestion V2",
      description: "Responds to requests from a teacher (admin) and/or a student. Made with Symfony.",
      img: WebgestionV2,
      url: ["https://github.com/mena0018/WebgestionV2"],
      icons:  [ symfony, mysql, javascript, css ] 
    },
    {
      title: "E-commerce",
      description: "E-commerce Application sellings mugs made with React. Datas transit into the application thanks to Redux.",
      img: Ecommerce,
      url: ["https://github.com/mena0018/E-commerce"],
      icons:  [ javascript, react, redux, sass ]
    }
  ]
};
