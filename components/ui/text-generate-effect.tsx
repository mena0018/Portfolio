'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

type TextEffectProps = {
  words: string;
  className?: string;
  delay?: number;
};

export const TextGenerateEffect = ({
  words,
  className,
  delay,
}: TextEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      { opacity: 1 },
      { duration: 2, delay: delay || stagger(0.2) },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className='opacity-0'>
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        'font-bold text-center text-primary text-xl leading-snug tracking-wide',
        className,
      )}
    >
      {renderWords()}
    </div>
  );
};
