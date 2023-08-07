<template>
  <div class="page-home">
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="1" />
    </view>
  </div>
</template>

<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'
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
