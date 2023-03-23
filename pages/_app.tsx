import React from 'react';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import AppProvider from '@/contexts';
import MainLayout from '@/layouts/main';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider pageProps={pageProps}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  );
}
