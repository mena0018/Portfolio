import { ProjectType } from '../types/project';

import URLShortening from "../img/webp/projects/url-shortening.webp";
import CountDown from "../img/webp/projects/countdown.webp";
import TradingSite from "../img/webp/projects/trading-site.webp";
import PaymentForm from "../img/webp/projects/payment-form.webp";

import typescript from "../img/icones/langages/typescript.svg";
import react from "../img/icones/langages/react.svg";
import sass from "../img/icones/langages/sass.svg";


export const dataProjects: Record<string, ProjectType[]> = {
  FR: [
    {
      title: "Compte à Rebours",
      description: "Compte à rebours réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: CountDown,
      url: ["https://github.com/mena0018/Launch-Countdown-timer", "https://launch-countdown-time.netlify.app"],
      icons:  [typescript, react, sass ]
    },
    {
      title: "Payment Form",
      description: "Formulaire de paiement interactif réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: PaymentForm,
      url: ["https://github.com/mena0018/CreditCard", "https://credit-card-theta.vercel.app/"],
      icons:  [ typescript, react, sass ]
    },
    {
      title: "Trading-Site",
      description: "Landing Page d'un site de trading réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: TradingSite,
      url: ["https://github.com/mena0018/Trading-Website", "https://trading-website-five.vercel.app"],
      icons:  [ typescript, react, sass]
    },
    {
      title: "URL Shortening",
      description: "Application de raccourcissement d'URL réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: URLShortening,
      url: ["https://github.com/mena0018/URL-Shortening", "https://url-shortening-virid.vercel.app/"],
      icons:  [ typescript, react, sass]
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
      title: "Payment Form",
      description: "Front-end Mentor Challenge focused on an Interactive payment form.",
      img: PaymentForm,
      url: ["https://github.com/mena0018/CreditCard", "https://credit-card-theta.vercel.app/"],
      icons:  [ typescript, react, sass ]
    },
    {
      title: "Trading-Site",
      description: "Landing Page challenge proposed by Frontend-Mentor.",
      img: TradingSite,
      url: ["https://github.com/mena0018/Trading-Website", "https://trading-website-five.vercel.app/"],
      icons:  [ typescript, react, sass]
    },
    {
      title: "URL Shortening",
      description: "Frontend Mentor challenge focus on the integration of a shortened URLs with the shrtcode API.",
      img: URLShortening,
      url: ["https://github.com/mena0018/URL-Shortening", "https://url-shortening-virid.vercel.app/"],
      icons:  [ typescript, react, sass]
    }
  ]
};
