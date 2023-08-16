import './index.css';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://rabiemenad.fr'),
  themeColor: '#000000',
  robots: { index: true, follow: true },
  manifest: '/site.webmanifest',
  applicationName: 'Rabie Menad',
  title: 'Rabie Menad • Développeur',
  alternates: { canonical: 'https://rabie-menad.vercel.app' },
  authors: [{ name: 'Rabie Menad', url: 'https://rabiemenad.fr' }],
  keywords: ['Rabie Menad', 'portfolio', 'développeur', 'react', 'front'],
  verification: { google: 'YIuXWESaiIxevrq2WDlHlq6m3uKOzsfMS-Nn_sq_YJA' },
  description:
    'Salut, je suis Rabie Menad, développeur web spécialisé dans le développement Front End notamment avec React.js, Next.js et Typescript.',
  icons: [
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      type: 'image/png',
      sizes: '16x16',
      color: '#5bbad5',
      url: '/safari-pinned-tab.svg',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Rabie Menad • Links',
    siteName: 'Rabie Menad • Links',
    url: 'https://rabiemenad.fr',
    images: [{ url: '/public/img/icones/logo/logo3.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veille_teck',
    creator: '@veille_teck',
    images: 'https://ibb.co/pn2zRQJ',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fr'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
