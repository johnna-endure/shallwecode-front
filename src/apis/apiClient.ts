import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const BACKEND_URL = 'http://localhost:8080'
const defaultHeader = {
  'Content-Type': 'application/json',
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'
export const apiClient = async <D, R = any>(
  url: string,
  method: HttpMethod,
  data?: D,
  config?: AxiosRequestConfig<D>
) => {
  const configAddedDefault = {
    ...config,
    headers: defaultHeader,
    validateStatus: (status: number) => status < 400,
  }

  switch (method) {
    case 'get':
      return axios.get<R, AxiosResponse<R, D>, D>(
        `${BACKEND_URL}/${url}`,
        configAddedDefault
      )
    case 'post':
      return axios.post<R, AxiosResponse<R, D>, D>(
        url,
        data,
        configAddedDefault
      )
    case 'put':
      return axios.put<R, AxiosResponse<R, D>, D>(
        `${BACKEND_URL}/${url}`,
        data,
        configAddedDefault
      )
    case 'delete':
      return axios.delete<R, AxiosResponse<R, D>, D>(
        `${BACKEND_URL}/${url}`,
        configAddedDefault
      )
    case 'patch':
      return axios.patch<R, AxiosResponse<R, D>, D>(
        `${BACKEND_URL}/${url}`,
        data,
        configAddedDefault
      )
  }
}

// error 인터셉터 추가
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('error : ', error)
  }
)
