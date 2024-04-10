import { v4 as uuidv4 } from 'uuid';
import { Hash } from '@/data/store';

export type NavItem = {
  id: string;
  href: Hash;
  label: 'About' | 'Portfolio' | 'Contact';
};

export const navItems: Array<NavItem> = [
  {
    id: uuidv4(),
    label: 'About',
    href: '#about',
  },
  {
    id: uuidv4(),
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    id: uuidv4(),
    label: 'Contact',
    href: '#contact',
  },
];
