import Script from 'next/script';

export default function Head() {
  return (
    <>
      <link rel='icon' href='/favicon.png' />
      <link rel='preconnect' href='https://github.com/mena0018' />
      <link rel='preconnect' href='https://www.linkedin.com/in/rabie-menad/' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='google-site-verification' content='YIuXWESaiIxevrq2WDlHlq6m3uKOzsfMS-Nn_sq_YJA' />
      <meta name='theme-color' content='#000000' />
      <title>Rabie Menad • Développeur</title>
      <meta
        name='description'
        content='Salut, je suis Rabie Menad, développeur web full stack en alternance travaillant essentiellement avec React.js / TypeScript pour le côté front-end et Symfony / API Platform pour le côté back-end.'
      />
      <link rel='apple-touch-icon' href='/favicon.png' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://portfolio-rabie.web.app/' />
      <meta property='og:title' content='Rabie Menad • Développeur' />
      <meta
        property='og:description'
        content='Salut, je suis Rabie Menad, développeur web full stack en alternance travaillant essentiellement avec React.js / TypeScript pour le côté front-end et Symfony / API Platform pour le côté back-end.'
      />
      <meta property='twitter:url' content='https://portfolio-rabie.web.app/' />
      <meta property='twitter:title' content='Rabie Menad • Développeur' />
      <meta
        property='twitter:description'
        content='Salut, je suis Rabie Menad, développeur web full stack en alternance travaillant essentiellement avec React.js / TypeScript pour le côté front-end et Symfony / API Platform pour le côté back-end.'
      />
      <meta data-react-helmet='true' property='og:type' content='website' />
      <meta data-react-helmet='true' property='twitter:image' content='https://ibb.co/pn2zRQJ' />
      <meta property='og:image' content='https://ibb.co/pn2zRQJ' />

      {/* Global site tag (gtag.js) - Google Analytics  */}
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-9N6H1C7S06'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-9N6H1C7S06');
          `,
        }}
      />
    </>
  );
}
