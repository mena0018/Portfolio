import { AvailableBadge } from '@/components/available-badge';

export const AboutHeader = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row-reverse md:justify-between'>
      <AvailableBadge />
      <h2 className='text-xl text-secondary'>FrontEnd Developer</h2>
    </div>
  );
};
