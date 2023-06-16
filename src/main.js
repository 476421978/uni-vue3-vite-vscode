import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage' // pinia数据持久化
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)

  // Pinia
  const store = Pinia.createPinia()
  store.use(createUnistorage())
  app.use(store)

  return {
    app,
    Pinia
  }
}
