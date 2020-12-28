import Axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

import { ENV_CONFIG } from '../../common/env-config';

const fetch: AxiosInstance = Axios.create({
  baseURL: ENV_CONFIG.API_BASE_URL,
  timeout: 3 * 1000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  },
});

fetch.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log('--------------');
    console.log(config, 'request');
    console.log('--------------');
    // config.withCredentials = true;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('--------------');
    console.log(response, 'response');
    console.log('--------------');
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default fetch;
