import { IconProps } from '@/icons/GithubIcon';

export const CheckIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={size || 22}
      height={size || 22}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-check'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
};
