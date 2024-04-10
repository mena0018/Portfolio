'use client';

import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Variants, motion } from 'framer-motion';

type CustomBadgeProps = {
  title: string;
  icon: ReactNode;
  description: string;
  variants?: Variants;
};

export const CustomBadge = ({
  icon,
  title,
  description,
  variants,
}: CustomBadgeProps) => {
  return (
    <motion.div
      variants={variants}
      className='h-full w-1/3 rounded-2xl p-4 bg-background border border-accent flex flex-col items-center justify-center'
    >
      {icon}
      <p className='sm:text-sm text-xs text-center font-semibold text-secondary mt-4'>
        {title}
      </p>
      <Badge className='shimmer-btn border-2 border-accent text-foreground text-xs px-2 py-0.5 mt-4'>
        {description}
      </Badge>
    </motion.div>
  );
};
