'use client';

import { motion } from 'framer-motion';
import { variantsBackground } from '@/lib/framer-motion';

export const TypescriptHeader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center pb-5'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={variantsBackground}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className='flex flex-1 w-full h-full  min-h-[6rem] rounded-lg flex-col gap-2'
        style={{
          background:
            'linear-gradient(-45deg, #1e1b4b, #3730a3, #1d4ed8, #172554)',
          backgroundSize: '400% 400%',
        }}
      >
        <motion.div className='h-full w-full rounded-lg' />
      </motion.div>
    </div>
  );
};
