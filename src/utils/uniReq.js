import { netConfig } from '../config/request.config'
const { baseURL, contentType, requestTimeout } = netConfig



function request({ url, method = 'GET', data = {}, header = { 'content-type': contentType } }) {
  return new Promise((resolve, reject) => {
    return uni.request({
      url: baseURL + url,
      method,
      timeout: requestTimeout,
      header,
      data,
      success: (res) => {
        console.log('success', res)
        resolve(res)
      },
      fail: (err) => {
        console.log('err---', err)
        reject(err)
      },
      complete: () => {}
    })
  })
}

export { request }
