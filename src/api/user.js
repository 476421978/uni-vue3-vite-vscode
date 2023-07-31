import { request } from '@/utils/uniReq'

/**
 * @description 用户登录
 */
export function userLogin(data) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data
  })
}

/**
 * @description 获取用户信息
 */
export function userInfo() {
  return request({
    url: '/api/user/info'
  })
}
