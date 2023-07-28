import { request } from '@/utils/uniReq'

/**
 * @description 授权登录
 * @param {*} data
 */
export function wxLogin() {
  return request({
    url: '/api/getRoleById'
  })
}

/**
 * @description 获取手机号
 * @param {*} data
 */
export function getPhoneNumber(data) {
  return request({
    url: '/wx/getPhoneNumber',
    method: 'POST'
  })
}
