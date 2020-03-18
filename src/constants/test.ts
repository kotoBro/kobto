import http from '../server/http'

// eslint-disable-next-line import/prefer-default-export
export const getData = () => {
  http.get('http://localhost:8899/user/info', { a: 1 })
}