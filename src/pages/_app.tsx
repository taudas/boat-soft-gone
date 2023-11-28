import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

export const runtime = 'edge';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
