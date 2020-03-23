/* eslint-disable no-unused-vars */
export const enum HTTP_STATUS {
  SUCCESS = 200,
  CLIENT_ERROR = 400,
  AUTHENTICATE = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504
}

export const enum PROMISE_STATUS {
  success = 'success',
  fail = 'fail',
  complete = 'complete'
}