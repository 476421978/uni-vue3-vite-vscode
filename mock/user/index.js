import { baseData } from '../base'

const login = {
  url: '/api/user/login',
  method: 'post',
  response: ({ body }) => {
    return baseData
  }
}

const userInfo = {
  url: '/api/user/userInfo',
  method: 'get',
  response: ({ query }) => {
    return baseData
  }
}

export default [login, userInfo]
