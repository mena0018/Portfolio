import { Section } from '@/components/section';
import { AboutHeader } from '@/app/_about/about-header';
import { AboutContent } from '@/app/_about/about-content';

export const AboutSection = () => {
  return (
    <Section id='about' className='flex flex-col gap-8 md:mt-4 relative'>
      <div className='gradient' />

      <div className='flex flex-col gap-10'>
        <AboutHeader />
        <AboutContent />
      </div>
    </Section>
  );
};
