
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// // 定义接口请求参数和响应数据的类型
// interface HttpData<T = any> {
//   code: number;
//   message: string;
//   data: T;


const service: AxiosInstance = axios.create({
  baseURL:'https://api.pearktrue.cn',
  timeout: 5000,
  // 设置headers
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset:UTF-8"
  }
});
// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any): Promise<any> => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: any): Promise<any> => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  },
);
export default service; // 将 service 实例设置为默认导出

