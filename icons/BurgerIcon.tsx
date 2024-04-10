import { IconProps } from '@/icons/GithubIcon';

export const BurgerIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 17}
      height={size || 12}
      viewBox='0 0 17 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M.153 1a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1'
        fill={color || '#fff'}
      />
    </svg>
  );
};
