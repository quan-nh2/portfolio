import { useQuery, QueryObserverOptions } from 'react-query';
import axios, { AxiosResponse, AxiosErrorResponse } from '@/libs/axios';

import { QueryKey } from '@/layouts/shared';
import {
  WeatherInfoQueryParams,
  WeatherInfoQueryResponse,
} from '@/features/weather/constants';

export const fetchWeatherInfo = (params: any) => {
  return axios.get(`/api/v1/weather`, { params });
};

export const fetchRandomDog = () => {
  return axios.get('https://dog.ceo/api/breeds/image/random');
};

export const useFetchLiveVideosQuery = (
  params: WeatherInfoQueryParams,
  options?: QueryObserverOptions<
    AxiosResponse<WeatherInfoQueryResponse>,
    AxiosErrorResponse,
    WeatherInfoQueryResponse,
    AxiosResponse<WeatherInfoQueryResponse>,
    (string | WeatherInfoQueryParams)[]
  >
) => {
  return useQuery(
    [QueryKey.Weather, params],
    () => fetchWeatherInfo(params),
    options
  );
};

export const useFetchRandomDog = (initialData: any) => {
  return useQuery(
    QueryKey.Dog,
    async () => await fetchRandomDog(),
    initialData
  );
};
