<template>
  <div class="page-home">
    func
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar :selectIndex="2" />
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
