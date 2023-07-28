import { request } from '@/utils/uniReq'

/**
 * @description 用户登录
 */
export function userLogin() {
  return request({
    url: '/api/user/login'
  })
}

/**
 * @description 获取用户信息
 */
export function userInfo() {
  return request({
    url: '/api/user/userInfo'
  })
}
