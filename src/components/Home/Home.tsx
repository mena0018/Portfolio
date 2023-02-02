import './Home.css';
import { useEffect, useContext, useRef } from 'react';
import { Context } from '../../context/langContext';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { homeData } from '../../constants/home';
import { motion } from 'framer-motion';
import useAddRef from '../../hook/useAddRef';
import formSVG from 'public/img/blob.svg';
import useSlideX from '../../hook/useSlideX';
import useSlideY from '../../hook/useSlideY';
import Image from 'next/image';

export default function Home() {
  const slideX = useSlideX();
  const slideY = useSlideY();
  const { lang } = useContext(Context);

  const { ref, addToRef } = useAddRef<HTMLDivElement>();
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    slideY(ref.current[2]); // #home
    slideX(ctaRef.current, -1000, 0.1, 0.6); // btn-home
    slideX(ref.current[0], -1000, 0.4, 0.6); // link-social-media
    slideX(ref.current[1], -1000, 1, 0.6); // SVG FORM
  }, [slideX, ref, slideY]);

  return (
    <div className='Home' id='home' ref={addToRef}>
      <div className='container-presentation'>
        <div className='text-presentation'>
          <p> {homeData[lang]['first']}</p>
          <p>
            {homeData[lang]['second']}
            <span> Rabie,</span>
          </p>
          <p>{homeData[lang]['third']}</p>
        </div>
        <motion.a
          href='#contact'
          className='contact-cta'
          ref={ctaRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {homeData[lang]['btn']}
        </motion.a>
        <div className='link-social-media' ref={addToRef}>
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
        </div>
      </div>

      <div className='svg-form' ref={addToRef}>
        <Image src={formSVG} alt='animated blob' width={530} height={530} />
      </div>
    </div>
  );
}
