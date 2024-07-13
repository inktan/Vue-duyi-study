import '@/styles/reset.css'
import '@/styles/global.less'

import { createApp, h } from 'vue'
import { showMessage } from '@/utils';
import './mock'

// import App from './App-Clock.vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)
app.provide('$showMessage', showMessage)
app.mount('#app')
