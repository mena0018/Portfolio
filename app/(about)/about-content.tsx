'use client';

import avatar from '@/public/images/avatar.webp';
import { toast } from 'sonner';
import { useState } from 'react';
import { Code } from '@/components/code';
import { PlusIcon } from '@/icons/PlusIcon';
import { CheckIcon } from '@/icons/CheckIcon';
import { GithubIcon } from '@/icons/GithubIcon';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { DuplicateIcon } from '@/icons/DuplicateIcon';
import { ApplicationIcon } from '@/icons/ApplicationIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AboutContent = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text = 'rabie.menad07@gmail.com') => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        toast.success('Copied to clipboard');
      })
      .catch(() => {
        toast.error('Error copying to clipboard');
      });
  };

  return (
    <div className='flex gap-10 flex-col md:flex-row-reverse md:justify-between'>
      <Avatar>
        <AvatarImage src={avatar.src} alt='Bordered avatar' />
        <AvatarFallback>
          <Skeleton className='h-16 w-16 rounded-full' />
        </AvatarFallback>
      </Avatar>

      <div className='flex flex-col gap-3 md:gap-7 max-w-72'>
        <h1 className='text-3xl font-semibold'>I'm Rabie Menad</h1>
        <p className='text-secondary'>
          I create
          <Code href='https://github.com/mena0018'>
            <ApplicationIcon size={14} />
            applications
          </Code>
          and like to post my creations on
          <Code href='https://github.com/mena0018'>
            <GithubIcon size={14} /> GitHub.
          </Code>
        </p>
        <div className='flex gap-2'>
          <a
            download
            target='_blank'
            href='assets/cv.pdf'
            rel='noopener noreferrer'
            className='flex gap-[2px]'
          >
            <Button
              variant='none'
              aria-label='cta-btn'
              className='animate-accordion-down rounded-none rounded-tl-sm rounded-bl-sm p-2 blue-gradient-cta'
            >
              Hire Me
            </Button>
            <Button
              variant='none'
              aria-label='cta-btn'
              className='rounded-none rounded-tr-sm rounded-br-sm px-1 blue-gradient-cta'
            >
              <PlusIcon />
            </Button>
          </a>

          <div className='flex gap-[2px]' onClick={() => copyToClipboard()}>
            <Button
              variant='none'
              className='rounded-none rounded-tl-sm rounded-bl-sm p-2 shimmer-btn'
            >
              Copy Email
            </Button>
            <Button
              variant='none'
              aria-label='cta-btn'
              className='rounded-none rounded-tr-sm rounded-br-sm px-1 shimmer-btn'
            >
              {isCopied ? <CheckIcon /> : <DuplicateIcon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
