import { Variants } from 'framer-motion';

export const rotateRight: Variants = {
  initial: {
    x: 20,
    rotate: -5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

export const rotateLeft: Variants = {
  initial: {
    x: -20,
    rotate: 5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};
