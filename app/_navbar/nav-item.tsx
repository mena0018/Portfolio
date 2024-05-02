'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ComponentPropsWithRef } from 'react';
import { NavItemType } from '@/app/_navbar/navbar.data';
import { useNavbarStore } from '@/app/_navbar/navbar.store';

type NavItemProps = NavItemType &
  ComponentPropsWithRef<'li'> & {
    className?: string;
  };

export const NavItem = ({ href, label, className, ...props }: NavItemProps) => {
  const hash = useNavbarStore((state) => state.hash);

  return (
    <li {...props}>
      <Link
        href={href}
        className={cn('nav-item', className, {
          'text-primary font-semibold': href === hash,
        })}
      >
        {label}
      </Link>
    </li>
  );
};
