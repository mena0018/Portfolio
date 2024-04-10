'use client';

import { motion } from 'framer-motion';

export const TailwindHeader = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex flex-1 w-full h-full min-h-[6rem] flex-col gap-2'
    >
      <motion.div
        variants={variants}
        className='flex gap-2 rounded-full border border-accent p-2 items-center bg-black'
      >
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-neutral-900 h-4 rounded-full' />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex gap-2 rounded-full border border-accent p-2 items-center w-3/4 ml-auto bg-black'
      >
        <div className='w-full h-4 rounded-full bg-neutral-900' />
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex gap-2 rounded-full border border-accent p-2 items-center bg-black'
      >
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-neutral-900 h-4 rounded-full' />
      </motion.div>
    </motion.div>
  );
};
