'use client';

import { motion } from 'framer-motion';
import { ReactIcon } from '@/icons/ReactIcon';

export const ReactHeader = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      className='w-full flex items-center justify-center'
      transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
    >
      <ReactIcon size={130} className='inline-block animate-rotate' />
    </motion.div>
  );
};
