<script setup  lang="ts">
import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';

const props = defineProps({
    listData: {
        //[{name:'xxx',isSelect:bool,children:[{name:'xxx',isSelect:bool}]}]
        type: Array,
        default: () => [],
    },
})

const emit = defineEmits(['selected']); // 定义一个名为 'some-event' 的事件

const handleClick = function (item) {
    if (!item.isSelected) {
        emit('selected', item)
    }
}
const containerRef = ref<HTMLElement | null>(null)

// 使用 defineComponent 定义组件名称
defineComponent({ name: 'RightList' });
</script>

<template>
    <div class="container">
        <ul>
            <li v-for="item in listData">
                <span @click="handleClick(item)" :class="{ active: item.isSelected }"> {{ item.name }}</span>
                <RightList :listData="item.children" @selected="handleClick" />
            </li>
            <!-- 组件递归 -->
        </ul>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";

.container {
    // width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    overflow: auto;


    ul {
        margin-top: 10px;
        margin-left: 12px;

        li {
            cursor: pointer;
            min-height: 20px;
            line-height: 16px;
            font-size: 14px;

            .active {
                color: rgb(19, 196, 113);
            }
        }
    }
}
</style>