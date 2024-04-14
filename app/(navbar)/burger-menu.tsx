'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BurgerIcon } from '@/icons/BurgerIcon';
import { NavItem } from '@/app/(navbar)/nav-item';
import { navItems } from '@/app/(navbar)/navbar.data';
import { Hash, useNavbarStore } from '@/app/(navbar)/navbar.store';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

export const BurgerMenu = () => {
  const { hash, updateHash } = useNavbarStore((state) => ({
    hash: state.hash,
    updateHash: state.updateHash,
  }));

  const [open, setOpen] = useState(false);
  const activeItem = navItems.find((item) => item.href === hash) || navItems[0];

  const handleNavigate = (href: Hash) => {
    updateHash(href);
    setOpen(false);
  };

  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <li
          onClick={() => setOpen(!open)}
          className='cursor-pointer w-full flex items-center justify-between'
        >
          <Link
            href={activeItem.href}
            className='nav-item px-0 text-primary font-semibold'
          >
            {activeItem.label}
          </Link>
          <BurgerIcon />
        </li>
      </DrawerTrigger>

      <DrawerContent>
        <ul className='p-2'>
          {navItems.map((item) => (
            <NavItem
              {...item}
              key={item.id}
              className='hover:bg-accent'
              onClick={() => handleNavigate(item.href)}
            />
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};
