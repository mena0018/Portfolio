'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WrapperProps } from '@/types/props';

export default function Wrapper({ children, styles }: WrapperProps) {
  return (
    <motion.div
      className={styles && styles}
      viewport={{ once: false, amount: 0.25 }}
      initial='hidden'
      whileInView='show'
    >
      {children}
    </motion.div>
  );
}
