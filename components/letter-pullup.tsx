'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type LetterPullUpProps = {
  className?: string;
  words: string;
  delay?: number;
};

export function LetterPullUp({
  words,
  className,
  delay = 0.05,
}: LetterPullUpProps) {
  const letters = words.split('');

  const pullUpVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  };

  return (
    <div className='flex justify-center w-fit'>
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          initial='initial'
          animate='animate'
          variants={pullUpVariant}
          custom={i}
          className={cn('text-xl text-secondary', className)}
        >
          {letter === ' ' ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
