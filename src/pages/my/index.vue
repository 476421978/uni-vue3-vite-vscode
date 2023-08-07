<template>
  <div class="page-home">
    <!-- #ifdef MP-WEIXIN -->
    <button type="primary" size="mini" open-type="chooseAvatar" @chooseavatar="getChooseavatar">获取微信头像</button>
    <div class="wechat-info">
      <image class="avatar" style="width: 100px; height: 100px" :src="avatarUrl" />
      <input class="input-name" type="nickname" placeholder="请输入昵称" />
    </div>
    <div class="line" />
    <!-- 个人小程序没权限 -->
    <button type="primary" size="mini" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
    <div>mobile: {{ mobile }}</div>
    <div class="line" />
    <!-- 微信用户信息 通过凭证进而换取用户登录态信息-->
    <button type="primary" size="mini" open-type="getUserInfo" @getuserinfo="getInfo">用户登录态信息</button>
    <div>{{ userInfo }}</div>
    <div class="line" />
    <!-- #endif -->

    <div>
      <div>ID:{{ userStore.userInfo.id }}</div>
      <div>用户名:{{ userStore.userInfo.name }}</div>
    </div>
    <div class="line" />
    <button @click="onLoginOut" size="mini">退出</button>
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="3" />
    </view>
  </div>
</template>

<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'
import { useUserStore } from '@p/user.js'
import { UtiLoginOut } from '@u/login'
import { Toast } from '@u/common'
import { wechatMobile, wechatInfo } from '@/api/wechat.js'

const userStore = useUserStore()

// #ifdef MP-WEIXIN
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const avatarUrl = ref('')
function getChooseavatar(e) {
  avatarUrl.value = e.detail.avatarUrl
}

const mobile = ref('')
async function getPhoneNumber(e) {
  const { code, errMsg } = e.detail
  Toast(errMsg)

  mobile.value = await wechatMobile({ js_code: code || '123456' })
}

let userInfo = reactive({
  openid: '',
  session_key: ''
})
function getInfo(e) {
  uni.login({
    provider: 'weixin', //使用微信登录
    success: async function (res) {
      const { code } = res
      const { openid, session_key } = await wechatInfo({ code })
      userInfo.openid = openid
      userInfo.session_key = session_key
    },
    fail: function (err) {
      console.log('err---', err)
    }
  })
}
// #endif

function onLoginOut() {
  UtiLoginOut()
}
</script>

<style lang="scss" scoped>
.page-home {
  text-align: center;
  padding: 20px;
  .bottom-bar {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}

.line {
  height: 30px;
}
</style>
