import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 定义接口请求参数和响应数据的类型
interface HttpData<T = any> {
  code: number;
  message: string;
  data: T;
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL:"https://v.api.aa1.cn",
  timeout: 1000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在请求发送之前做些什么
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 200) {
      // 处理错误
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      // 处理成功
      return res;
    }
  },
  (error: any) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  },
);

export default service;
const httpGET = <T>(url: string, config?: AxiosRequestConfig) => HttpData<T>('GET', url, config);

const httpPOST = <T>(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) => HttpData<T>('POST', url, {data, ...config});

const httpDELETE = <T>(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) => HttpData<T>('DELETE', url, {params: data, ...config});

const httpPUT = <T>(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) => HttpData<T>('PUT', url, {data, ...config});

export {httpGET, httpPOST, httpDELETE, httpPUT, HttpData};
