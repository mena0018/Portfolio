import { ProjectType } from '../types/project';

import WebgestionV2 from "../img/webp/projects/webgestion-v2.webp";
import CountDown from "../img/webp/projects/countdown.webp";
import TodoListPWA from "../img/webp/projects/todolist-pwa.webp";
import Ecommerce from "../img/webp/projects/ecommerce.webp";

import javascript from "../img/icones/langages/javascript.svg";
import typescript from "../img/icones/langages/typescript.svg";
import react from "../img/icones/langages/react.svg";
import sass from "../img/icones/langages/sass.svg";
import pwa from "../img/icones/langages/pwa.svg";
import symfony from "../img/icones/langages/symfony.svg";
import mysql from "../img/icones/langages/mysql.svg";


let css  = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
let html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
let redux = "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg";


export const dataProjects: Record<string, ProjectType[]> = {
  FR: [
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
    },
    {
      title: "TodoList PWA",
      description: "Permet de se synchroniser avec plusieurs appareils et dispose d'un mode hors ligne.",
      img: TodoListPWA,
      url: ["https://github.com/mena0018/TodoList-Progressive-Web-App"],
      icons:  [ html, css, javascript, pwa ]
    }
  ],
  EN: [
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
    },
    {
      title: "TodoList PWA",
      description:
        "Allows you to synchronize with multiple devices and has an offline mode.",
      img: TodoListPWA,
      url: ["https://github.com/mena0018/TodoList-Progressive-Web-App"],
      icons:  [ html, css, javascript, pwa ]
    }
  ]
};
