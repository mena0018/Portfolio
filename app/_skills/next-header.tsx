'use client';

import { motion } from 'framer-motion';
import { NextIcon } from '@/icons/NextIcon';
import { DockerIcon } from '@/icons/DockerIcon';
import { PostgresIcon } from '@/icons/PostgresIcon';
import { CustomBadge } from '@/components/custom-badge';
import { rotateLeft, rotateRight } from '@/lib/framer-motion';

export const NextHeader = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex flex-1 gap-2 w-full h-full min-h-[6rem]'
    >
      <CustomBadge
        variants={rotateRight}
        title='PostgreSQL'
        description='Database'
        icon={<PostgresIcon className='rounded-full h-12 w-10' />}
      />
      <CustomBadge
        title='Next'
        description='Framework'
        icon={
          <NextIcon color='white' className='rounded-full h-10 w-10 ring' />
        }
      />
      <CustomBadge
        variants={rotateLeft}
        title='Docker'
        description='Environment'
        icon={<DockerIcon className='rounded-full h-10 w-10 ring' />}
      />
    </motion.div>
  );
};
