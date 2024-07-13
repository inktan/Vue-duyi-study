import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  // port: 5000, // 设置服务器端口
  // open: true, // 自动打开浏览器
  // proxy: {
  // '/api': {
  // 匹配以 '/api' 开头的请求
  // target: 'http://10.1.12.30:5000', // 代理目标的基础路径
  // changeOrigin: true, // 是否改变源（重要，解决跨域问题）
  // pathRewrite: {
  // '^/api': '' // 重写路径，将 '/api' 替换为空字符串
  // },
  // },
  // '/test_api': {
  // target: 'http://10.1.12.30:5000', // 代理目标的基础路径
  // target: 'https://image.baidu.com', // 代理目标的基础路径
  // changeOrigin: true, // 是否改变源（重要，解决跨域问题）
  // },
  // }
  // }
})
