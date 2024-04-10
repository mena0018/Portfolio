import { Badge } from '@/components/ui/badge';
import { AvailableIcon } from '@/icons/AvailableIcon';

export const AvailableBadge = () => {
  return (
    <Badge
      variant='outline'
      className='shimmer-btn w-fit text-xs uppercase px-3 py-1 rounded-lg'
    >
      <AvailableIcon className='mr-2' />
      Available for job
    </Badge>
  );
};
