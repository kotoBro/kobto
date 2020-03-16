interface axiosConfig {
  path: string;
  data: object;
  header: object;
  method: string;
}

export class axiosHttp {
  [key: string]: any,
  baseUrl: string = ''
  dataType: string = 'json'
  doAxios(path: string, data = {}, method: string = 'GET', isAuth: boolean = false) {
    let token: string = Taro.getStorageSync('token')
    let header: object = isAuth
      ? { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }
      : { 'Content-Type': 'application/json' }
    return this.taroRequest({ path, data, method, header })
  }
  async taroRequest(config: axiosConfig) {
    let { path, data, header, method } = config
    return Taro.request({
      url: this.baseUrl + path,
      data,
      header,
      method,
      success: async res => {
        console.log(res.data)
      },
      fail: async err => {
        console.log(err)
      }
    })
  }
}

