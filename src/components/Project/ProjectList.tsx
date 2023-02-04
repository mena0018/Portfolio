'use client';

import './Project.css';
import { useContext } from 'react';
import { Context } from '@/context/langContext';
import { dataProjects } from '@/constants/project';
import { dataTitle } from '@/constants/title';
import { ProjectType } from '@/types/project';
import ProjectItem from './ProjectItem';

import { TypingText } from '../TypingText/TypingText';
import Wrapper from '../Wrapper/Wrapper';

export default function ProjectList() {
  const { lang } = useContext(Context);

  return (
    <section className='container' id='realizations'>
      <Wrapper>
        <TypingText title={dataTitle[lang]['realizations']} />

        <div className='container-realizations'>
          {dataProjects[lang].map((item: ProjectType, index: number) => (
            <ProjectItem
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
              url={item.url}
              icons={item.icons}
              index={index}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
