import { StaticImageData } from 'next/image';

export type ProjectType = {
  img: StaticImageData;
  title: string;
  description: string;
  url: string[];
  icons: string[];
  index: number;
};
