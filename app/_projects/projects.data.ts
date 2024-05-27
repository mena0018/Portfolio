import CountDown from '@/public/images/projects/countdown.webp';
import Metaversus from '@/public/images/projects/metaversus.webp';
import TradingSite from '@/public/images/projects/trading-site.webp';
import URLShortening from '@/public/images/projects/url-shortening.webp';
import FilterSystem from '@/public/images/projects/filter-system.webp';

export enum ProjectTitle {
  Metaversus = 'Metaversus',
  Trading = 'Trading-Site',
  URLShortening = 'URL Shortening',
  CountDown = 'CountDown',
  FilterSystem = 'FilterSystem',
}

export type Project = {
  id: string;
  link: string;
  imgUrl: string;
  title: ProjectTitle;
  description: string;
};

export const projects: Array<Project> = [
  {
    id: crypto.randomUUID(),
    imgUrl: FilterSystem.src,
    title: ProjectTitle.FilterSystem,
    link: 'https://filter-system-iota.vercel.app',
    description: 'Full Stack filter system made with Next (app router)',
  },
  {
    id: crypto.randomUUID(),
    imgUrl: Metaversus.src,
    title: ProjectTitle.Metaversus,
    link: 'https://next-metaverse-theta.vercel.app',
    description: 'Frontend Mentor challenge focus on a Metaverse Landing Page.',
  },
  {
    id: crypto.randomUUID(),
    title: ProjectTitle.Trading,
    link: 'https://trading-website-five.vercel.app',
    imgUrl: TradingSite.src,
    description: 'Landing Page challenge proposed by Frontend-Mentor',
  },
  {
    id: crypto.randomUUID(),
    title: ProjectTitle.URLShortening,
    link: 'https://url-shortening-virid.vercel.app',
    imgUrl: URLShortening.src,
    description:
      'Frontend Mentor challenge focus on the integration of a shortened URLs with the shrtcode API.',
  },
  {
    id: crypto.randomUUID(),
    title: ProjectTitle.CountDown,
    link: 'https://launch-countdown-time.netlify.app',
    imgUrl: CountDown.src,
    description: 'Countdown challenge proposed by Frontend Mentor.',
  },
];
