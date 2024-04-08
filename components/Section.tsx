import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ className: string }>;

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn('max-w-3xl px-4 m-auto', className)}>
      {children}
    </section>
  );
};
