import { IconProps } from '@/icons/GithubIcon';

export const AvailableIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 12}
      height={size || 12}
      viewBox='0 0 8 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='3.653' cy='3.5' r='3.5' fill={color || '#008020'} />
    </svg>
  );
};
