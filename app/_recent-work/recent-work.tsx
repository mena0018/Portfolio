import ivsLogo from '@/public/images/company/ivs-company.jpeg';
import erevoLogo from '@/public/images/company/erevo-logo.jpeg';
import ideineLogo from '@/public/images/company/ideine-logo.jpeg';
import frontEndMentorLogo from '@/public/images/company/frontend-mentor-logo.png';
import { WorkItem } from '@/app/_recent-work/work-item';

export const RecentWork = () => {
  return (
    <div className='h-full flex flex-col gap-10 md:gap-16  md:px-5 md:py-14 justify-center'>
      <h2 className='font-medium text-primary flex items-center gap-2 text-lg md:text-xl'>
        <div className='w-2 h-2 bg-primary rounded-full' />
        <span>Recent Work</span>
      </h2>

      <ul className='flex flex-col gap-5 md:gap-9'>
        <WorkItem
          date='Sept 2023 - Present'
          company='IDÉINE'
          logo={ideineLogo.src}
        />
        <WorkItem
          date='March 2023 - July 2023'
          company='EREVO'
          logo={erevoLogo.src}
        />
        <WorkItem
          date='June 2022 - Sept 2023'
          company='IVS'
          logo={ivsLogo.src}
        />
        <WorkItem
          date='Sept 2020 - June 2022'
          company='FEM'
          logo={frontEndMentorLogo.src}
        />
      </ul>
    </div>
  );
};
