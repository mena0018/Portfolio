import { Section } from '@/components/section';
import { projects } from '@/app/_projects/projects.data';
import { ProjectItem } from '@/app/_projects/project-item';
import {
  Carousel,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const ProjectSection = () => {
  return (
    <Section id='projects' className='mx-auto px-4 max-w-3xl w-full'>
      <Carousel className='max-w-3xl mx-12 md:mx-auto'>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};
