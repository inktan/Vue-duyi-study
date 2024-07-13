<script setup>
import { inject } from 'vue'
import { ref, onBeforeMount, onUpdated } from 'vue';
import { getBanners } from '@/api/banner';
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon/index.vue'
// 注入全局方法
// const showMessage = inject('$showMessage');

const banners = ref([])
onBeforeMount(async () => {
    banners.value = await getBanners();
    // console.log(`the component is onBeforeMount.`)
})
</script>

<template>
    <div v-if="banners.length > 0" class="home-container" id="home" ref="containerRef">
        <ul>
            <li v-for="item in banners" :key="item.id">
                <Carouselitem />
            </li>
        </ul>
        <div class="icon icon-up">
            <Icon iconType='arrowUp' />
        </div>
        <div class="icon icon-down">
            <Icon iconType='arrowDown' />
        </div>
        <ul class="indicator">
            <li v-for="item in banners" :key="item.id">~</li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.home-container {
    background-color: aliceblue;
    // padding: 10px;
    width: 100%;
    height: 100%;
}
</style>