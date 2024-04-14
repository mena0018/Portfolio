import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

type CodeProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
  className?: string;
};

export const Code = ({ className, href, ...props }: CodeProps) => {
  return (
    <>
      {' '}
      <a
        href={href}
        className={cn(
          'inline-flex items-center gap-2 font-mono font-semibold text-sm bg-muted border border-accent/50 hover:bg-primary/20 rounded-sm text-primary transition-colors hover:underline px-1 py-[0.2rem]',
          className,
        )}
        {...props}
      />{' '}
    </>
  );
};
