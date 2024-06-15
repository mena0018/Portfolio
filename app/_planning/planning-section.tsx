import { Section } from '@/components/section';
import { SparklesText } from '@/components/ui/text-sparkles';
import { PlanningEmbed } from '@/app/_planning/planning-embed';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export const PlanningSection = () => {
  return (
    <Section id='planning' className='relative overflow-hidden'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-1 md:flex-row items-center justify-center'>
          <TextGenerateEffect words="Want to Dive Deeper ? Let's Schedule a" />
          <SparklesText text='Call !' />
        </div>
        <PlanningEmbed />
      </div>
    </Section>
  );
};
