import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  // 路由匹配规则
  routes: routes,
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    // console.log(to.meta.title)
    document.title = to.meta.title;
  }
})

export default router
