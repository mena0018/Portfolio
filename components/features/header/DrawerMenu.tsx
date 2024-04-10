'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { navItems } from '@/data/navbar';
import { Hash, useStore } from '@/data/store';
import { LinkItem } from '@/components/features/header/LinkItem';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

export const DrawerMenu = () => {
  const { hash, updateHash } = useStore();
  const [open, setOpen] = useState(false);
  const activeItem = navItems.find((item) => item.href === hash) || navItems[0];

  const handleClick = (href: Hash) => {
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
          <MenuIcon />
        </li>
      </DrawerTrigger>

      <DrawerContent>
        <ul className='p-2'>
          {navItems.map((item) => (
            <LinkItem
              {...item}
              key={item.id}
              onClick={() => handleClick(item.href)}
            />
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};
