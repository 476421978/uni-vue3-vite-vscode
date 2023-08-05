import { request } from '@/utils/uniReq'

/**
 * @description 微信登录 个人没权限
 */
export function wechatLogin(data) {
  return request({
    url: '/api/wechat/login',
    method: 'GET',
    data
  })
}
