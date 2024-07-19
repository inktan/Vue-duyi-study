import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  // 路由匹配规则
  routes: routes,
})


export default router
