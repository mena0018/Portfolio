import { ProjectType } from '../types/project';

import URLShortening from '/public/img//projects/url-shortening.webp';
import CountDown from '/public/img//projects/countdown.webp';
import TradingSite from '/public/img//projects/trading-site.webp';
import Metaversus from '/public/img//projects/metaversus.webp';

import typescript from '/public/img/icones/langages/typescript.svg';
import react from '/public/img/icones/langages/react.svg';
import next from '/public/img/icones/langages/next-js.svg';
import sass from '/public/img/icones/langages/sass.svg';
import tailwind from '/public/img/icones/langages/tailwindcss.svg';

export const dataProjects: Record<string, Omit<ProjectType, 'id'>[]> = {
  FR: [
    {
      title: 'Metaversus',
      description:
        "Landing Page sur le Metaverse réalisé dans le cadre d'un challenge Frontend-Mentor",
      img: Metaversus,
      url: [
        'https://github.com/mena0018/Next-Metaverse',
        'https://next-metaverse-theta.vercel.app/',
      ],
      icons: [typescript, next, tailwind],
    },
    {
      title: 'Trading-Site',
      description:
        "Landing Page d'un site de trading réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: TradingSite,
      url: [
        'https://github.com/mena0018/Trading-Website',
        'https://trading-website-five.vercel.app',
      ],
      icons: [typescript, react, sass],
    },
    {
      title: 'URL Shortening',
      description:
        "Application de raccourcissement d'URL réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: URLShortening,
      url: [
        'https://github.com/mena0018/URL-Shortening',
        'https://url-shortening-virid.vercel.app/',
      ],
      icons: [typescript, react, sass],
    },
    {
      title: 'Compte à Rebours',
      description: "Compte à rebours réalisé dans le cadre d'un challenge Frontend-Mentor.",
      img: CountDown,
      url: [
        'https://github.com/mena0018/Launch-Countdown-timer',
        'https://launch-countdown-time.netlify.app',
      ],
      icons: [typescript, react, sass],
    },
  ],
  EN: [
    {
      title: 'Metaversus',
      description: 'Frontend Mentor challenge focus on a Metaverse Landing Page.',
      img: Metaversus,
      url: [
        'https://github.com/mena0018/Next-Metaverse',
        'https://next-metaverse-theta.vercel.app/',
      ],
      icons: [typescript, next, tailwind],
    },
    {
      title: 'Trading-Site',
      description: 'Landing Page challenge proposed by Frontend-Mentor.',
      img: TradingSite,
      url: [
        'https://github.com/mena0018/Trading-Website',
        'https://trading-website-five.vercel.app/',
      ],
      icons: [typescript, react, sass],
    },
    {
      title: 'URL Shortening',
      description:
        'Frontend Mentor challenge focus on the integration of a shortened URLs with the shrtcode API.',
      img: URLShortening,
      url: [
        'https://github.com/mena0018/URL-Shortening',
        'https://url-shortening-virid.vercel.app/',
      ],
      icons: [typescript, react, sass],
    },
    {
      title: 'CountDown-Timer',
      description: 'Countdown challenge proposed by Frontend Mentor.',
      img: CountDown,
      url: [
        'https://github.com/mena0018/Launch-Countdown-timer',
        'https://launch-countdown-time.netlify.app',
      ],
      icons: [typescript, react, sass],
    },
  ],
};
