import React, { ReactNode } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';

type QueryProviderProps = {
  pageProps: any;
  children: ReactNode;
};

const queryClient = new QueryClient();

const QueryProvider = ({ children, pageProps }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
};

export default QueryProvider;
