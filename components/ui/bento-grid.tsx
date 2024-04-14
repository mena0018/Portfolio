import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const BentoGrid = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full max-w-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
      {children}
    </div>
  );
};

export type BentoGridItemProps = {
  className?: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-lg group/bento transition duration-200 p-4 bg-primary-foreground border border-accent justify-between flex flex-col gap-4 [&>p:text-lg]',
        className,
      )}
    >
      {header}

      {title && (
        <div className='md:group-hover/bento:translate-x-2 transition duration-200'>
          {icon}
          <div className='font-sans font-medium text-lg text-primary mb-2 mt-2'>
            {title}
          </div>
          <div className='font-sans font-normal text-secondary'>
            <span className='text-sm'>{description}</span>
          </div>
        </div>
      )}
    </div>
  );
};
