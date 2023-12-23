import '@styles/globals.css'
import React from 'react';
import RootLayout from '@layouts/RootLayout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';



function Application({ Component, pageProps }) {
  return(
    <RootLayout>
      <Component {...pageProps} />

    </RootLayout>

  ) 
}

export default Application
