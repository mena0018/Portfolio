import { v4 as uuidv4 } from 'uuid';
import { Hash, NavbarItem } from '@/app/_navbar/navbar.store';

export type NavItemType = {
  id: string;
  href: Hash;
  label: NavbarItem;
};

export const navItems: Array<NavItemType> = [
  {
    id: uuidv4(),
    href: Hash.About,
    label: NavbarItem.About,
  },
  {
    id: uuidv4(),
    href: Hash.Skills,
    label: NavbarItem.Skills,
  },
  {
    id: uuidv4(),
    href: Hash.Projects,
    label: NavbarItem.Projects,
  },
  {
    id: uuidv4(),
    href: Hash.Planning,
    label: NavbarItem.Planning,
  },
  {
    id: uuidv4(),
    href: Hash.Contact,
    label: NavbarItem.Contact,
  },
];
