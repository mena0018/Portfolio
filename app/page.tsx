import { AboutSection } from '@/app/_about/about-section';
import { SkillsSection } from '@/app/_skills/skills-section';
import { ContactSection } from '@/app/_contact/contact-section';
import { ProjectSection } from '@/app/_projects/projects-section';

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
