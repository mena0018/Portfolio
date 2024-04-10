import { IconProps } from '@/icons/GithubIcon';

export const ApplicationIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 24}
      height={size || 24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-app-window'
    >
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <path d='M10 4v4M2 8h20M6 4v4' />
    </svg>
  );
};
