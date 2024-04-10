'use client';

import { useStore } from '@/data/store';
import { navItems } from '@/data/navbar';
import { AppIcon } from '@/icons/AppIcon';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LinkItem } from '@/components/features/header/LinkItem';
import { DrawerMenu } from '@/components/features/header/DrawerMenu';
import { ModeToggle } from '@/components/features/header/ModeToggle';

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const { updateHash } = useStore();

  return (
    <header className='sticky top-6 w-full h-12 flex items-center gap-1'>
      <AppIcon />

      <ul className='h-full flex flex-1 items-center justify-between border-2 border-accent bg-primary-foreground rounded-full px-6'>
        {isDesktop ? (
          navItems.map((item) => (
            <LinkItem
              {...item}
              key={item.id}
              onClick={() => updateHash(item.href)}
            />
          ))
        ) : (
          <DrawerMenu />
        )}
      </ul>

      <ModeToggle />
    </header>
  );
};
