'use client';

import './About.css';
import { Context } from '@/context/langContext';
import { TypingText } from '../TypingText/TypingText';
import { dataTitle } from '@/constants/title';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from 'src/utils/motion';
import profilImg from 'public/img//about_me/profil.webp';
import biographieEn from 'public/img/about_me/about_me_en.webp';
import biographieFr from 'public/img/about_me/about_me_fr.webp';
import Image from 'next/image';
import Wrapper from '../Wrapper/Wrapper';

export default function About() {
  const { lang } = useContext(Context);

  return (
    <section className='container' id='about'>
      <Wrapper>
        <TypingText title={dataTitle[lang]['about']} />

        <div className='container-about'>
          <motion.div className='profil-img' variants={fadeIn('right', 'tween', 0.2, 1)}>
            <Image src={profilImg} alt='Bitmoji Snapchat' priority />
          </motion.div>

          <motion.div className='biographie' variants={fadeIn('left', 'tween', 0.2, 1)}>
            <Image
              src={lang === 'FR' ? biographieFr : biographieEn}
              alt="Capture d'écran me décrivant"
            />
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
}
