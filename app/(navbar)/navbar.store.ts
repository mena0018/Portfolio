import { create } from 'zustand';

export enum Hash {
  About = '#about',
  Skills = '#skills',
  Projects = '#projects',
  Contact = '#contact',
}

export enum NavbarItem {
  About = 'About',
  Skills = 'Skills',
  Projects = 'Projects',
  Contact = 'Contact',
}

type NavbarStore = {
  hash: Hash;
  updateHash: (newHash: Hash) => void;
};

export const useNavbarStore = create<NavbarStore>()((set) => ({
  hash: Hash.About,
  updateHash: (newHash) => set(() => ({ hash: newHash })),
}));
