<template>
  <div class="page-home">
    my
    <uni-button @click="onLoginOut">退出</uni-button>
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="3" />
    </view>
  </div>
</template>

<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'

import { UtiLoginOut } from '@u/login'

function onLoginOut() {
  UtiLoginOut()
}
</script>

<style lang="scss" scoped>
.page-home {
  .bottom-bar {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
</style>
