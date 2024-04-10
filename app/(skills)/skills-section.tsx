'use client';

import { cn } from '@/lib/utils';
import { NextIcon } from '@/icons/NextIcon';
import { ReactIcon } from '@/icons/ReactIcon';
import { TypescriptIcon } from '@/icons/TypescriptIcon';
import { NextHeader } from '@/app/(skills)/next-header';
import { RecentWork } from '@/app/(skills)/recent-work';
import { ReactHeader } from '@/app/(skills)/react-header';
import { TypescriptHeader } from '@/app/(skills)/typescript-header';
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemProps,
} from '@/components/ui/bento-grid';

export const SkillsSection = () => {
  return (
    <section id='skills'>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            icon={item.icon}
            title={item.title}
            header={item.header}
            description={item.description}
            className={cn(item.className)}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const items: Array<BentoGridItemProps> = [
  {
    header: <RecentWork />,
    className: 'md:row-start-1 md:row-end-3 md:col-span-2',
  },
  {
    title: 'React',
    icon: <ReactIcon />,
    header: <ReactHeader />,
    description:
      'Adapted for creating scalable and user-friendly web applications.',
  },
  {
    title: 'Typescript',
    icon: <TypescriptIcon />,
    header: <TypescriptHeader />,
    description: "Since 2022, I've adopted TypeScript as my second language",
  },
  {
    icon: <NextIcon />,
    title: 'Next and tools',
    header: <NextHeader />,
    className: 'md:col-span-2',
    description:
      'Next.js, PostgreSQL and Docker for scalable and efficient web application development.',
  },
];
