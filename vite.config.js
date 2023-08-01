import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      '@s': `${path.resolve('src/static')}`,
      '@p': `${path.resolve('src/pinia-store')}`,
      '@c': `${path.resolve('src/components')}`,
      '@i': `${path.resolve('src/static/images')}`,
      '@u': `${path.resolve('src/utils')}`
    }
  },
  plugins: [
    uni(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // uni-app
      imports: ['vue', 'vue-router', 'uni-app']
    }),
    Components(),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ]
})
