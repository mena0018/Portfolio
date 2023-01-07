import { ProjectType } from '../types/project';

import URLShortening from '../img/webp/projects/url-shortening.webp';
import CountDown from '../img/webp/projects/countdown.webp';
import TradingSite from '../img/webp/projects/trading-site.webp';
import Metaversus from '../img/webp/projects/metaversus.webp';

import typescript from '../img/icones/langages/typescript.svg';
import react from '../img/icones/langages/react.svg';
import next from '../img/icones/langages/next-js.svg';
import sass from '../img/icones/langages/sass.svg';
import tailwind from '../img/icones/langages/tailwindcss.svg';

export const dataProjects: Record<string, ProjectType[]> = {
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
      description:
        "Compte à rebours réalisé dans le cadre d'un challenge Frontend-Mentor.",
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
      description:
        'Frontend Mentor challenge focus on a Metaverse Landing Page.',
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
