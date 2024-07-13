// import './assets/main.css'
import '@/styles/reset.css'
import '@/styles/global.less'

import { createApp } from 'vue'

// import App from './App-Layout.vue'
// import App from './App-SiteAside.vue'
// import App from './App-Menu.vue'
// import App from './App-Contact.vue'
// import App from './App-Pager.vue'
// import App from './App-ImageLoader.vue'
// import App from './App-Empty.vue'
// import App from './App-Icon.vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

app.mount('#app')
