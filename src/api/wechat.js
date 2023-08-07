import { request } from '@/utils/uniReq'

/**
 * @description 微信登录 个人没权限
 */
export function wechatMobile(data) {
  return request({
    url: '/api/wechat/mobile',
    method: 'GET',
    data
  })
}

/**
 * @description 微信用户信息
 */
export function wechatInfo(data) {
  return request({
    url: '/api/wechat/info',
    method: 'GET',
    data
  })
}
