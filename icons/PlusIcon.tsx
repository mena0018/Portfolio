import { IconProps } from '@/icons/GithubIcon';

export const PlusIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 24}
      height={size || 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 12.999h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2'
        fill={color || '#fff'}
      />
    </svg>
  );
};
