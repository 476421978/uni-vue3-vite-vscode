<template>
  <div class="com-tab-bar">
    <template v-for="(item, index) in getTabList" :key="index">
      <label class="bar-item" @click="toPath(item)">
        <image class="bar-img" :src="item.dataIndex === selectIndex ? item.selectedIconPath : item.iconPath" />
        <div>{{ item.text }}</div>
      </label>
    </template>
  </div>
</template>

<script setup>
import { tabList } from './data.js'
import { useRouter } from '@u/common.js'

const props = defineProps({
  tabIndex: {
    type: String,
    default: '0'
  },
  selectIndex: {
    type: Number,
    default: 1
  }
})

const getTabList = computed(() => {
  return tabList[props.tabIndex]
})

function toPath(item) {
  useRouter(item.pagePath, {}, 'reLaunch')
}
</script>

<style lang="scss" scoped>
.com-tab-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bar-item {
  flex: 1;
  .bar-img {
    width: 32px;
    height: 32px;
  }
}
</style>
