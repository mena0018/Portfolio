import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Project, ProjectTitle } from '@/app/_projects/projects.data';

export const ProjectItem = ({ link, title, description, imgUrl }: Project) => {
  return (
    <CarouselItem className='pl-4 basis-full sm:basis-1/2'>
      <Card className='group relative h-full min-h-44'>
        <Link href={link} target='_blank'>
          <CardContent className='p-0 h-full select-none'>
            <div className='absolute inset-0 rounded-lg'>
              <img
                src={imgUrl}
                alt='project preview'
                className='rounded-lg w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-1 p-6 h-full rounded-lg backdrop-blur-xl transition-opacity group-hover:opacity-0 duration-500'>
              <span
                className={cn('text-lg md:text-2xl font-semibold', {
                  'text-background': title === ProjectTitle.URLShortening,
                })}
              >
                {title}
              </span>
              <span
                className={cn('text-sm text-secondary', {
                  'text-accent': title === ProjectTitle.URLShortening,
                  'text-foreground/85': title === ProjectTitle.FilterSystem,
                })}
              >
                {description}
              </span>
            </div>
          </CardContent>
        </Link>
      </Card>
    </CarouselItem>
  );
};
