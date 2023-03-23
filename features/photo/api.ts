import { useQuery } from 'react-query';
import axios from '@/libs/axios';

import { QueryKey } from '@/layouts/shared';

declare const process: {
  env: {
    NEXT_PUBLIC_UNSPLASH_API_BASE_URL: string;
    NEXT_PUBLIC_UNSPLASH_CLIENT_ID: string;
  };
};

export const fetchPhotos = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_UNSPLASH_API_BASE_URL}/photos`, {
    params: { client_id: process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID },
  });
};

export const useFetchPhotos = () => {
  return useQuery(QueryKey.ImageList, async () => await fetchPhotos());
};
