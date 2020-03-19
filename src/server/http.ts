import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../const/status'

/**
  *请求所需参数
  *@param { path } 接口路径
  *@param { data } 携带参数
  *@param { header } 请求头部参数
  *@param { method } 请求方式
*/
interface axiosConfig {
  path: string;
  data: object;
  header: object;
  method: string;
}

class axiosHttp {
  [key: string]: any,
  baseUrl: string = process.env.BASE_URL
  dataType: string = 'json'
  get(path: string, data = {}, isAuth: boolean = false, method: string = 'GET') {
    return this.doAxios(path, data, isAuth, method)
  }
  post(path: string, data = {}, isAuth: boolean = false, method: string = 'POST') {
    return this.doAxios(path, data, isAuth, method)
  }
  put(path: string, data = {}, isAuth: boolean = false, method: string = 'PUT') {
    return this.doAxios(path, data, isAuth, method)
  }
  delete(path: string, data = {}, isAuth: boolean = false, method: string = 'DELETE') {
    return this.doAxios(path, data, isAuth, method)
  }
  doAxios(path: string, data = {}, isAuth: boolean = false, method: string) {
    let token: string = Taro.getStorageSync('token')
    let header: object = isAuth
      ? { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }
      : { 'Content-Type': 'application/json' }
    return this.taroRequest({ path, data, method, header })
  }
  taroRequest(config: axiosConfig) {
    let { path, data, header, method } = config
    return new Promise((resolve, reject) => {
      Taro.request({
        url: this.baseUrl + path,
        data,
        header,
        method,
        success: res => {
          if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            return this.logError('api', '请求资源不存在')
          } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            return this.logError('api', '服务端出现了问题')
          } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            return this.logError('api', '没有权限访问')
          } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
            resolve(res.data)
          }
        },
        fail: err => {
          this.logError('api', '请求接口出现问题')
          reject(err)
        }
      })
    })
  }

  logError(name, action) {
    console.log(name)
    console.log(action)
  }
}

export default new axiosHttp()

