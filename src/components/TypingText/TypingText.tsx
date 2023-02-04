'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title }: { title: string }) => (
  <motion.h1 variants={textContainer} className='title'>
    {Array.from(title).map((letter: string, index: number) => (
      <motion.span key={index} variants={textVariant2}>
        {letter}
      </motion.span>
    ))}
  </motion.h1>
);
