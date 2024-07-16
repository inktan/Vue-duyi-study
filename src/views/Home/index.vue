<script setup>
import { inject } from 'vue'
import { ref, onBeforeMount, onMounted, onUpdated, computed, nextTick, watch, onUnmounted } from 'vue';
import { getBanners } from '@/api';
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon/index.vue'

const banners = ref([])
const index = ref(0) // 当前是第几张轮播图
const containerRef = ref(null);
const switching = ref(false); // 是否正在翻页中
const containerHeight = ref(0);
const loading = ref(true)

onMounted(() => {
    window.addEventListener("resize", handleResize);
})

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
})
// 实时监控窗口尺寸变化
function handleResize() {
    // console.log(-index.value * containerRef.value.clientHeight + 'px');
    if (containerRef.value)
        containerHeight.value = containerRef.value.clientHeight;
}

const marginTop = computed(() => {
    if (containerRef.value) {
        if (containerHeight.value === 0)
            return -index.value * containerRef.value.clientHeight + 'px';
        return -index.value * containerHeight.value + 'px';
    }
})

onBeforeMount(async () => {
    banners.value = await getBanners();
    loading.value = false;
})

function switchTo(i) {
    index.value = i;
}

function handleWheel(e) {
    if (switching.value) {
        return;
    }
    // 往上滚动
    if (e.deltaY < -5 && index.value > 0) {
        switching.value = true;
        index.value--;
    }
    // 往下滚动
    else if (e.deltaY > 5 && index.value < banners.value.length - 1) {
        switching.value = true;
        index.value++;
    }
}

function handleTransitionEnd() {
    switching.value = false;
}

</script>

<template>
    <div class="loader" v-loading="loading" element-loading-background="rgba(222, 222, 222, 0.5)" element-loading-text="Loading...">
        <div v-if="banners.length > 0" class="home-container" id="home" @wheel="handleWheel">
            <ul class="carousel-container" ref="containerRef" :style="{ marginTop: marginTop }"
                @transitionend="handleTransitionEnd">
                <li v-for="item in banners" :key="item.id">
                    <Carouselitem :carousel="item" />
                </li>
            </ul>
            <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
                <Icon :size="30" iconType='arrowUp' />
            </div>
            <div v-show="index < banners.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
                <Icon :size="30" iconType='arrowDown' />
            </div>
            <ul class="indicator">
                <li :class="{ activate: i === index }" v-for="(item, i) in banners" :key="item.id" @click="switchTo(i)">
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.loader,.home-container {
    // background-color: @dark;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; //注意外边距合并
    // clear: both;

    // 测试
    // width: 50%;
    // height: 50%;
    // overflow: visible;
    // border: 2px solid #008c8c;
    // margin: 100px auto;

    .carousel-container {
        width: 100%;
        height: 100%;
        transition: 500ms;

        li {
            // background-color: @dark;
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