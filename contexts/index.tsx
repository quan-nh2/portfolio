import React, { ReactNode } from 'react';

import { Toaster } from 'react-hot-toast';

import QueryProvider from '@/contexts/query';

type AppProviderProps = {
  pageProps: any;
  children: ReactNode;
};

const AppProvider = ({ children, pageProps }: AppProviderProps) => {
  return (
    <QueryProvider pageProps={pageProps}>
      {children}
      <Toaster position='top-center' />
    </QueryProvider>
  );
};

export default AppProvider;
