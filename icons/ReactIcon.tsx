import { IconProps } from './GithubIcon';

export const ReactIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 24}
      height={size || 24}
      fill='none'
      viewBox='-10.5 -9.45 21 18.9'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle r='2' fill='#D4E8F7' />
      <g stroke='#D4E8F7'>
        <ellipse rx='10' ry='4.5' />
        <ellipse rx='10' ry='4.5' transform='rotate(60)' />
        <ellipse rx='10' ry='4.5' transform='rotate(120)' />
      </g>
    </svg>
  );
};
