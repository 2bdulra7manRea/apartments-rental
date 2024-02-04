import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../helpers/auth";

const BASE_URL = process.env.REACT_APP_BACKEND_URL_API;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const addAuthHeader = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const httpPost = async <T>(
  url: string,
  data: T,
  config: AxiosRequestConfig<any> = {}
) => {
  if (!config?.headers) config.headers = {};

  config.headers["Content-Type"] = "application/json";
  return axiosInstance.post(url, JSON.stringify(data), config);
};

export const httpGet = async (
  url: string,
  config: AxiosRequestConfig<any> = {}
) => {
  return axiosInstance.get(url, config);
};

export const httpDelete = async <T>(
  url: string,
  config: AxiosRequestConfig<any> = {}
) => {
  if (!config?.headers) config.headers = {};

  config.headers["Content-Type"] = "application/json";
  return axiosInstance.delete(url, config);
};

export const httpPatch = async <T>(
  url: string,
  data: T,
  config: AxiosRequestConfig<any> = {}
) => {
  if (!config?.headers) config.headers = {};

  config.headers["Content-Type"] = "application/json";
  return axiosInstance.patch(url, JSON.stringify(data), config);
};
