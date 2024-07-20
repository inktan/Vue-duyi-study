<script setup>
import Layout from '@/components/Layout.vue'
import BlogToc from '@/views/Blog/components/BlogToc.vue'
import BlogDetail from '@/views/Blog/components/BlogDetail.vue'
import BlogComment from '@/views/Blog/components/BlogComment.vue'

import { provide, ref, onBeforeMount, nextTick, onMounted, onUpdated, watchEffect, computed, defineComponent, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBlog } from '@/api';
import eventBus from '@/eventBus';

const route = useRoute();
const router = useRouter();

const blogInfo = ref('')
const loading = ref(false)
const mainContainerRef = ref(null);
const mainContainerRefClientHeight = ref(0);

onMounted(async () => {
    await nextTick();
    mainContainerRefClientHeight.value = mainContainerRef.value.offsetHeight;
    // 监听hash变化，使用watchEffect自动收集依赖
    watchEffect(() => {
        scrollToElement(route.hash);
    });
    mainContainerRef.value.addEventListener('scroll', handleScroll);
})

onBeforeMount(async () => {
    loading.value = true;
    blogInfo.value = await getBlog(route.params.id);
    loading.value = false;
})

onUnmounted(() => {
    if (mainContainerRef.value) {
        mainContainerRef.value.removeEventListener('scroll', handleScroll);
    }
})
// 监视滚动条的变化
const handleScroll = (event) => {
    // 当滚动事件触发时，通过事件总线调用子组件的函数
    eventBus.emit('register-scroll', event);
};

const scrollToElement = (hash) => {
    // 获取hash值（去除'#'）
    hash = hash.substring(1);
    // 查找对应的元素
    const element = document.getElementById(hash);
    // 如果元素存在，滚动到该元素
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// 使用 provide 来提供这个方法
provide('scrollToElement', scrollToElement);

</script>

<template>
    <div class="container">
        <Layout>
            <template #main>
                <div class="main-container" id="main-container" v-loading="loading" ref="mainContainerRef">
                    <BlogDetail v-if="blogInfo" :blog="blogInfo" />
                    <BlogComment v-if="!loading" />
                </div>
                <el-backtop target="#main-container" :visibility-height="120" :right="100" :bottom="100" />
            </template>
            <template #right>
                <div class="right-container" v-loading="loading">
                    <BlogToc :toc="blogInfo.toc" v-if="blogInfo.toc"
                        :mainContainerRefClientHeight="mainContainerRefClientHeight" />
                    <!-- BlogToc监听 main-container 的滚动位置 -->
                </div>
            </template>
        </Layout>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";

.container {
    width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    padding: 12px;
    position: relative;

    .main-container {
        width: 100%;
        height: 100%;
        // background-color: rgb(189, 189, 189);
        overflow: auto;
    }

    .right-container {
        width: 300px;
        height: 100%;
        // background-color: rgb(177, 177, 177);
        // overflow-y: auto;
    }
}
</style>