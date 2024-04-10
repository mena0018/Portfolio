import CountDown from '@/public/images/projects/countdown.webp';
import Metaversus from '@/public/images/projects/metaversus.webp';
import TradingSite from '@/public/images/projects/trading-site.webp';
import URLShortening from '@/public/images/projects/url-shortening.webp';

export type Project = {
  link: string;
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

export const projects: Array<Project> = [
  {
    id: Date.now(),
    imgUrl: Metaversus.src,
    title: 'Metaversus',
    link: 'https://next-metaverse-theta.vercel.app',
    description: 'Frontend Mentor challenge focus on a Metaverse Landing Page.',
  },
  {
    id: Date.now(),
    title: 'Trading-Site',
    link: 'https://trading-website-five.vercel.app',
    imgUrl: TradingSite.src,
    description: 'Landing Page challenge proposed by Frontend-Mentor',
  },
  {
    id: Date.now(),
    title: 'URL Shortening',
    link: 'https://github.com/mena0018/URL-Shortening',
    imgUrl: URLShortening.src,
    description:
      'Frontend Mentor challenge focus on the integration of a shortened URLs with the shrtcode API.',
  },
  {
    id: Date.now(),
    title: 'CountDown',
    link: 'https://github.com/mena0018/Launch-Countdown-timer',
    imgUrl: CountDown.src,
    description: 'Countdown challenge proposed by Frontend Mentor.',
  },
];
