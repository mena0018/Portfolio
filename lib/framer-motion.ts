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

export const variants: Variants = {
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

export const variantsSecond: Variants = {
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

export const variantsBackground: Variants = {
  initial: {
    backgroundPosition: '0 50%',
  },
  animate: {
    backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
  },
};

export const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (isReversed: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      staggerDirection: isReversed ? -1 : 1,
    },
  }),
};

export const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
