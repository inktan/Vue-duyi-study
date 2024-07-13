import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  // 路由匹配规则
  routes: routes,
  // [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // 
  // ]
})

// console.log(router)

export default router
  