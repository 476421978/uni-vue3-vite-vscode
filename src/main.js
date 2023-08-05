import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage' // pinia数据持久化
import App from './App.vue'
import { setStorage, getStorage, removeStorage, getAllStorage, clearStorage } from '@/utils/storage'

// 全局样式
import '@/static/style/base.css'
import '@/static/style/uniComponents.scss'
import '@/static/icon/symbol/iconfont-weapp-icon.css' // 彩色图标
import '@/static/icon/fontClass/iconfont.css' // 在线fontClass图标

// 设置全局属性
function setGlobalProperties(app) {
  // #ifdef H5
  app.provide(
    '$isMobile',
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  )
  // #endif

  app.provide('$setStorage', setStorage)
  app.provide('$getStorage', getStorage)
  app.provide('$removeStorage', removeStorage)
  app.provide('$getAllStorage', getAllStorage)
  app.provide('$clearStorage', clearStorage)
}

export function createApp() {
  const app = createSSRApp(App)

  setGlobalProperties(app)

  // Pinia
  const store = Pinia.createPinia()
  store.use(createUnistorage())
  app.use(store)

  return {
    app,
    Pinia
  }
}
