import { IconProps } from '@/icons/GithubIcon';

export const DuplicateIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 22}
      height={size || 22}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.25 3h-12a.75.75 0 0 0-.75.75V7.5H3.75a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75V16.5h3.75a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75M15 19.5H4.5V9H15zm4.5-4.5h-3V8.25a.75.75 0 0 0-.75-.75H9v-3h10.5z'
        fill={color || '#fff'}
      />
    </svg>
  );
};
