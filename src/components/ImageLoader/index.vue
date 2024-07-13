<script setup>
import { ref, reactive, computed, toRefs } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        dafault: 2000,
    }
})

const { src, placeholder, duration } = toRefs(props);

const originLoad = ref(false)
const everythingDone = ref(false)

// 一个计算属性 ref
const originOpactity = computed(() => {
    return originLoad.value ? 1 : 0;
})

const emit = defineEmits(['loaded']); // 定义一个名为 'some-event' 的事件


function handleLoaded() {
    originLoad.value = true;
    // console.log("原图加载完成")
    setTimeout(
        () => {
            everythingDone.value = true;
            // console.log(this.everythingDone)

            // 在适当的时候触发事件
            emit('loaded', '这是事件数据');
        }, duration.value);
}
</script>

<template>
    <div class="image-loader-contanier">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
        <img @load="handleLoaded" :src="src" alt="" class="origin"
            :style="{ opacity: originOpactity, transition: `${duration}ms` }">
    </div>
</template>

<style lang="less" scope>
@import "../../styles/mixin.less";
@import "../../styles/var.less";

.image-loader-contanier {
    // .self-center(absolute);
    // color: @lightWords;
    // text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        .self-fill(absolute);
        object-fit:contain;
        object-fit: cover
    }

    .origin {
        opacity: 0;
    }

    .placeholder {
        filter: blur(2vw);
    }
}
</style>