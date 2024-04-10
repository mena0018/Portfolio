import Link from 'next/link';
import { CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/app/(projects)/projects.data';

export const ProjectItem = ({ link, title, description }: Project) => {
  return (
    <CarouselItem className='pl-4 basis-full sm:basis-1/2'>
      <Card className='group relative h-full min-h-44'>
        <Link href={link}>
          <CardContent className='p-0 h-full select-none'>
            <div className='flex flex-col gap-1 p-6 h-full rounded-lg'>
              <span className='text-lg md:text-2xl font-semibold'>{title}</span>
              <span className='text-sm text-secondary'>{description}</span>
            </div>
          </CardContent>
        </Link>
      </Card>
    </CarouselItem>
  );
};
