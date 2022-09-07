import { ProjectType } from '../types/project';

import URLShortening from "../img/webp/projects/url-shortening.webp";
import CountDown from "../img/webp/projects/countdown.webp";
import TradingSite from "../img/webp/projects/trading-site.webp";
import Ecommerce from "../img/webp/projects/ecommerce.webp";

import javascript from "../img/icones/langages/javascript.svg";
import typescript from "../img/icones/langages/typescript.svg";
import react from "../img/icones/langages/react.svg";
import sass from "../img/icones/langages/sass.svg";

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
      title: "Compte à Rebours",
      description: "Compte à rebours réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: CountDown,
      url: ["https://github.com/mena0018/Launch-Countdown-timer", "https://launch-countdown-time.netlify.app"],
      icons:  [typescript, react, sass ]
    },
    {
      title: "URL Shortening",
      description: "Application de raccourcissement d'URL réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: URLShortening,
      url: ["https://github.com/mena0018/URL-Shortening", "https://url-shortening-virid.vercel.app/"],
      icons:  [ typescript, react, sass]
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
      title: "URL Shortening",
      description: "Frontend Mentor challenge focus on the integration of a shortened URLs with the shrtcode API.",
      img: URLShortening,
      url: ["https://github.com/mena0018/URL-Shortening", "https://url-shortening-virid.vercel.app/"],
      icons:  [ typescript, react, sass]
    },
    {
      title: "E-commerce",
      description: "E-commerce Application selling mugs made with React. Datas transit into the application thanks to Redux.",
      img: Ecommerce,
      url: ["https://github.com/mena0018/E-commerce"],
      icons:  [ javascript, react, redux, sass ]
    }
  ]
};
