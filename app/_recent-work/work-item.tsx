import { ComponentPropsWithoutRef } from 'react';

type WorkItemProps = ComponentPropsWithoutRef<'li'> & {
  date: string;
  logo: string;
  company: string;
  role?: string;
};

export const WorkItem = ({
  role = 'FrontEnd',
  date,
  logo,
  company,
}: WorkItemProps) => {
  return (
    <li className='w-full flex justify-between items-center'>
      <div className='flex flex-col md:gap-2'>
        <p className='text-primary font-medium md:text-lg'>{`${role} Developer`}</p>
        <p className='text-secondary text-sm'>{date}</p>
      </div>
      <div className='flex justify-start gap-3 items-center min-w-28'>
        <img
          src={logo}
          alt='company logo'
          className='w-9 h-9 aspect-square md:w-12 md:h-12 rounded-full ring'
        />
        <p className='text-secondary font-medium'>{company}</p>
      </div>
    </li>
  );
};
