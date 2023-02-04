'use client';

import './Skills.css';
import { useContext } from 'react';
import { Context } from '@/context/langContext';
import { dataSkills } from '@/constants/skills';
import { SkillType } from '@/types/index';
import { dataTitle } from '@/constants/title';
import { TypingText } from '../TypingText/TypingText';
import Skill from './Skill';
import Wrapper from '../Wrapper/Wrapper';

export default function Skills() {
  const { lang } = useContext(Context);

  return (
    <section className='container' id='skills'>
      <Wrapper>
        <TypingText title={dataTitle[lang]['skills']} />

        <div className='container-skills'>
          {dataSkills[lang].map((item: SkillType, index: number) => (
            <Skill name={item.name} stacks={item.stacks} key={index} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
