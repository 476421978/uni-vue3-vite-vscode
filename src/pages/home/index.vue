<template>
  <div class="page-home">
    <!-- #ifdef MP-WEIXIN -->
    <button type="primary" open-type="chooseAvatar" @chooseavatar="getChooseavatar">获取微信头像</button>
    <div class="wechat-info">
      <image class="avatar" :src="avatarUrl" />
      <input class="input-name" type="nickname" placeholder="请输入昵称" />
    </div>
    <!-- #endif -->

    <!-- 个人小程序没权限 -->
    <!-- <button type="primary" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button> -->

    <div class="t-icon t-icon-shutiao" />

    <div class="iconfont icon-shutiao" />

    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="1" />
    </view>
  </div>
</template>

<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'
import { wechatLogin } from '@/api/wechat'

// #ifdef MP-WEIXIN
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const avatarUrl = ref('')
function getChooseavatar(e) {
  avatarUrl.value = e.detail.avatarUrl
}

function getPhoneNumber(e) {
  const { code } = e.detail
}
// #endif
</script>

<style lang="scss" scoped>
.page-home {
  .bottom-bar {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
// #ifdef MP-WEIXIN
.wechat-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .avatar {
    height: 100px;
    width: 100px;
  }
  .input-name {
    margin-top: 20px;
    width: 100px;
  }
}
// #endif
</style>
