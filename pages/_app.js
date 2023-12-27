import React from 'react';
import '../styles/global.css';
import { Sevillana } from '@next/font/google';

const Sevillana = Sevillana({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={Sevillana.className}>
      <Component {...pageProps} />
    </main>
  );
}

// function Application({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default Application;
