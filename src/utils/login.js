import { userLogin } from '@/api/user'
import { useUserStore } from '@p/user.js'

import { useRouter } from '@u/common.js'

const user = useUserStore()

// 登录-保存用户信息-跳转页面
export const UtiLogin = async (params) => {
  const res = await userLogin(params)
  user.setUserInfo(res)

  UtiLoginPages()
}

// 退出-清除用户信息-跳转登录页
export const UtiLoginOut = async () => {
  user.setUserInfo(null)
  UtiLoginPages()
}

export const UtiLoginPages = () => {
  useRouter('/pages/home/index')
}
