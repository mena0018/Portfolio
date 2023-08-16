'use client';

import './Home.css';
import { useContext } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/motion';
import { Context } from '@/context/langContext';
import { homeData } from '@/constants/home';

import formSVG from 'public/img/blob.svg';
import Image from 'next/image';

export default function Home() {
  const { lang } = useContext(Context);

  return (
    <section className='Home' id='home'>
      <motion.div
        className='container-presentation'
        viewport={{ once: false, amount: 0.25 }}
        initial='hidden'
        whileInView='show'
      >
        <div className='text-presentation'>
          <motion.p variants={fadeIn('right', 'tween', 0, 1)}> {homeData[lang]['first']}</motion.p>
          <motion.p variants={fadeIn('right', 'tween', 0.2, 1)}>
            {homeData[lang]['second']}
            <span> Rabie,</span>
          </motion.p>
          <motion.p variants={fadeIn('right', 'tween', 0.3, 1)}>{homeData[lang]['third']}</motion.p>
        </div>

        <motion.a
          href='#contact'
          className='contact-cta'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={fadeIn('right', 'tween', 0.4, 1)}
        >
          {homeData[lang]['btn']}
        </motion.a>

        <motion.div className='link-social-media' variants={fadeIn('right', 'tween', 0.6, 1)}>
          <span>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://linkedin.com/in/rabie-menad'
              aria-label='Linkedin account'
            >
              <FiLinkedin />
            </a>
          </span>
          <span>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/mena0018'
              aria-label='GitHub account'
            >
              <FiGithub />
            </a>
          </span>
        </motion.div>
      </motion.div>

      <div className='svg-form'>
        <Image priority src={formSVG} alt='animated blob' width={530} height={530} />
      </div>
    </section>
  );
}
