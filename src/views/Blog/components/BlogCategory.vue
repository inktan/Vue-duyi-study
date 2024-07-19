<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';
import RightList from './RightList.vue'
import { getBlogTypes } from '@/api';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const listData = ref([])
const loading = ref(false)

const categoryId = computed(() => {
    return parseInt(route.params.categoryId) || -1;
})

const listDataCount = computed(() => {
    if (listData.value.length < 1)
        return []
    // 使用 reduce 方法对 articleCount 属性进行求和，并将字符串转为整数
    const totalArticleCount = listData.value.reduce((accumulator, currentCategory) => {
        // 将字符串转为整数
        const intArticleCount = parseInt(currentCategory.articleCount, 10);
        return accumulator + intArticleCount;
    }, 0); // 初始值设置为 0

    const result = [
        {
            name: '全部',
            id: -1,
            articleCount: totalArticleCount
        },
        ...listData.value];

    // console.log(categoryId.value)

    return result.map(it => (
        {
            ...it,
            isSelected: it.id === categoryId.value,
            aside: `${it.articleCount}篇`
        }
    ));
});

onBeforeMount(async () => {
    loading.value = true;
    listData.value = await getBlogTypes(categoryId);
    loading.value = false;
})

function handleSelected(item) {
    const query = {
        page: 1,
        limit: route.query.limit || 10,
    }

    if (item.id === -1) {
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
                categoryId: item.id,
            }
        });
    }
}

</script>

<template>
    <div class="blog-category-container" v-loading="loading">
        <h2>文章分类</h2>
        <RightList :listData="listDataCount" @selected="handleSelected" />
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";

.blog-category-container {
    width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    padding: 20px;

    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
    }
}
</style>