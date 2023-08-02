<script>
import routingIntercept from '@u/permission.js'
import { GetToken, UtiLoginPages } from '@u/login.js'
export default {
  onLaunch: function () {
    console.log('App Launch')
    // 对路由进行统一拦截，实现路由导航守卫 router.beforeEach 功能
    routingIntercept()

    // 判断是否已登录
    const token = GetToken()
    console.log('token', token)
    token && UtiLoginPages()
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
</style>
