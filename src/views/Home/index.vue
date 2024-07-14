<script setup>
import { inject } from 'vue'
import { ref, onBeforeMount, onMounted, onUpdated, computed, nextTick, watch, } from 'vue';
import { getBanners } from '@/api/banner';
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon/index.vue'
// 注入全局方法
// const showMessage = inject('$showMessage');

const banners = ref([])
const index = ref(2) // 当前是第几张轮播图
const containerRef = ref(null);

const marginTop = computed(() => {
    if (containerRef.value) {
        // console.log(-index.value * containerRef.value.clientHeight + 'px');
        return -index.value * containerRef.value.clientHeight + 'px';
    }
    else {
        return '0px';
    }
})

onBeforeMount(async () => {
    banners.value = await getBanners();
})

</script>

<template>
    <div v-if="banners.length > 0" class="home-container" id="home" :style="{ marginTop: marginTop }">
        <ul class="banners" ref="containerRef">
            <li v-for="item in banners" :key="item.id">
                <Carouselitem :txt01="item.description" />
            </li>
        </ul>
        <div v-show="index > 0" class="icon icon-up">
            <Icon :size="30" iconType='arrowUp' />
        </div>
        <div v-show="index < banners.length" class="icon icon-down">
            <Icon :size="30" iconType='arrowDown' />
        </div>
        <ul class="indicator">
            <li :class="{ activate: i === index }" v-for="(item, i) in banners" :key="item.id"></li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.home-container {
    background-color: @dark;
    // padding: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    // overflow: hidden;

    .banners {
        width: 100%;
        height: 100%;
        // overflow: hidden;

        li {
            background-color: @dark;
            width: 100%;
            height: 100%;
            color: #fff;
        }
    }

    .indicator {
        .self-center();
        transform: translateY(-50%);
        left: auto;
        right: 10px;

        li {
            // list-style-type: disc;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: @words;
            cursor: pointer;
            margin-bottom: 10px;
            border: 1px solid #fff;

            &.activate {
                background: #fff;

            }
        }
    }

    .icon {
        cursor: pointer;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        @gap: 25px;
        color: @gray;

        &.icon-up {
            top: @gap;
            bottom: auto;
            animation: jump-up 2s infinite;
        }

        &.icon-down {
            top: auto;
            bottom: @gap;
            animation: jump-down 2s infinite;
        }

        @jump: 5px;

        @keyframes jump-up {
            0% {
                transform: translate(-50%, @jump);
            }

            50% {
                transform: translate(-50%, -@jump);
            }

            100% {
                transform: translate(-50%, @jump);
            }
        }

        @keyframes jump-down {
            0% {
                transform: translate(-50%, -@jump);
            }

            50% {
                transform: translate(-50%, @jump);
            }

            100% {
                transform: translate(-50%, -@jump);
            }
        }

    }
}
</style>