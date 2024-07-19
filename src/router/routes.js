
import About from '@/views/About/index.vue'
import Detail from '@/views/Blog/detail.vue'
import Blog from '@/views/Blog/index.vue'
import Home from '@/views/Home/index.vue'
import Message from '@/views/Message/index.vue'
import Project from '@/views/Project/index.vue'

export default [
    { path: "/About", name: 'About', component: About },
    { path: "/Blog", name: 'Blog', component: Blog },
    { path: "/Blog/cate/:categoryId", name: 'CategoryBlog', component: Blog, default: { categoryId: -1 }, },
    { path: "/BlogDetail/:id", name: 'BlogDetail', component: Detail, default: { id: 1 }, },
    { path: "/", name: 'Home', component: Home },
    { path: "/Message", name: 'Message', component: Message },
    { path: "/Project", name: 'Project', component: Project },
]