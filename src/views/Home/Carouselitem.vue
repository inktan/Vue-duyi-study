<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ImageLoader from '@/components/ImageLoader/index.vue'

const props = defineProps({
    carousel: {
        type: {},
        required: true
    },
})
const titleRef = ref(null)
const desRef = ref(null)
const titleWidth = ref(0);
const desWidth = ref(0);

const containerRef = ref(null);
const imageRef = ref(null);
const containerSize = ref(null); //外层容器的尺寸
const innerSize = ref(null); // 里层图片的尺寸

const mouseX = ref(0);
const mouseY = ref(0);

onMounted(() => {
    titleWidth.value = titleRef.value.clientWidth;
    desWidth.value = desRef.value.clientWidth;
    showWords();
    setSize();
    window.addEventListener('resize', setSize);
    // 默认显示居中
    mouseX.value = containerSize.value.width * 0.5;
    mouseY.value = containerSize.value.height * 0.5;
});
onUnmounted(() => {
    window.removeEventListener('resize', setSize);
});

const marginTop = computed(() => {
    if (!innerSize.value || !containerSize.value) {
        return { left: '0px', top: '0px' };
    }
    const extraWidth = innerSize.value.width - containerSize.value.width;
    const extraHeight = innerSize.value.height - containerSize.value.height;
    const left = -extraWidth / containerSize.value.width * mouseX.value;
    const top = -extraHeight / containerSize.value.height * mouseY.value;
    return {
        transform: `translate(${left}px,${top}px`
        // left: left + 'px',
        // top: top + 'px',
    }
})

function handleMouseMove(e) {
    const rect = containerRef.value.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
}
function handleMouseLeave(e) {
    const rect = containerRef.value.getBoundingClientRect();
    // 默认显示居中
    mouseX.value = containerSize.value.width * 0.5;
    mouseY.value = containerSize.value.height * 0.5;
}
function setSize() {

    containerSize.value = {
        width: containerRef.value.clientWidth,
        height: containerRef.value.clientHeight,
    }
    innerSize.value = {
        width: imageRef.value.clientWidth,
        height: imageRef.value.clientHeight,
    }
    // console.log(containerSize.value, innerSize.value)
}

function showWords() {
    titleRef.value.style.opacity = 1;
    titleRef.value.style.width = 0;
    titleRef.value.style.textWrap = 'nowrap';
    titleRef.value.style.overflow = 'hidden';

    //  强制dom渲染
    titleRef.value.clientWidth;
    titleRef.value.style.width = titleWidth.value + 'px';
    titleRef.value.style.transition = '0.51s';
    titleRef.value.style.opacity = 1;

    // 
    desRef.value.style.opacity = 1;
    desRef.value.style.width = 0;
    desRef.value.style.textWrap = 'nowrap';
    desRef.value.style.overflow = 'hidden';

    //  强制dom渲染
    desRef.value.clientWidth;
    desRef.value.style.width = desWidth.value + 'px';
    desRef.value.style.transition = '2.51s 0.51s';
    desRef.value.style.textWrap = 'wrap';
    // desRef.value.style.overflow = 'auto';

}
</script>

<template>
    <div class="Carouselitem-container" ref="containerRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="imageRef" :style="marginTop">
            <ImageLoader @load="showWords" :src="carousel.bigMig" :placeholder="carousel.midImg" />
        </div>
        <div>横坐标：{{ mouseX }}纵坐标：{{ mouseY }}</div>
        <div>{{ marginTop }}</div>
        <div class="title" ref="titleRef">{{ carousel.title }}</div>
        <div class="des" ref="desRef">{{ carousel.description }}</div>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.Carouselitem-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    .carousel-img {
        width: 110%;
        height: 110%;
        position: absolute;
        z-index: -1;
        transition: 0.2s;
        left: 0;
        top: 0;
    }

    .title,
    .des {
        position: absolute;
        left: 30px;
        letter-spacing: 2px;
        color: lighten(@dark, 10%);
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5),
            -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5),
            0 -1px 0 rgba(0, 0, 0, 0.5);
        color: white;
        opacity: 0;
        z-index: 999;
    }

    .title {
        top: calc(50% - 20px);
        font-size: 2em;
    }

    .des {
        top: calc(50% + 30px);
        font-size: 1.2em;
    }

}
</style>