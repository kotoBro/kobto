import http from '../server/http'

export const getData = async () => {
  let a = await http.get('http://localhost:8899/user/info', { a: 1 })
  console.log(a)
  return a
}