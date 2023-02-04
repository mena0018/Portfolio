import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type ContactType = {
  icon: string;
  name: string;
  info: string;
  link: string;
  contact: string;
};

export type AboutType = {
  text: string;
};

export type HomeType = {
  first: string;
  second: string;
  third: string;
  btn: string;
};

export type NavbarType = {
  title: string;
  id: string;
};

export type ProjectWithIndex = {
  img: StaticImageData;
  title: string;
  description: string;
  url: string[];
  icons: string[];
  index: number;
};

export type ProjectTypes = Omit<ProjectWithIndex, 'index'>;

export type SkillType = {
  name: string;
  stacks: string[];
};

export type TitleType = {
  about: string;
  skills: string;
  realizations: string;
};

export type WrapperProps = { children: ReactNode; styles?: string };
