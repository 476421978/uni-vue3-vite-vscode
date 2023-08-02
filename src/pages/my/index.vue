<template>
  <div class="page-home">
    my
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="3" />
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
</style>
