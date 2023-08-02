/**
 * @description 自定义路由拦截
 */
import { Toast, useRouter } from '@u/common.js'
import { GetToken } from '@u/login'
// 白名单
const whiteList = [
  '/pages/login/index', // 注意入口页必须直接写 '/'
  { pattern: /^\/pages\/login.*/ } // 支持正则表达式
]

export default async function () {
  const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
  // 添加拦截器
  list.forEach((item) => {
    uni.addInterceptor(item, {
      invoke(e) {
        // 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        const url = e.url.split('?')[0]
        // 判断当前窗口是白名单，如果是则不重定向路由
        let pass
        if (whiteList) {
          pass = whiteList.some((item) => {
            if (typeof item === 'object' && item.pattern) {
              return item.pattern.test(url)
            }
            return url === item
          })
        }
        const token = GetToken()
        // 不是白名单并且没有token
        if (!pass && !token) {
          Toast('请先登录')
          useRouter('/pages/login/index')
          return false
        }
        return e
      },
      fail(err) {
        // 失败回调拦截
        console.log(err)
      }
    })
  })
}
