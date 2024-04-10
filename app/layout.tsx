import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { baseMetadata } from '@/data/metadata';
import { ThemeProvider } from '@/lib/ThemeProvider';

export const metadata: Metadata = baseMetadata;
const rubik = Rubik({ subsets: ['latin'], variable: '--font-caption' });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang='en' className='h-full'>
      <body
        suppressHydrationWarning
        className={cn(
          rubik.variable,
          GeistSans.variable,
          GeistMono.variable,
          'font-sans h-full',
        )}
      >
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
