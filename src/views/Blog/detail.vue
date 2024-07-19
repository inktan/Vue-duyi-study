<script setup>
import Layout from '@/components/Layout.vue'
import BlogToc from '@/views/Blog/components/BlogToc.vue'
import BlogDetail from '@/views/Blog/components/BlogDetail.vue'
import BlogComment from '@/views/Blog/components/BlogComment.vue'

import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBlog } from '@/api';

const route = useRoute();
const router = useRouter();

const blogInfo = ref('')
const loading = ref(false)
const mainContainerRef = ref(null);
const scrollTop = ref(0);

onMounted(() => {
    const id = route.params.id;
})

// 监视滚动条的变化
const handleScroll = (event) => {
    scrollTop.value = event.target.scrollTop;
    console.log(scrollTop.value);
};

onBeforeMount(async () => {
    loading.value = true;
    blogInfo.value = await getBlog(route.params.id);
    loading.value = false;

    mainContainerRef.value.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    mainContainerRef.value.removeEventListener('scroll', handleScroll);
})

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
                <el-color-picker />
            </template>
            <template #right>
                <div class="right-container" v-loading="loading">
                    <BlogToc :scrollTop="scrollTop" :toc="blogInfo.toc" v-if="blogInfo.toc" />
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