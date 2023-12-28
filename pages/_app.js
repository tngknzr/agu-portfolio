import React from 'react';
import '../styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

// function Application({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default Application;
