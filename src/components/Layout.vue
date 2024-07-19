<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const config = reactive({
    content: 'goa',
    font: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.15)',
    },
    zIndex: -1,
    rotate: -22,
    gap: [100, 100],
    offset: [],
})
</script>
<template>
    <div class="layout-container">
        <!-- <header> -->
        <!-- 内置组件 插槽 占位 -->
        <!-- <slot name="left"></slot> -->
        <!-- </header> -->
        <!-- <main> -->
        <!-- <slot name="main"></slot> -->
        <!-- </main> -->
        <!-- <footer> -->
        <!-- <slot name="right"></slot> -->
        <!-- </footer> -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="main">
            <!-- <el-watermark class="watermark" :content="config.content" :font="config.font" :z-index="config.zIndex"
                :rotate="config.rotate" :gap="config.gap" :offset="config.offset">
            </el-watermark> -->
            <slot name="main"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout-container {
    height: 100%;
    width: 100%;
    display: flex;

    .left,
    .right {
        flex: 0 0 auto;
        height: 100%;
    }

    .main {
        flex: 1 1 auto;
        height: 100%;
    }
}
</style>