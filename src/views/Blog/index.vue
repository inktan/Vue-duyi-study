<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';

import Layout from '@/components/Layout.vue'
import BlogList from '@/views/Blog/components/BlogList.vue'
import BlogCategory from '@/views/Blog/components/BlogCategory.vue'

</script>
<template>
    <div class="container">
        <Layout>
            <template #left>
            </template>
            <template #main>
                <div class="main-container" id="main-container">
                    <BlogList />
                </div>

            </template>
            <template v-slot:right>
                <div class="right-container">
                    <BlogCategory />
                </div>
            </template>
        </Layout>
    </div>
</template>
<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;

    .main-container {
        // background-color: aliceblue;
        // width: 100%;
        height: 100%;
    }

    .right-container {
        background-color: antiquewhite;
        width: 300px;
        height: 100%;
    }
}
</style>