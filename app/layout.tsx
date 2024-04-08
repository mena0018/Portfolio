import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-caption' });

export const metadata: Metadata = {
  title: 'Rabie Menad',
  description: 'New portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          rubik.variable,
          GeistSans.variable,
          'font-sans h-full bg-background text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
