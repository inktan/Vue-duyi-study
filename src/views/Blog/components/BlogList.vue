<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';
import Pager from '@/components/Pager/index.vue'
import { getBlogs } from '@/api';
import { formatDate } from '@/utils'
import { RouterLink } from 'vue-router'

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const blogs = ref([])
const loading = ref(true)

onBeforeMount(async () => {
    blogs.value = await getBlogs(routeInfo.value.page, routeInfo.value.limit,);
    loading.value = false;
    // console.log(routeInfo.value);
})

const routeInfo = computed(() => {
    const categoryId = parseInt(route.params.categoryId) || -1;
    const page = parseInt(route.query.page) || 1;
    const limit = parseInt(route.query.limit) || 10;
    return {
        categoryId,
        page,
        limit,
    };
})

function handlePageChange(newPageNumber) {
    const query = {
        page: newPageNumber,
        limit: route.query.limit,
    }

    if (!route.params.categoryId || route.params.categoryId === '-1') {
        // router.push('/about');
        router.push({
            name: 'Blog',
            query,
        });
    }
    else {
        router.push({
            name: 'CategoryBlog',
            query,
            params: {
                categoryId: routeInfo.value.categoryId,
            }
        });
    }
}
const containerRef = ref(null);
watch(
    () => route.fullPath,
    async (newValue, oldValue) => {
        loading.value = true;
        // 页面滚动高度为0
        if (containerRef.value)
            containerRef.value.scrollTop = 0;
        blogs.value = await getBlogs(routeInfo.value.page, routeInfo.value.limit,);
        loading.value = false;

    },
    { immediate: true },
)
</script>

<template>
    <div class="blog-list-container" v-loading="loading" ref="containerRef">
        <ul>
            <li v-for="item in blogs.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <RouterLink :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id,
                        }
                    }">{{ item.category.name }}
                        <img :src="item.thumb" :alt="item.title" :title="item.title">
                    </RouterLink>
                </div>
                <div class="main">
                    <RouterLink :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id,
                        }
                    }">
                        <h2>{{ item.title }}</h2>
                    </RouterLink>
                    <div class="aside">
                        <span>日期:{{ formatDate(item.createDate) }}</span>
                        <span>浏览:{{ item.scanNumber }}</span>
                        <span>评论:{{ item.commentNumber }}</span>
                        <RouterLink :to="{
                            name: 'CategoryBlog',
                            params: {
                                categoryId: item.category.id,
                            }
                        }">{{ item.category.name }}</RouterLink>
                    </div>
                    <div class="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </li>
        </ul>
        <Pager v-if="blogs.total" :current="routeInfo.page" :total="blogs.total" :limit="routeInfo.limit"
            :visibleNumber="10" @pageChange="handlePageChange" />
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";

.blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    scroll-behavior: smooth;

    li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid @gray;

        .thumb {
            flex: 0 0 auto;
            margin-right: 15px;

            img {
                display: block;
                max-width: 200px;
                border-radius: 5px;
            }
        }

        .main {
            flex: 1 1 auto;

            h2 {
                margin: 0;
            }

            .aside {
                font-size: 12px;
                color: @gray;

                span {
                    margin-right: 15px;
                }
            }

            .desc {
                margin: 15px 0;
                font-size: 14px;
            }
        }

    }
}
</style>