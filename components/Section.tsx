import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ className?: string; id: string }>;

export const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full max-w-container overflow-hidden m-auto px-4 md:px-8 py-5 md:py-10 bg-primary-foreground border border-accent rounded-lg',
        className,
      )}
    >
      {children}
    </section>
  );
};
