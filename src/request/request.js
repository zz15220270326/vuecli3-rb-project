// ! request: 采用axios
import axios from 'axios'

const baseURL = '/api'

// ? GET请求
export function getRequest(config) {
  // get请求实例
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  })
  // get请求-请求拦截器--拦截请求错误
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })
  // get请求-响应拦截器--拦截响应错误
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    return Promise.reject(error)
  })
  // 发送真正的网络请求
  // console.log(failure)
  // console.log(success)
  return instance(config)
}

export function postRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + url, data)
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function putRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(baseURL + url, data)
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function deleteRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(baseURL + url, params)
      .then(result => resolve(result.data))
      .catch(error => reject(error))
  })
}
