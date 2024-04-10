import { motion } from 'framer-motion';

export const TypescriptHeader = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <div className='w-full h-full flex items-center justify-center pb-5'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={variants}
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
