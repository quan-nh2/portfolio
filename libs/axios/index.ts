import axios, { AxiosResponse } from 'axios';

import { PagePath } from '@/layouts';
import { getAuth, cleanAuth } from '@/libs/cookies';

type AxiosErrorResponse = {
  code: string;
  message: string;
};

const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.interceptors.request.use((config: any) => {
  const { isAuth, token } = getAuth();

  if (isAuth) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

instance.interceptors.response.use(
  ({ data }) => {
    const dataValue = data || {};

    if (dataValue.data) {
      return { ...dataValue };
    }

    return { data: dataValue };
  },
  ({ response }) => {
    const { data } = response || {};
    const { message } = data || {};
    if (data.code === 'TOKEN_INVALID') {
      cleanAuth();
      return (window.location.href = PagePath.LoginPage);
    }
    if (typeof window !== 'undefined' && data.status === 401) {
      cleanAuth();
      return (window.location.href = PagePath.LoginPage);
    }

    return Promise.reject({ message });
  }
);

const AxiosChatInstance = axios.create({
  baseURL: process.env.API_CHAT_URL,
});

AxiosChatInstance.interceptors.request.use((config: any) => {
  const { isAuth, token } = getAuth();

  if (isAuth) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

AxiosChatInstance.interceptors.response.use(
  ({ data }) => {
    const dataValue = data || {};
    if (dataValue.data) {
      return { ...dataValue };
    }
    return { data: dataValue };
  },
  ({ response }) => {
    const { data } = response || {};
    const { message } = data || {};

    return Promise.reject({ message });
  }
);

export { AxiosChatInstance };

export type { AxiosResponse, AxiosErrorResponse };

export default instance;
