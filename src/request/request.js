// request: 采用axios
import axios from 'axios'

export function getRequest (config, success, failure) {
  // get请求实例
  const getInstance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
  // get请求-请求拦截器--拦截请求错误
  getInstance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
    console.log(failure)
  })
  // get请求-响应拦截器--拦截响应错误
  getInstance.interceptors.response.use(result => {
    return result.data
  }, error => {
    console.log(error)
    console.log(failure)
  })
  // 发送真正的网络请求
  console.log(success)
  return getInstance(config)
}
