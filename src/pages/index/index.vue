<template>
  <view class="page-index">
    <view class="content-box">
      <view>{{ title }}</view>
      <template v-for="(item, index) in listAll" :key="index">
        <view>{{ item }}</view>
      </template>
    </view>
    <view> count: {{ count }} plusOne: {{ plusOne }} </view>
    <view>Pinia: {{ user.userInfo }}</view>
    <view
      >Axios2
      <button type="primary" size="mini" @click="onRequest">请求</button>
    </view>
    <view> uni-ui:<uni-icons type="bars" size="16"></uni-icons> </view>
    <!-- 底部导航 -->
    <view class="bottom-bar">
      <tabBar></tabBar>
    </view>
  </view>
</template>

<script setup>
import { wxLogin, getPhoneNumber } from '@/api/user.js'
import { useUserStore } from '@p/user.js'
import tabBar from '@/components/tab-bar/tab-bar.vue'

// 设置用户信息 - 打印用户信息
const user = useUserStore()
const data = { userName: 'hlg' }
user.setUserInfo(data)

const title = ref('主页title')
let listAll = ref([
  {
    id: 0,
    name: 'item-one'
  }
])

const count = ref(1)
const plusOne = computed({
  get: () => {
    count.value + 1
  },
  set: (val) => {
    count.value = val - 1
  }
})
plusOne.value = 1

const obj = reactive({ count: 0 })
obj.count++

const onRequest = () => {
  wxLogin().then((res) => {
    console.log('res---', res)
  })
}

onMounted(() => {})
</script>

<style lang="scss">
.page-index {
  display: flex;
  flex-direction: column;

  .content-box {
    flex: 1;
    overflow-y: auto;
  }

  .bottom-bar {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
</style>
