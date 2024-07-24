
import NotFound from '@/views/NotFound.vue'
import Detail from '@/views/Blog/detail.vue'
import Blog from '@/views/Blog/index.vue'
import Message from '@/views/Message/index.vue'
import Project from '@/views/Project/index.vue'

import "nprogress/nprogress.css";
import { start, done, configure, trickle } from "nprogress";

// 页面等待的时候，浏览器窗口上方会显示进度条
configure({
    trickleSpeed: 10, // 滚动条的速度
    // showSpinner: false, // 低端是否显示小圈圈
})

window.start = start;
window.done = done;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getPageComponent(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp
    }
}

export default [
    {
        path: "/About",
        name: 'About',
        component: getPageComponent(() => import(/* webpackChunkName: "about"*/ "@/views/About/index.vue")),
        meta: {
            title: '关于'
        }
    },
    {
        path: "/Blog", name: 'Blog', component: Blog, meta: {
            title: '博客'
        }
    },
    {
        path: "/Blog/cate/:categoryId", name: 'CategoryBlog', component: Blog, default: { categoryId: -1 }, meta: {
            title: '博客分类'
        }
    },
    {
        path: "/BlogDetail/:id", name: 'BlogDetail', component: Detail, default: { id: 1 }, meta: {
            title: '文章详情'
        }
    },
    {
        path: "/",
        name: 'Home',
        component: getPageComponent(() => import(/* webpackChunkName: "home"*/ "@/views/Home/index.vue")),
        meta: {
            title: '主页'
        },
    },
    {
        path: "/Message", name: 'Message', component: Message, meta: {
            title: '留言板'
        }
    },
    {
        path: "/Project", name: 'Project', component: Project, meta: {
            title: '项目'
        }
    },
    {
        path: "/:pathMatch(.*)*", name: 'NotFound', component: NotFound
    },
]

