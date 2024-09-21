import { AvailableBadge } from '@/components/available-badge';
import { LetterPullUp } from '@/components/letter-pullup';

export const AboutHeader = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row-reverse md:justify-between'>
      <AvailableBadge />
      <LetterPullUp words='FrontEnd Developer' />
    </div>
  );
};
