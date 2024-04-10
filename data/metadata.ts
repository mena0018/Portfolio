import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://rabiemenad.fr'),
  robots: { index: true, follow: true },
  applicationName: 'Rabie Menad',
  title: 'Rabie Menad • Développeur',
  alternates: { canonical: 'https://rabie-menad.vercel.app' },
  authors: [{ name: 'Rabie Menad', url: 'https://rabiemenad.fr' }],
  keywords: ['Rabie Menad', 'Rabie', 'Menad', 'Développeur'],
  verification: { google: 'YIuXWESaiIxevrq2WDlHlq6m3uKOzsfMS-Nn_sq_YJA' },
  description:
    'Salut, je suis Rabie Menad, développeur web spécialisé dans le développement Front End notamment avec React.js, Next.js et Typescript.',

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
