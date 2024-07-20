<script setup>
import { ref, inject, onBeforeMount, nextTick, onMounted, reactive, computed, defineComponent, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { formatDate } from '@/utils'
import { RouterLink } from 'vue-router'

const route = useRoute();
const router = useRouter();
const loading = ref(false)
const bolgContent = ref('<h1>Hello, World!</h1><p>This is a raw HTML content.</p>')

const props = defineProps({
    blog: { type: Object, required: true, },
})
// 使用 inject 来接收提供的方法
const scrollToElement = inject('scrollToElement');

onMounted(async () => {
    await nextTick();
    scrollToElement(route.hash)
})

</script>

<template>
    <div class="BlogDetail-container">
        <h1>{{ blog.title }}</h1>
        <div class="aside">
            <span>日期：{{ formatDate(blog.createDate) }}</span>
            <span>浏览：{{ blog.scanNumber }}</span>
            <a href="#message-area-container">评论：{{ blog.commentNumber }}</a>
            <RouterLink :to="{
                name: 'CategoryBlog',
                params: {
                    categoryId: blog.category.id,
                }
            }">分类：{{ blog.category.name }}</RouterLink>
        </div>
        <!-- 使用v-html语义化html字符串 -->
        <div v-html="blog.htmlContent" class="markdown-body">
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";


.container {
    width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    // padding: 20px;

    // h2 {
    //     font-weight: bold;
    //     letter-spacing: 2px;
    //     font-size: 1em;
    // }
    .test {
        margin: 20px;
        // input
    }
}
</style>