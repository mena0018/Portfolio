import { AboutSection } from '@/app/(about)/about-section';
import { SkillsSection } from '@/app/(skills)/skills-section';
import { ContactSection } from '@/app/(contact)/contact-section';
import { ProjectSection } from '@/app/(projects)/projects-section';

export default function Home() {
  return (
    <div className='w-full max-w-container mx-auto'>
      <div className='w-full h-full flex flex-col gap-5 md:gap-6'>
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
