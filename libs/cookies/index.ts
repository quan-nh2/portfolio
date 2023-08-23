import { GetServerSidePropsContext } from 'next';

import JwtDecode from 'jwt-decode';

import {
  getCookie,
  setCookies,
  checkCookies,
  removeCookies,
} from 'cookies-next';

type GetAuthResponse = {
  phone?: string;
  token?: string;
  isAuth: boolean;
  id?: number | null;
};

export const TOKEN_NAMESPACE = 'token';

export const cleanAuth = () => {
  return removeCookies(TOKEN_NAMESPACE);
};

export const getAuth = (): GetAuthResponse => {
  const init = { isAuth: false };

  const token = getCookie(TOKEN_NAMESPACE) as string;
  if (!token) {
    return init;
  }

  try {
    const { id, phone } = JwtDecode(token) as {
      id: number;
      phone: string;
    };

    return { id, phone, isAuth: true, token };
  } catch (ex) {
    return init;
  }
};

export const getAuthServer = ({
  req,
  res,
}: GetServerSidePropsContext): GetAuthResponse => {
  const init = { isAuth: false, token: '', id: null };

  const token = getCookie(TOKEN_NAMESPACE, { req, res }) as string;
  if (!token) {
    return init;
  }

  try {
    const { id, phone } = JwtDecode(token) as {
      id: number;
      phone: string;
    };

    return { id, phone, isAuth: true, token };
  } catch (ex) {
    return init;
  }
};

export const initAuth = (token: string): boolean => {
  try {
    const { exp } = JwtDecode(token) as { exp: number };
    setCookies(TOKEN_NAMESPACE, token, { expires: new Date(exp * 1000) });
    return true;
  } catch (_) {
    return false;
  }
};

export { getCookie, setCookies, checkCookies, removeCookies };
