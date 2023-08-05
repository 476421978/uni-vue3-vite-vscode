import { userLogin } from '@/api/user'
import { useUserStore } from '@p/user.js'
import { useRouter } from '@u/common.js'
import { setStorage, getStorage, removeStorage } from '@u/storage'

// 跳转首页
export const UtiLoginPages = () => {
  useRouter('/pages/home/index', {}, 'reLaunch')
}

// 登录-保存用户信息-跳转页面
export const UtiLogin = async (params) => {
  const res = await userLogin(params)

  const user = useUserStore()
  user.setUserInfo(res)
  setStorage({
    name: 'userInfo',
    content: res
  })
  UtiLoginPages()
}

// 退出-清除用户信息-跳转登录页
export const UtiLoginOut = async () => {
  const user = useUserStore()
  user.setUserInfo(null)
  removeStorage('userInfo')
  UtiLoginPages()
}

// 获取token  两种数据缓存混合使用 pinia优先
export const GetToken = function () {
  const userStore = useUserStore()
  const isEmpty = JSON.stringify(userStore.userInfo) === '{}'
  const userInfo = isEmpty ? userStore.userInfo : getStorage('userInfo')
  return userInfo?.token
}
