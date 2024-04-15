import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/public/images/avatar.webp';
import { Section } from '@/components/section';
import { AvailableBadge } from '@/components/available-badge';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export const ContactSection = () => {
  return (
    <Section id='contact' className='relative overflow-hidden mb-6'>
      <div className='gradient' />

      <div className='flex flex-col justify-center items-center gap-6 py-6 px-10 md:flex-row-reverse md:justify-between'>
        <AvailableBadge />
        <div className='flex gap-6 font-medium text-md'>
          <Link
            className='hover:-translate-y-1 transition duration-400'
            href='https://twitter.com/veille_teck'
          >
            Twitter
          </Link>
          <Link
            className='text-primary hover:-translate-y-1 transition duration-400'
            href='https://www.malt.fr/profile/rabiemenad'
          >
            Malt
          </Link>
          <Link
            className='hover:-translate-y-1 transition duration-400'
            href='https://www.linkedin.com/in/rabie-menad'
          >
            Linkedin
          </Link>
        </div>

        <HoverBorderGradient
          as='button'
          className='flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-background to-slate-900 border-2 border-accent px-3 py-2 font-bold transition-all hover:brightness-110'
        >
          <Image src={avatar} alt='avatar' className='size-12 rounded-full' />
          <div className='flex gap-1 items-center'>
            <p className='font-medium'>Made by</p>
            <p className='font-semibold text-primary'>Rabie</p>
          </div>
        </HoverBorderGradient>
      </div>
    </Section>
  );
};
