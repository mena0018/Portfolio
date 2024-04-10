import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://rabiemenad.fr'),
  robots: { index: true, follow: true },
  manifest: '/metadata/site.webmanifest',
  applicationName: 'Rabie Menad',
  title: 'Rabie Menad • Website',
  alternates: { canonical: 'https://rabie-menad.vercel.app' },
  authors: [{ name: 'Rabie Menad', url: 'https://rabiemenad.fr' }],
  keywords: ['Rabie Menad', 'Menad Rabie', 'Rabie', 'Menad', 'Développeur'],
  verification: { google: 'YIuXWESaiIxevrq2WDlHlq6m3uKOzsfMS-Nn_sq_YJA' },
  description:
    "Hi, I'm Rabie Menad, a web developer specializing in front-end development with React.js, Next.js and Typescript.",

  openGraph: {
    type: 'website',
    title: 'Rabie Menad • Links',
    siteName: 'Rabie Menad • Links',
    url: 'https://rabiemenad.fr',
    images: [{ url: 'https://ibb.co/pn2zRQJ', width: 1200, height: 650 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veille_teck',
    creator: '@veille_teck',
    images: { url: 'https://ibb.co/pn2zRQJ', width: 1200, height: 650 },
  },
  icons: [
    {
      rel: 'metadata/apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/metadata/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/metadata/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/metadata/favicon-16x16.png',
    },
  ],
};
