
import About from '@/views/About/index.vue'
import Blog from '@/views/Blog/index.vue'
import Home from '@/views/Home/index.vue'
import Message from '@/views/Message/index.vue'
import Project from '@/views/Project/index.vue'

export default [
    { path: "/About", name: 'About', component: About },
    { path: "/Blog", name: 'Blog', component: Blog },
    { path: "/", name: 'Home', component: Home },
    { path: "/Message", name: 'Message', component: Message },
    { path: "/Project", name: 'Project', component: Project },
]