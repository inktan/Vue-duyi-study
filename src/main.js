import '@/styles/reset.css'
import '@/styles/global.less'
import Mock from "mockjs"

import { createApp, h } from 'vue'
import { showMessage } from '@/utils';
import './mock'

import App from './App.vue'
// import App from './App-RightList.vue'
const app = createApp(App)

import router from './router'
app.use(router)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.provide('$showMessage', showMessage)
app.mount('#app')

