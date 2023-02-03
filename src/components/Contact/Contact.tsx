'use client';

import './Contact.css';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '@/context/langContext';
import { dataContact } from '@/constants/contact';
import { motion } from 'framer-motion';
import useSlideX from '@/hooks/useSlideX';
import useAddRef from '@/hooks/useAddRef';
import ContactItem from './ContactItem';

export default function Contact() {
  const slideX = useSlideX();
  const { lang } = useContext(Context);

  const dataToMap: any = dataContact[lang];

  const { ref, addToRef } = useAddRef<HTMLDivElement>();
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    slideX(h1Ref.current, -1500, 0.1, 0.5, 'top bottom');
    slideX(ref.current[0], -1500, 0.3, 0.5, 'top bottom');
    slideX(ref.current[1], -1500, 0.5, 0.5, 'top bottom');
    slideX(ref.current[2], -1500, 0.7, 0.5, 'top bottom');
  }, [slideX, h1Ref, ref]);

  return (
    <div className='container' id='contact'>
      <h1 className='title' ref={h1Ref}>
        Contact
      </h1>
      <div className='list-contact'>
        {dataToMap
          .filter((item: any) => typeof item === 'object')
          .map((item: any, index: number) => (
            <motion.div
              ref={addToRef}
              key={index}
              className='contact-item'
              whileHover={{ scale: 1.1, rotate: index === 1 ? -5 : 5 }}
            >
              <ContactItem
                icon={item.icon}
                name={item.name}
                info={item.info}
                link={item.link}
                contact={item.contact}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
