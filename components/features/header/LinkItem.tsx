'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavItem } from '@/data/navbar';
import { useStore } from '@/data/store';
import { ComponentPropsWithRef } from 'react';

type LinkItemProps = NavItem & ComponentPropsWithRef<'li'>;

export const LinkItem = ({ href, label, ...props }: LinkItemProps) => {
  const { hash } = useStore();

  return (
    <li {...props}>
      <Link
        href={href}
        className={cn('flex nav-item', {
          'text-primary font-semibold': href === hash,
        })}
      >
        {label}
      </Link>
    </li>
  );
};
