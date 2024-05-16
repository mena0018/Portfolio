'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
      toast.warning(
        "I'm still working on it, my apologies for this disasters...",
        { duration: 3000 },
      );
    }
  };

  return (
    <Button
      size='icon'
      variant='outline'
      className='w-12 h-12 rounded-full'
      onClick={handleTheme}
    >
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
