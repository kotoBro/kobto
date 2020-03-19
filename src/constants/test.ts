import http from '../server/http'

// eslint-disable-next-line import/prefer-default-export
export const getData = async () => {
  return await http.get('/store/getStoreList', { a: 1 })
}