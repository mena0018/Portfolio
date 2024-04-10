import './globals.css';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { baseMetadata } from '@/app/metadata';
import { Header } from '@/app/(navbar)/header';
import { ThemeProvider } from '@/app/(theme)/theme-provider';

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
          'h-full font-sans',
        )}
      >
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <main className='px-4'>
            <Toaster position='top-center' duration={1500} />
            <Header />
            <div className='h-20' />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
