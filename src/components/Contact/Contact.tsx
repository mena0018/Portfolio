'use client';

import './Contact.css';
import { useContext } from 'react';
import { Context } from '@/context/langContext';
import { dataContact } from '@/constants/contact';
import { motion } from 'framer-motion';
import ContactItem from './ContactItem';
import Wrapper from '../Wrapper/Wrapper';
import { TypingText } from '../TypingText/TypingText';
import { slideIn } from '../../utils/motion';

export default function Contact() {
  const { lang } = useContext(Context);

  const dataToMap: any = dataContact[lang];

  return (
    <section className='container' id='contact'>
      <Wrapper>
        <TypingText title='Contact' />

        <div className='list-contact'>
          {dataToMap
            .filter((item: any) => typeof item === 'object')
            .map((item: any, index: number) => (
              <motion.div
                key={index}
                className='contact-item'
                whileHover={{ scale: 1.1, rotate: index === 1 ? -5 : 5 }}
                variants={slideIn('left', 'tween', 0.3 * index, 1)}
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
      </Wrapper>
    </section>
  );
}
