/**
 * @description 用户信息数据持久化
 * state、computed可以直接访问
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  unistorage: true, // 是否持久化
  state() {
    return {
      userInfo: {}
    }
  },
  actions: {
    setUserInfo(data) {
      this.userInfo = data
    }
  }
})
