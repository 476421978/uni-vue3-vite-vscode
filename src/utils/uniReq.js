import { Toast } from './common'
import { netConfig } from '../config/request.config'
const { baseURL, contentType, requestTimeout } = netConfig

// code 详情
const codeStatus = function (code, errorText) {
  let errInfo = '网络连接失败，请稍后重试'
  switch (code) {
    case 403:
      errInfo = '无权限请求'
      break
    case 404:
      errInfo = '找不到页面'
      break
    case 412:
      errInfo = '请求头出错'
      break
    case 500:
      errInfo = '服务器请求出错'
      break
    // case 808:
    //   errInfo = '请重新登录'
    //   break
    default:
      break
  }

  if (errorText && typeof errorText === 'string') errInfo = errorText

  // 返回错误信息
  return errInfo
}

function request({ url, method = 'GET', data = {}, header = { 'content-type': contentType }, loading = { visible: true, title: 'loading' } }) {
  return new Promise((resolve, reject) => {
    loading.visible && uni.showLoading({ title: loading.title })
    return uni.request({
      url: baseURL + url,
      method,
      timeout: requestTimeout,
      header,
      data,
      success: (res) => {
        uni.hideLoading()
        const { code, msg, data, message } = res.data

        if (res.statusCode !== 200 || message !== 'ok') {
          const ToastTxt = codeStatus(code, msg)
          Toast(ToastTxt)
          reject(new Error(ToastTxt))
        }

        if (message === 'ok') {
          resolve(data)
        }
      },
      fail: (err) => {
        loading.visible && uni.hideLoading()
        Toast(err)
        reject(err)
      }
    })
  })
}

export { request }
