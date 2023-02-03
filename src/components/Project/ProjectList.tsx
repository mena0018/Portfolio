'use client';

import './Project.css';
import { useEffect, useContext, useRef } from 'react';
import { Context } from '@/context/langContext';
import { dataProjects } from '@/constants/project';
import { dataTitle } from '@/constants/title';
import { ProjectType } from '@/types/project';
import ProjectItem from './ProjectItem';
import useSlideX from '@/hooks/useSlideX';
import useSlideY from '@/hooks/useSlideY';
import useAddRef from '@/hooks/useAddRef';

export default function ProjectList() {
  const { lang } = useContext(Context);
  const slideX = useSlideX();
  const slideY = useSlideY();

  const { ref, addToRef } = useAddRef<HTMLDivElement>();
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    slideY(h1Ref.current);
    slideX(ref.current[0]);
    slideX(ref.current[1], 1000);
    slideX(ref.current[2]);
    slideX(ref.current[3], 1000);
  }, [slideX, slideY, ref]);

  return (
    <div className='container' id='realizations'>
      <h1 className='title' ref={h1Ref}>
        {dataTitle[lang]['realizations']}
      </h1>

      <div className='container-realizations'>
        {dataProjects[lang].map((item: ProjectType, index: number) => (
          <div ref={addToRef} key={index}>
            <ProjectItem
              title={item.title}
              description={item.description}
              img={item.img}
              url={item.url}
              icons={item.icons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
