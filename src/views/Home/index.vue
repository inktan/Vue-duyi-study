<script setup>
import { inject } from 'vue'
import { ref, onBeforeMount, onUpdated } from 'vue';
import { getBanners } from '@/api/banner';
import Carouselitem from './Carouselitem.vue'
// 注入全局方法
// const showMessage = inject('$showMessage');

const banners = ref([])
onBeforeMount(async () => {
    banners.value = await getBanners();
    // console.log(`the component is onBeforeMount.`)
})
</script>

<template>
    <Carouselitem />
    <div v-if="banners.length > 0" class="home-container" id="home" ref="containerRef">
        <ul>
            <li v-for="item in banners" :key="item.id">{{ item.id + ' ' + item.description }}</li>
        </ul>
        <h1 ref="paraRef">首页</h1>
        <h1 ref="paraRef">{{ banners.length }}</h1>
    </div>
</template>

<style lang="less" scope>
.home-container {
    background-color: aliceblue;
    padding: 10px;
}
</style>