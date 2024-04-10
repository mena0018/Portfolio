import { AboutSection } from '@/app/(about)/about-section';
import { SkillsSection } from '@/app/(skills)/skills-section';
import { FooterSection } from '@/app/(footer)/footer-section';
import { ProjectSection } from '@/app/(projects)/projects-section';

export default function Home() {
  return (
    <div className='w-full max-w-container mx-auto'>
      <div className='w-full h-full flex flex-col gap-5 md:gap-6'>
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <FooterSection />
      </div>
    </div>
  );
}
