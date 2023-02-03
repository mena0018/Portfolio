'use client';

import './About.css';
import Image from 'next/image';
import { Context } from '@/context/langContext';
import { dataTitle } from '@/constants/title';
import { useEffect, useContext, useRef } from 'react';
import useSlideX from '@/hooks/useSlideX';
import useSlideY from '@/hooks/useSlideY';
import profilImg from 'public/img//about_me/profil.webp';
import biographieEn from 'public/img/about_me/about_me_en.webp';
import biographieFr from 'public/img/about_me/about_me_fr.webp';

export default function About() {
  const slideX = useSlideX();
  const slideY = useSlideY();
  const { lang } = useContext(Context);

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slideY(h1Ref.current, -100, 0.1);
    slideX(imgRef.current, -1000, 0, 0.4);
    slideX(divRef.current, 1000, 0, 0.4);
  }, [slideX, slideY]);

  return (
    <div className='container' id='about'>
      <h1 className='title' ref={h1Ref}>
        {dataTitle[lang]['about']}
      </h1>

      <div className='container-about'>
        <div className='profil-img'>
          <Image src={profilImg} alt='Bitmoji Snapchat' ref={imgRef} priority />
        </div>

        <div className='biographie' ref={divRef}>
          <Image
            src={lang === 'FR' ? biographieFr : biographieEn}
            alt="Capture d'écran me décrivant"
          />
        </div>
      </div>
    </div>
  );
}
