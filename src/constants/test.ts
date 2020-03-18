import http from '../server/http'

// eslint-disable-next-line import/prefer-default-export
export const getData = async () => {
  let a = await http.get('/store/getStoreList', { a: 1 })
  console.log(a)
}