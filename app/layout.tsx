import { PropsWithChildren } from 'react';
import '/styles/index.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fr'>
      <head />
      <body>{children}</body>
    </html>
  );
}
